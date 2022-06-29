import React, { useEffect, useState } from "react";
import { AuthToken } from "../app/useStore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';



export default function UpdateSnippetForm(props) {

    const [isUpdating, setIsUpdating] = useState(false)
    const [resultFound, setResultFound] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const [snippetTitle, setSnippetTitle] = useState('');
    const [snippetTags, setSnippetTags] = useState('');
    const [snippetDescription, setSnippetDescription] = useState('');
    const [snippetCode, setSnippetCode] = useState('');
    const [snippetSeo, setSnippetSeo] = useState('');
    const [snippetAuthor, setSnippetAuthor] = useState('');
    const [snippetBlog, setSnippetBlog] = useState('');
    const [snippetDemo, setSnippetDemo] = useState('');
    const [snippetSauce, setSnippetSauce] = useState('');

    const token = AuthToken()


    const updateSnippet = async () => {
        const data = {
            snippet_title: snippetTitle,
            snippet_description: snippetDescription,
            snippet_code: snippetCode,
            snippet_seo: snippetSeo.split(","),
            snippet_tag: snippetTags.split(","),
            snippet_blog: snippetBlog == null ? "" : snippetBlog,
            snippet_demo_url: snippetDemo == null ? "" : snippetDemo,
            snippet_author: snippetAuthor,
        }

        console.log("works")

        if (data.snippet_title.trim() !== "" && data.snippet_description.trim() !== ""
            && data.snippet_author.trim() !== "" && data.snippet_code.trim() !== "" &&
            data.snippet_seo.length !== 0 && data.snippet_tag.length !== 0
        ) {

            setIsUpdating(true)
            await axios.post(`https://snippetsauce.herokuapp.com/api/update_snippet/${snippetSauce}`, data,

                { "headers": { "x-admin-token": `${token}` } })
                .then((response) => {
                    setIsUpdating(false)
                    alert(response.data.status ? "Snippet updated Sucessfully!" : "Some Error Occure");
                })
                .catch(err => { alert(err.message); setIsUpdating(false) })
        } else {
            alert("Please fill all the needed fields !")
        }


    }


    const handleSearch = async (event) => {
        event.preventDefault()
        const FData = new FormData(event.currentTarget);
        setIsSearching(true)
        await axios.get(`https://snippetsauce.herokuapp.com/api/search/${FData.get('snippetSauce')}`)
            .then(response => {
                if (response.data.status) {
                    setSnippetTitle(response.data.snippet_data.snippet_title)
                    setSnippetDescription(response.data.snippet_data.snippet_description)
                    setSnippetCode(response.data.snippet_data.snippet_code)
                    setSnippetSeo(`${response.data.snippet_data.snippet_seo}`)
                    setSnippetTags(`${response.data.snippet_data.snippet_tag}`)
                    setSnippetAuthor(response.data.snippet_data.snippet_author)
                    setSnippetBlog(response.data.snippet_data.snippet_blog)
                    setSnippetDemo(response.data.snippet_data.snippet_demo_url)
                    setSnippetSauce(response.data.snippet_data.snippet_id)
                    setResultFound(true)

                } else {
                    alert("Invalid Sauce ! No snippet Found")
                    setResultFound(false)
                }
                setIsSearching(false)
            })
            .catch(err => { console.log(err); setIsSearching(false) })

    }


    return (

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>

                {resultFound ?
                    <>

                        <TextField value={snippetTitle} onChange={(e) => setSnippetTitle(e.target.value)} sx={{ mb: 3 }} id="snippetTitle" name="snippetTitle" label="Snippet Title" fullWidth variant="standard" />
                        <TextField value={`${snippetTags}`} onChange={(e) => setSnippetTags(e.target.value)} required sx={{ mb: 3 }} id="snippetTags" name="snippetTags" label="Snippet Tags (comma seprated)" fullWidth variant="standard" />

                        <TextField value={snippetDescription} onChange={(e) => setSnippetDescription(e.target.value)} sx={{ mb: 3 }} id="snippetDescription" name="snippetDescription" multiline
                            rows={6}
                            placeholder={"This snippet is.."} label="Snippet Description" fullWidth variant="standard" />

                        <TextField value={snippetCode} onChange={(e) => setSnippetCode(e.target.value)} required sx={{ mb: 3 }} id="snippetCode" name="snippetCode" label="Snippet Code" rows={6} placeholder="print('damn bro')" multiline fullWidth variant="standard" />

                        <TextField value={`${snippetSeo}`} onChange={(e) => setSnippetSeo(e.target.value)} required sx={{ mb: 3 }} id="snippetSEOTags" name="snippetSEOTags" label="Snippet SEO Tags (comma seprated)" fullWidth variant="standard" />

                        <TextField value={snippetAuthor} onChange={(e) => setSnippetAuthor(e.target.value)} required sx={{ mb: 3 }} id="snippetAuthor" name="snippetAuthor" label="Snippet Author" fullWidth variant="standard" />

                        <TextField value={snippetBlog} onChange={(e) => setSnippetBlog(e.target.value)} sx={{ mb: 3 }} id="snippetBlog" name="snippetBlog" label="Snippet Blog" fullWidth variant="standard" />

                        <TextField value={snippetDemo} onChange={(e) => setSnippetDemo(e.target.value)} sx={{ mb: 3 }} id="snippetDemo" name="snippetDemo" label="Snippet Demo" fullWidth variant="standard" />

                        <Button fullWidth color="success" disabled={isUpdating} onClick={() => updateSnippet()} variant="contained" sx={{ mt: 3, mb: 3 }}>
                            {!isUpdating ? "Update" : <CircularProgress color="success" size={25} />}
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