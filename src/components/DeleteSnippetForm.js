import React, { useEffect, useState } from "react";
import { AuthToken } from "../app/useStore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


export default function DeleteSnippetForm(props) {


    const [isDeleting, setIsDeleting] = useState(false)
    const [resultFound, setResultFound] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const [snippetData, setSnippetData] = useState()

    const token = AuthToken()


    const handleSearch = async (event) => {
        event.preventDefault()
        const FData = new FormData(event.currentTarget);
        setIsSearching(true)
        await axios.get(`https://snippetsauce.herokuapp.com/api/search/${FData.get('snippetSauce')}`)
            .then(response => {
                if (response.data.status) {

                    setSnippetData(response.data.snippet_data)
                    setResultFound(true)

                } else {
                    alert("Invalid Sauce ! No snippet Found")
                    setResultFound(false)
                }
                setIsSearching(false)
            })
            .catch(err => { console.log(err); setIsSearching(false) })

    }

    const deleteSnippet = () => {
        setIsDeleting(true)
        if (window.confirm("Are you sure you want to delete this snippet!. This cant be undone !")) {
            const confirmation = prompt("Please enter the snippet sauce to confirm. " + snippetData.snippet_id)
            if (confirmation === snippetData.snippet_id) {
                axios.post(`https://snippetsauce.herokuapp.com/api/delete_snippet/${snippetData.snippet_id}`,
                    {},
                    { "headers": { "x-admin-token": `${token}` } })
                    .then((response) => {
                        console.log(response)
                        if (response.data.status) {
                            alert(response.data.message);
                        }
                        else { alert(response.data.message); console.log(response.data) }
                        setIsDeleting(false)
                        setResultFound(false)
                        setSnippetData()
                    })
            } else alert("Confirmation failed!")
        }
    }


    return (

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>

                {resultFound ?
                    <>
                        <div style={{ width: '100%', marginBottom: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Typography color='primary' variant="subtitle2" >Snippet Sauce</Typography>
                            <Typography align='left'>{snippetData.snippet_id}</Typography>
                        </div>

                        <div style={{ width: '100%', marginBottom: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <Typography color='primary' variant="subtitle2" >Snippet Name</Typography>
                            <Typography align='left'>{snippetData.snippet_title}</Typography>
                        </div>



                        <Button fullWidth color="error" onClick={() => deleteSnippet()} disabled={isDeleting} variant="contained" sx={{ mt: 3, mb: 3 }}>
                            {!isDeleting ? "Delete" : <CircularProgress color="error" size={25} />}
                        </Button>

                    </>
                    :
                    <Box id="searchForm" component="form" onSubmit={handleSearch} noValidate sx={{ mt: 1 }}>

                        <TextField sx={{ mb: 2 }} required id="snippetSauce" name="snippetSauce" label="Enter Sauce to search snippet" fullWidth variant="standard" />

                        <Button disabled={isSearching} type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                            {!isSearching ? "Search" : <CircularProgress size={25} />}
                        </Button>
                    </Box>
                }
            </Grid>
        </Grid>

    )
}