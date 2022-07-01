import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthToken } from "../app/useStore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';



export default function AddLangForm() {


    const [isLangAdding, setIsLangAdding] = useState(false)
    const token = AuthToken()

    const handleAddLang = async (event) => {

        event.preventDefault();
        const FData = new FormData(event.currentTarget);


        const data = {
            "language_name": FData.get('languagename').replace(/\s/g, '').toLowerCase(),
            "short_form": FData.get('shortform'),
            "thumbnail": FData.get('langThumb'),
            "lang_desc": FData.get('langDesc'),
            "lang_logo": FData.get('langLogo')
        }


        if (data.language_name.trim() !== "" && data.short_form.trim() !== "" &&
            data.thumbnail.trim() !== "" && data.lang_desc.trim() !== "" &&
            data.lang_logo.trim() !== "") {
            setIsLangAdding(true)
            await axios.post("https://snippetsauce.herokuapp.com/api/add_language", data,
                { "headers": { "x-admin-token": `${token}` } })
                .then((response) => { setIsLangAdding(false); alert(response.data.status ? "Language added Sucessfully!" : "Some Error Occure") })
                .catch(err => { setIsLangAdding(false); alert(err.message) })

        } else alert("Please fill all the fields !")

    }

    return (

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Box component="form" onSubmit={handleAddLang} noValidate sx={{ mt: 1 }}>


                    <TextField sx={{ mb: 2 }} required id="languagename" name="languagename" label="Language name" fullWidth variant="standard" />

                    <TextField sx={{ mb: 2 }} required id="shortform" name="shortform" label="Short Form" fullWidth variant="standard" />

                    <TextField sx={{ mb: 2 }} required id="langThumb" name="langThumb" label="Lang Thumbnail URL" fullWidth variant="standard" />

                    <TextField sx={{ mb: 2 }} id="langDesc" name="langDesc" multiline rows={6} label="Lang Description" fullWidth variant="standard" />

                    <TextField sx={{ mb: 2 }} required id="langLogo" name="langLogo" label="Lang Logo URL" fullWidth variant="standard" />

                    <Button fullWidth disabled={isLangAdding} type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {!isLangAdding ? "Submit" : <CircularProgress size={25} />}
                    </Button>
                </Box>
            </Grid>
        </Grid>

    )
}