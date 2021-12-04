import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../src/components/updateForm.scss'


export default function UpdateSnippetForm(props) {

    const [snippetTitle, setSnippetTitle] = useState(props.title);
    const [snippetLang, setSnippetLang] = useState(props.language);
    const [snippetTags, setSnippetTags] = useState(props.tags);
    const [snippetDescription, setSnippetDescription] = useState(props.description);
    const [snippetCode, setSnippetCode] = useState(props.code);
    const [snippetSeo, setSnippetSeo] = useState(props.seo);
    const [snippetBlog, setSnippetBlog] = useState(props.blog);
    const [snippetDemo, setSnippetDemo] = useState(props.demo);
    const [snippetAuthor, setSnippetAuthor] = useState(props.author);

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        axios.get("https://snippetsauce.herokuapp.com/api/languages")
            .then((response) => { languageSetter(response.data.languages) })
    }, [])


    const languageSetter = (array) => {
        let temp = [];
        array.forEach(element => temp.push({ name: element }))
        setLanguages(temp)
    }

    const updateSnippet = () => {

        const data = {
            snippet_title: snippetTitle,
            snippet_language: snippetLang,
            snippet_description: snippetDescription,
            snippet_code: snippetCode,
            snippet_seo: snippetSeo.split(","),
            snippet_tag: snippetTags.split(","),
            snippet_blog: snippetBlog,
            snippet_demo_url: snippetDemo,
            snippet_author: snippetAuthor,
        }

        axios.post(`https://snippetsauce.herokuapp.com/api/update_snippet/${props.snippetId}`, data)
            .then((response) => { alert(response.data.status ? "Snippet updated Sucessfully!" : "Some Error Occure"); window.location.reload() })
            .catch(err => alert(err.message))

    }


    return (
        <div className="modal fade updateForm" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="updateModalLabel">Update Snippet</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body"></div>
                    <div className="base-flex snippet-section">

                        <div className="mb-3">
                            <label htmlFor="snippetTitle" className="form-label">Snippet Title</label>
                            <input type="text" value={snippetTitle} onChange={(e) => setSnippetTitle(e.target.value)} className="form-control" id="snippetTitle" aria-describedby="snippetTitle" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lang" className="form-label">Language and Tags</label>
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
                                <input type="text" value={snippetTags} onChange={(e) => setSnippetTags(e.target.value)} className="form-control" id="snippetTags" aria-describedby="snippet tags" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="floatingTextarea">Description</label>
                            <textarea value={snippetDescription} onChange={(e) => setSnippetDescription(e.target.value)} className="form-control" id="floatingTextarea"></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="floatingTextarea">Code</label>
                            <textarea value={snippetCode} onChange={(e) => setSnippetCode(e.target.value)} className="form-control" placeholder="print(hello)" id="floatingTextarea"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="snippetSeo" className="form-label">Snippet Seo </label>
                            <input value={snippetSeo} type="text" onChange={(e) => setSnippetSeo(e.target.value)} className="form-control" id="snippetSeo" aria-describedby="snippet seo" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="authorname" className="form-label">Author Username</label>
                            <input value={snippetAuthor} onChange={(e) => setSnippetAuthor(e.target.value)} type="text" className="form-control" id="authorname" aria-describedby="snippet author" />
                        </div>

                        <div className="base-flex link-div">
                            <div className="mb-3">
                                <label htmlFor="snippetBlog" className="form-label">Snippet Blog </label>
                                <input value={snippetBlog} type="text" onChange={(e) => setSnippetBlog(e.target.value)} className="form-control" id="snippetBlog" aria-describedby="snippet blog link" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="snippetBlog" className="form-label">Snippet Demo </label>
                                <input value={snippetDemo} type="text" onChange={(e) => setSnippetDemo(e.target.value)} className="form-control" id="snippetDemo" aria-describedby="snippet demo link" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={updateSnippet}>Update</button>
                    </div>
                </div>

            </div>
        </div>

    )
}