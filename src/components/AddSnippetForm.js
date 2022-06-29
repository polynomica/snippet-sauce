import React, { useEffect, useState } from "react";
import { AuthToken } from "../app/useStore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


export default function AddSnippetForm(props) {


    useEffect(() => {
        getAllLanguages()
    }, [])

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

    const [langLoading, setLangLoading] = useState(false)
    const [languages, setLanguages] = useState([]);
    const [isSnippetAddLoading, setIsSnippetAddLoading] = useState(false)

    const token = AuthToken()


    const handleAddSnippet = async (event) => {

        event.preventDefault();
        const FData = new FormData(event.currentTarget);

        if (FData.get('lang-select').trim() !== "") {
            const data = {
                snippet_title: FData.get('snippetTitle'),
                snippet_language: languages[parseInt(FData.get('lang-select'))].name,
                snippet_description: FData.get('snippetDescription'),
                snippet_code: FData.get('snippetCode'),
                snippet_seo: FData.get('snippetSEOTags').split(","),
                snippet_tag: FData.get('snippetTags').split(","),
                snippet_author: FData.get('snippetAuthor'),
                snippet_blog: FData.get('snippetBlog'),
                snippet_demo_url: FData.get('snippetDemo')
            }

            if (data.snippet_title.trim() !== "" && data.snippet_language.trim() !== "" &&
                data.snippet_description.trim() !== "" && data.snippet_author.trim() !== "" &&
                data.snippet_blog.trim() !== "" && data.snippet_code.trim() !== "" &&
                data.snippet_demo_url.trim() !== "" && data.snippet_seo.length !== 0 && data.snippet_tag.length !== 0
            ) {
                setIsSnippetAddLoading(true)
                await axios.post('https://snippetsauce.herokuapp.com/api/create_snippet', data, { "headers": { "x-admin-token": `${token}` } })
                    .then((response) => { setIsSnippetAddLoading(false); alert(response.data.status ? "Snippet added Sucessfully!" : "Some Error Occure") })
                    .catch(err => { setIsSnippetAddLoading(false); alert(err.message) })

            } else alert("Please fill all the fields !")

        } else alert("Please select a language !")

    }


    return (

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Box component="form" onSubmit={handleAddSnippet} noValidate sx={{ mt: 1 }}>
                    <TextField required sx={{ mb: 2 }} id="snippetTitle" name="snippetTitle" label="Snippet Title" fullWidth variant="standard" />
                    <FormControl align='left' sx={{ width: '100%', mb: 2, mt: 2 }}>
                        <InputLabel id="select-lang">Select Language</InputLabel>
                        <Select required align='left' labelId="select-lang" id="lang-select" name="lang-select" label="Select Language">
                            {!langLoading ?
                                languages.length !== 0 ?
                                    languages.map((lang, index) => <MenuItem key={index} value={index}>{`${lang.name}`}</MenuItem>) : <MenuItem value={20}>No Lang Avialable</MenuItem>
                                :
                                <CircularProgress size={25} />
                            }
                        </Select>
                    </FormControl>

                    <TextField required sx={{ mb: 2 }} id="snippetTags" name="snippetTags" label="Snippet Tags (comma seprated)" fullWidth variant="standard" />

                    <TextField sx={{ mb: 2 }} id="snippetDescription" name="snippetDescription" multiline
                        rows={6}
                        placeholder={"This snippet is.."} label="Snippet Description" fullWidth variant="standard" />

                    <TextField required sx={{ mb: 2 }} id="snippetCode" name="snippetCode" label="Snippet Code" rows={6} placeholder="print('damn bro')" multiline fullWidth variant="standard" />

                    <TextField required sx={{ mb: 2 }} id="snippetSEOTags" name="snippetSEOTags" label="Snippet SEO Tags (comma seprated)" fullWidth variant="standard" />

                    <TextField required sx={{ mb: 2 }} id="snippetAuthor" name="snippetAuthor" label="Snippet Author" fullWidth variant="standard" />

                    <TextField sx={{ mb: 2 }} id="snippetBlog" name="snippetBlog" label="Snippet Blog" fullWidth variant="standard" />

                    <TextField sx={{ mb: 2 }} id="snippetDemo" name="snippetDemo" label="Snippet Demo" fullWidth variant="standard" />

                    <Button fullWidth disabled={isSnippetAddLoading} type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {!isSnippetAddLoading ? "Submit" : <CircularProgress size={25} />}
                    </Button>
                </Box>

            </Grid>
        </Grid>

    )
}