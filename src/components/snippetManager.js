
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthToken } from "../app/useStore";

export default function SnippetMangaerPanel() {



    const [snippetTitle, setSnippetTitle] = useState('');
    const [snippetLang, setSnippetLang] = useState(null);
    const [snippetTags, setSnippetTags] = useState('');
    const [snippetDescription, setSnippetDescription] = useState('');
    const [snippetCode, setSnippetCode] = useState('');
    const [snippetSeo, setSnippetSeo] = useState('');
    const [snippetAuthor, setSnippetAuthor] = useState('');
    const [snippetBlog, setSnippetBlog] = useState('');
    const [snippetDemo, setSnippetDemo] = useState('');

    const [languages, setLanguages] = useState([]);

    const token = AuthToken()

    useEffect(() => {
        axios.get("https://snippetsauce.herokuapp.com/api/languages")
            .then((response) => { languageSetter(response.data.languages) })
    }, [])


    const languageSetter = (array) => {
        let temp = [];
        array.forEach(element => temp.push({ name: element }))
        setLanguages(temp)
    }



    const addSnippet = () => {

        const data = {
            snippet_title: snippetTitle,
            snippet_language: snippetLang,
            snippet_description: snippetDescription,
            snippet_code: snippetCode,
            snippet_seo: snippetSeo.split(","),
            snippet_tag: snippetTags.split(","),
            snippet_author: snippetAuthor,
            snippet_blog: snippetBlog,
            snippet_demo_url: snippetDemo
        }

        axios.post('https://snippetsauce.herokuapp.com/api/create_snippet', data, { "headers": { "x-admin-token": `${token}` } })
            .then((response) => alert(response.data.status ? "Snippet added Sucessfully!" : "Some Error Occure"))
            .catch(err => alert(err.message))

    }


    return (
        <div className="panel snippet-manager">
            <br />
            <div className="base-flex snippet-section">

                <div className="mb-3">
                    <label htmlFor="snippetTitle" className="form-label">Snippet Title</label>
                    <input type="text" onChange={(e) => setSnippetTitle(e.target.value)} className="form-control" id="snippetTitle" aria-describedby="snippetTitle" />
                </div>

                <div className="mb-3">
                    <label htmlFor="snippetTitle" className="form-label">Language and Tags</label>
                    <br />
                    <div className="base-flex tag-div">
                        <div className="dropdown">
                            <button className="btn small btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {snippetLang === null ? 'Choose Lanaguage' : snippetLang}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {languages.map((item, index) => <li key={index}><button onClick={(e) => setSnippetLang(item.name)} className="dropdown-item" >{item.name}</button></li>)}
                            </ul>
                        </div>
                        <input type="text" onChange={(e) => setSnippetTags(e.target.value)} className="form-control" id="snippetTags" aria-describedby="snippetTitle" />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="floatingTextarea">Description</label>
                    <textarea onChange={(e) => setSnippetDescription(e.target.value)} className="form-control" id="floatingTextarea"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="floatingTextarea">Code</label>
                    <textarea onChange={(e) => setSnippetCode(e.target.value)} className="form-control" placeholder="print(hello)" id="floatingTextarea"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="snippetSeo" className="form-label">Snippet Seo </label>
                    <input type="text" onChange={(e) => setSnippetSeo(e.target.value)} className="form-control" id="snippetSeo" aria-describedby="snippetTitle" />
                </div>

                <div className="mb-3">
                    <label htmlFor="authorname" className="form-label">Author Username</label>
                    <input onChange={(e) => setSnippetAuthor(e.target.value)} type="text" className="form-control" id="authorname" aria-describedby="snippetTitle" />
                </div>
                <div className="base-flex link-div">
                    <div className="mb-3">
                        <label htmlFor="snippetBlog" className="form-label">Snippet Blog </label>
                        <input type="text" onChange={(e) => setSnippetBlog(e.target.value)} className="form-control" id="snippetBlog" aria-describedby="snippetTitle" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="snippetBlog" className="form-label">Snippet Demo </label>
                        <input type="text" onChange={(e) => setSnippetDemo(e.target.value)} className="form-control" id="snippetBlog" aria-describedby="snippetTitle" />
                    </div>
                </div>
                <button onClick={addSnippet} className="btn btn-success">Create</button>

            </div>

        </div>
    )
}