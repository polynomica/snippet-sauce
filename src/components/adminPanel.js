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
    const [createLangName, setCreateLangName] = useState('');
    const [createLangShort, setCreateLangShort] = useState('');
    const [createLangthumb, setCreateLangthumb] = useState(null);
    const [currentSnippetMode, setCurrentSnippetMode] = useState('new');
    const [searchFound, setSearchFound] = useState(false);



    useEffect(() => {
        axios.get('https://api.github.com/repos/polynomica/service-snippetsauce/issues')
            .then((response) => { setRepoIssues(response.data) })
            .catch((error) => setErrorLog(error.message))
    }, []);

    const SnippetDetailForm = (props) => {
        return (
            <div className="base-flex snippet-section ">
                <form>
                    <div className="mb-3">
                        <label for="snippetTitle" className="form-label">Snippet Title</label>
                        <input type="text" className="form-control" id="snippetTitle" aria-describedby="snippetTitle" />
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
                        <textarea className="form-control" id="floatingTextarea"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="floatingTextarea">Code</label>
                        <textarea className="form-control" placeholder="print(hello)" id="floatingTextarea"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="snippetSeo" className="form-label">Snippet Seo </label>
                        <input type="text" className="form-control" id="snippetSeo" aria-describedby="snippetTitle" />
                    </div>

                    <div className="mb-3">
                        <label for="authorname" className="form-label">Author Username</label>
                        <input type="text" className="form-control" id="authorname" aria-describedby="snippetTitle" />
                    </div>
                    <div className="base-flex link-div">
                        <div className="mb-3">
                            <label for="snippetBlog" className="form-label">Snippet Blog </label>
                            <input type="text" className="form-control" id="snippetBlog" aria-describedby="snippetTitle" />
                        </div>
                        <div className="mb-3">
                            <label for="snippetBlog" className="form-label">Snippet Blog </label>
                            <input type="text" className="form-control" id="snippetBlog" aria-describedby="snippetTitle" />
                        </div>
                    </div>

                    {props.type === 'create' && <button className="btn btn-success">Create</button>}
                    {props.type === 'update' && <button className="btn btn-primary">Update</button>}
                    {props.type === 'delete' && <button className="btn btn-danger">Delete</button>}

                </form>
            </div>
        )
    }


    const DashboardPanel = () => {
        return (
            <div className="panel dashboard-panel">
                <div className="base-flex stat-holder">
                    <div className="base-flex stat-card">
                        <div className="base-flex stat-data nsnippets">
                            <span className="stat-number">80</span>
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
                            <img src={item.user.avatar_url} alt="" />
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
                                    <label for="langName" className="form-label">Language Name</label>
                                    <input type="text" onInputChange={(e) => setCreateLangName(e.target.value)} className="form-control" id="langName" placeholder="Ex- Python" aria-describedby="Language name" />
                                </div>
                                <div className="mb-3">
                                    <label for="langShortform" className="form-label">Short form</label>
                                    <input type="text" onInputChange={(e) => setCreateLangShort(e.target.value)} className="form-control" placeholder="Ex- pyt" id="langShortform" />
                                </div>
                                <button type="submit" className="btn btn-primary">Create</button>
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
        return (
            <div className="panel snippet-manager">
                <br />
                <ul className="nav nav-tabs">
                    <li className="nav-item"> <button className={currentSnippetMode === 'new' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentSnippetMode('new')}>New</button></li>
                    <li className="nav-item"><button className={currentSnippetMode === 'update' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentSnippetMode('update')}>Update</button></li>
                    <li className="nav-item"><button className={currentSnippetMode === 'delete' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentSnippetMode('delete')}>Delete</button></li>
                </ul>

                {currentSnippetMode === 'new' &&
                    <div className="base-flex new-snippet">
                        <br />
                        <SnippetDetailForm type='create' />
                    </div>
                }

                {
                    currentSnippetMode === 'update' &&
                    <div className="base-flex new-snippet">
                        <form className="d-flex mb-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={() => setSearchFound(!searchFound)} className="btn btn-primary" type="submit">Search</button>
                        </form>
                        {searchFound && <SnippetDetailForm type='update' />}
                    </div>
                }

                {
                    currentSnippetMode === 'delete' &&
                    <div className="base-flex new-snippet">
                        <form className="d-flex mb-5">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={() => setSearchFound(!searchFound)} className="btn btn-primary" type="submit">Search</button>
                        </form>
                        {searchFound && <SnippetDetailForm type='delete' />}
                    </div>
                }


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

            <div className="main-section">
                <h3 className="panel-heading">{tabHead}</h3>
                <div className="base-flex panel-wrapper">
                    <Panel />
                </div>
            </div>
        </div>
    )
}