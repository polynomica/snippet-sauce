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
    const [currentMode, setCurrentMode] = useState('new')
    const [createLangName, setCreateLangName] = useState('');
    const [createLangShort, setCreateLangShort] = useState('');
    const [createLangthumb, setCreateLangthumb] = useState(null);



    useEffect(() => {
        axios.get('https://api.github.com/repos/polynomica/service-snippetsauce/issues')
            .then((response) => { setRepoIssues(response.data) })
            .catch((error) => setErrorLog(error.message))
    }, []);


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
                <ul className="nav nav-tabs">
                    <li className="nav-item"> <button className={currentMode === 'new' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentMode('new')}>New</button></li>
                    <li className="nav-item"><button className={currentMode === 'update' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentMode('update')}>Update</button></li>
                </ul>

                {
                    currentMode === 'new' &&
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
                    currentMode === 'update' &&
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
            <div className="panel snippet-manager">Snippet Manager</div>
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
                        <strong>@suyashvash</strong>
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