import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthToken } from "../app/useStore";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function UpdateLangForm() {

    useEffect(() => {
        getAllLanguages()
    }, [])



    const [langLoading, setLangLoading] = useState(false)
    const [languages, setLanguages] = useState([]);
    const [isLangUpdating, setIsLangUpdating] = useState(false)
    const [isLangSearching, setIsLangSearching] = useState(false)
    const [selectedLang, setSelectedLang] = useState(null)

    const [updateLangName, setUpdateLangName] = useState('');
    const [updateLangThumb, setUpdateLangThumb] = useState('')
    const [updateLangDesc, setUpdateLangDesc] = useState('');
    const [updateLangLogo, setUpdateLangLogo] = useState('');

    const token = AuthToken()

    const handleAddLang = async (event) => {

        event.preventDefault();
        const FData = new FormData(event.currentTarget);


        const data = {
            "language_name": FData.get('languagename'),
            "short_form": FData.get('shortform'),
            "thumbnail": FData.get('langThumb'),
            "lang_desc": FData.get('langDesc'),
            "lang_logo": FData.get('langLogo')
        }

        if (data.language_name.trim() !== "" && data.short_form.trim() !== "" &&
            data.thumbnail.trim() !== "" && data.lang_desc.trim() !== "" &&
            data.lang_logo.trim() !== "") {
            setIsLangUpdating(true)
            await axios.post("https://snippetsauce.herokuapp.com/api/add_language", data,
                { "headers": { "x-admin-token": `${token}` } })
                .then((response) => { setIsLangUpdating(false); alert(response.data.status ? "Language added Sucessfully!" : "Some Error Occure") })
                .catch(err => { setIsLangUpdating(false); alert(err.message) })

        } else alert("Please fill all the fields !")

    }



    const getAllLanguages = async () => {
        setLangLoading(true)
        await axios.get("https://snippetsauce.herokuapp.com/api/languages")
            .then((response) => { languageSetter(response.data.languages); setLangLoading(false) })
    }

    const languageSetter = (array) => {
        let temp = [];
        array.forEach(element => temp.push({ name: element }))
        setLanguages(temp)
    }


    const handleLangChange = (event) => {
        setIsLangSearching(true)

        axios.get(`https://snippetsauce.herokuapp.com/api/language_detail/${languages[event.target.value].name}`, { "headers": { "x-admin-token": `${token}` } })
            .then((response) => {
                console.log(response.data)
                setUpdateLangName(response.data.language);
                setUpdateLangDesc(response.data.description)
                setUpdateLangLogo(response.data.logo)
                setUpdateLangThumb(response.data.thumbnail)
                setIsLangSearching(false)
                setSelectedLang(languages[event.target.value].name)
            })
            .catch(err => { alert(err); setIsLangSearching(false) })
    }


    const updateLanguage = async () => {

        setIsLangUpdating(true)

        const data = {
            "language_name": updateLangName,
            "thumbnail": updateLangThumb,
            "lang_desc": updateLangDesc,
            "lang_logo": updateLangLogo,
        }


        await axios.post(`https://snippetsauce.herokuapp.com/api/update_language/${selectedLang}`, data, { "headers": { "x-admin-token": `${token}` } })
            .then(response => { alert(response.data.message); setIsLangUpdating(false) })
            .catch(err => { alert(err); setIsLangUpdating(false) })

    }



    return (

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <FormControl align='left' sx={{ width: '100%', mb: 2, mt: 2 }}>
                    <InputLabel id="select-lang">Select Language</InputLabel>
                    <Select onChange={handleLangChange} required align='left' labelId="select-lang" id="lang-select" name="lang-select" label="Select Language">
                        {!langLoading ?
                            languages.length !== 0 ?
                                languages.map((lang, index) => <MenuItem key={index} value={index}>{`${lang.name}`}</MenuItem>) : <MenuItem value={20}>No Lang Avialable</MenuItem>
                            :
                            <CircularProgress size={25} />
                        }
                    </Select>
                </FormControl>
                {selectedLang !== null ?
                    isLangSearching == false ?
                        <>
                            <TextField value={updateLangName} onChange={(e) => setUpdateLangName(e.target.value)} sx={{ mb: 2 }} required id="languagename" name="languagename" label="Language name" fullWidth variant="standard" />

                            <TextField value={updateLangThumb} onChange={(e) => setUpdateLangThumb(e.target.value)} sx={{ mb: 2 }} required id="langThumb" name="langThumb" label="Lang Thumbnail URL" fullWidth variant="standard" />

                            <TextField value={updateLangDesc} onChange={(e) => setUpdateLangDesc(e.target.value)} sx={{ mb: 2 }} id="langDesc" name="langDesc" multiline rows={6} label="Lang Description" fullWidth variant="standard" />

                            <TextField value={updateLangLogo} onChange={(e) => setUpdateLangLogo(e.target.value)} sx={{ mb: 2 }} required id="langLogo" name="langLogo" label="Lang Logo URL" fullWidth variant="standard" />

                            <Button fullWidth disabled={isLangUpdating} type="submit" onClick={updateLanguage} color="success" variant="contained" sx={{ mt: 3, mb: 2 }}>
                                {!isLangUpdating ? "Update" : <CircularProgress color="success" size={25} />}
                            </Button>
                        </>
                        :
                        <CircularProgress size={25} />
                    :
                    <></>
                }

            </Grid>
        </Grid>

    )
}