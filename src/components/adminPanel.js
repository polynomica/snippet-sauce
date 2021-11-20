import axios from "axios";
import React, { useEffect, useState } from "react";
import './adminPanel.scss'
import snippetThumb from '../assets/snippetThumb.png'
import { useHistory } from "react-router-dom";


export default function AdminPanel() {
    const [repoIssues, setRepoIssues] = useState([]);
    const [errorLog, setErrorLog] = useState();
    const history = useHistory();
    const [tabHead, setTabHead] = useState('Dashboard')
    const [selectedLang, setSelectedLang] = useState(null);
    const [currentLangMode, setCurrentLangMode] = useState('new')
    const [totalSnippets, setTotalSnippet] = useState(0)




    useEffect(() => { getIssues(); getTotalSnippets() }, []);

    const getIssues = () => {
        axios.get('https://api.github.com/repos/polynomica/service-snippetsauce/issues')
            .then((response) => setRepoIssues(response.data))
            .catch((error) => setErrorLog(error.message))
    }

    const getTotalSnippets = () => {
        axios.get('https://snippetsauce.herokuapp.com/api/total')
            .then((response) => setTotalSnippet(response.data.total_snippets))
            .catch((error) => console.log(error.message))
    }



    const DashboardPanel = () => {
        return (
            <div className="panel dashboard-panel">
                <div className="base-flex stat-holder">
                    <div className="base-flex stat-card">
                        <div className="base-flex stat-data nsnippets">
                            <span className="stat-number">{totalSnippets}</span>
                            <span className="stat-topic">Total Snippets</span>
                        </div>
                    </div>
                    <div className="base-flex stat-card viewers">
                        <div className="base-flex stat-data">
                            <span className="stat-number">400</span>
                            <span className="stat-topic">Total Viewers</span>
                        </div>
                    </div>
                    <div className="base-flex stat-card issues">
                        <div className="base-flex stat-data">
                            <span className="stat-number">{repoIssues.length}</span>
                            <span className="stat-topic">Issues/ Reports</span>
                        </div>
                    </div>
                </div>
                <h4>Reports</h4>
                <div className="base-flex report-holder">
                    {repoIssues.length !== 0 ? repoIssues.map((item, index) => (
                        <div key={index} className="base-flex report-tab">
                            <img className="avatar-pc" src={item.user.avatar_url} alt="" />
                            <div className="report-data">
                                <h2 className="base-flex issue-title">{item.title}
                                    <a role="button" rel="noopener noreferrer" target="blank" href={item.html_url} className="btn btn-sm btn-outline-primary">View Report</a>
                                </h2>
                                <h3 className="issue-author">{item.user.login}</h3>
                            </div>
                        </div>
                    )) : <h4>{errorLog}</h4>}
                </div>
            </div>
        )
    }

    const LanguagePanel = () => {

        const [createLangName, setCreateLangName] = useState('');
        const [createLangShort, setCreateLangShort] = useState('');
        const [createLangthumb, setCreateLangthumb] = useState(null);

        const addLanguage = () => {
            if (createLangShort.length === 3) {
                axios.post("https://snippetsauce.herokuapp.com/api/add_language", { language_name: createLangName.toLowerCase(), short_form: createLangShort.toLowerCase(), thumbnail: "thumbnail" })
                    .then((response) => alert(response.data.message))
            } else { alert("Short form must be 3 words long " + createLangShort) }
        }

        return (
            <div className="panel language-panel">
                <br />
                <ul className="nav nav-tabs">
                    <li className="nav-item"> <button className={currentLangMode === 'new' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentLangMode('new')}>New</button></li>
                    <li className="nav-item"><button className={currentLangMode === 'update' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentLangMode('update')}>Update</button></li>
                </ul>

                {
                    currentLangMode === 'new' &&
                    <div className="base-flex lang-new">
                        <div className="base-flex lang-forum">
                            <div className="langthumb-holder">
                                <button type="submit" className="btn btn-primary btn-sm">Edit</button>
                                {createLangthumb === null ? <h5>Choose an image</h5> : <img src={createLangthumb} alt="..." />}
                            </div>
                            <div className="base-flex lang-data">
                                <div className="mb-3">
                                    <label for="langName" className="form-label">Language Name </label>
                                    <input type="text" onChange={(e) => setCreateLangName(e.target.value)} className="form-control" id="langName" placeholder="Ex- Python" aria-describedby="Language name" />
                                </div>
                                <div className="mb-3">
                                    <label for="langShortform" className="form-label">Short form</label>
                                    <input type="text" onChange={(e) => { setCreateLangShort(e.target.value) }} className="form-control" placeholder="Ex- pyt" id="langShortform" />
                                </div>
                                <button onClick={addLanguage} className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                }

                {
                    currentLangMode === 'update' &&
                    <div className="base-flex lang-update">
                        <div className="dropdown">
                            <button className="btn small btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {selectedLang === null ? 'Choose Lanaguage' : selectedLang}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a onClick={(e) => setSelectedLang('Lang 1')} className="dropdown-item" href="#">Lang 1</a></li>
                                <li><a onClick={(e) => setSelectedLang('Lang 2')} className="dropdown-item" href="#">Lang 2</a></li>
                                <li><a onClick={(e) => setSelectedLang('Lang 3')} className="dropdown-item" href="#">lang 3</a></li>
                            </ul>
                        </div>

                        <div className="base-flex lang-forum">
                            <div className="langthumb-holder">
                                <button type="submit" className="btn btn-primary btn-sm">Edit</button>
                                <img src={snippetThumb} alt="..." />
                            </div>
                            <div className="base-flex lang-data">
                                <div className="mb-3">
                                    <label for="langName" className="form-label">Language Name</label>
                                    <input type="email" className="form-control" id="langName" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="langShortform" className="form-label">Short form</label>
                                    <input type="password" className="form-control" id="langShortform" />
                                </div>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

    const SnippetMangaerPanel = () => {

        // const deleteSnippet = () => {
        //     axios.post('https://32e6-2409-4041-2609-c14c-79bc-cf95-2988-58bb.ngrok.io/api/delete_snippet/', { snippet_id: `pyt774895` })
        //         .then(function (response) { console.log(response); })
        //         .catch(function (error) { console.log(error); });
        // }

        // const addSnippet = ()=>{
        //     // https://snippetsauce.herokuapp.com/api/create_snippet

        // }

        const [snippetTitle, setSnippetTitle] = useState('');
        const [snippetLang, setSnippetLang] = useState('');
        const [snippetTags, setSnippetTags] = useState([]);
        const [snippetDescription, setSnippetDescription] = useState('');
        const [snippetCode, setSnippetCode] = useState('');
        const [snippetSeo, setSnippetSeo] = useState([]);
        const [snippetAuthor, setSnippetAuthor] = useState('');
        const [snippetBlog, setSnippetBlog] = useState('');
        const [snippetDemo, setSnippetDemo] = useState('');


        return (
            <div className="panel snippet-manager">
                <br />
                <div className="base-flex snippet-section ">
                    <form>
                        <div className="mb-3">
                            <label for="snippetTitle" className="form-label">Snippet Title</label>
                            <input type="text" onChange={(e) => setSnippetTitle(e.target.value)} className="form-control" id="snippetTitle" aria-describedby="snippetTitle" />
                        </div>

                        <div className="mb-3">
                            <label for="snippetTitle" className="form-label">Language and Tags</label>
                            <br />
                            <div className="base-flex tag-div">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Javascripr</a></li>
                                    <li><a className="dropdown-item" href="#">Python</a></li>
                                    <li><a className="dropdown-item" href="#">Java</a></li>
                                </ul>
                                <input type="text" className="form-control" id="snippetTags" aria-describedby="snippetTitle" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="floatingTextarea">Description</label>
                            <textarea onChange={(e) => setSnippetDescription(e.target.value)} className="form-control" id="floatingTextarea"></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="floatingTextarea">Code</label>
                            <textarea onChange={(e) => setSnippetCode(e.target.value)} className="form-control" placeholder="print(hello)" id="floatingTextarea"></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="snippetSeo" className="form-label">Snippet Seo </label>
                            <input type="text" className="form-control" id="snippetSeo" aria-describedby="snippetTitle" />
                        </div>

                        <div className="mb-3">
                            <label for="authorname" className="form-label">Author Username</label>
                            <input onChange={(e) => setSnippetAuthor(e.target.value)} type="text" className="form-control" id="authorname" aria-describedby="snippetTitle" />
                        </div>
                        <div className="base-flex link-div">
                            <div className="mb-3">
                                <label for="snippetBlog" className="form-label">Snippet Blog </label>
                                <input type="text" onChange={(e) => setSnippetBlog(e.target.value)} className="form-control" id="snippetBlog" aria-describedby="snippetTitle" />
                            </div>
                            <div className="mb-3">
                                <label for="snippetBlog" className="form-label">Snippet Blog </label>
                                <input type="text" onChange={(e) => setSnippetDemo(e.target.value)} className="form-control" id="snippetBlog" aria-describedby="snippetTitle" />
                            </div>
                        </div>

                        <button className="btn btn-success">Create</button>
                    </form>
                </div>

            </div>
        )
    }


    const Panel = () => {
        switch (history.location.search) {
            case "":
                return <DashboardPanel />;
            case "?dashboard":
                return <DashboardPanel />;
            case "?language":
                return <LanguagePanel />;
            case "?snippet-manager":
                return <SnippetMangaerPanel />;
            default:
                console.log("Error 404 ")
        }
    }

    const changeTabs = (tab) => {
        setTabHead(tab.title)
        history.push({ pathname: '/admin', search: tab.path })
    }

    return (
        <div className="base-flex admin-panel">
            <div className="side-bar-pc">
                <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar" >

                    <span className="fs-4">Snippet Sauce</span>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li><button onClick={() => changeTabs({ path: 'dashboard', title: 'Dashboard' })} className={tabHead === 'Dashboard' ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">Dashboad</button></li>
                        <li><button onClick={() => changeTabs({ path: 'language', title: 'Language' })} className={tabHead === 'Language' ? "nav-link text-white active" : "nav-link text-white"}>Languages</button></li>
                        <li><button onClick={() => changeTabs({ path: 'snippet-manager', title: 'Snippet Manager' })} className={tabHead === 'Snippet Manager' ? "nav-link text-white active" : "nav-link text-white"}>Snippets manager</button></li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://avatars.githubusercontent.com/u/65910716?v=4" alt="" width="32" height="32" className="rounded-circle me-2" />
                            @suyashvash
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><button className="dropdown-item" onClick={() => history.push({ pathname: '/' })}>Home</button></li>
                            <li><button className="dropdown-item" onClick={() => window.open('https://github.com/polynomica/service-snippetsauce', '_blank', 'noopener,noreferrer')}>Service Repo</button></li>
                            <hr />
                            <li><button className="dropdown-item" >Sign out</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="base-flex fixed-bottom side-bar-mobile">
                <div className={tabHead === 'Dashboard' ? "base-flex bars active" : "base-flex bars"} onClick={() => changeTabs({ path: 'dashboard', title: 'Dashboard' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="grey" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                </div>

                <div className={tabHead === 'Language' ? "base-flex bars active" : "base-flex bars"} onClick={() => changeTabs({ path: 'language', title: 'Language' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="grey" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                </div>
                <div className={tabHead === 'Snippet Manager' ? "base-flex bars active" : "base-flex bars"} onClick={() => changeTabs({ path: 'snippet-manager', title: 'Snippet Manager' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="grey" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                    </svg>
                </div>
                <div className="base-flex bars">
                    <img src="https://avatars.githubusercontent.com/u/65910716?v=4" alt="" width="30" height="30" className="rounded-circle me-2" />
                </div>
            </div>


            <div className="main-section">
                <h3 className="panel-heading">{tabHead}</h3>
                <div className="base-flex panel-wrapper">
                    <Panel />
                </div>
            </div>
        </div >
    )
}