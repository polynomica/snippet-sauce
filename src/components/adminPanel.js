import React, { useState, useEffect } from "react";
import './adminPanel.scss'
import { useHistory } from "react-router-dom";
import LanguagePanel from "./languagePanel";
import DashboardPanel from "./dashboardPanel";
import SnippetMangaerPanel from "./snippetManager";
import { UserName } from "../app/useStore";
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../features/userSlice";
// import ErrorScreen from "./errorScreen";
import axios from "axios";


export default function AdminPanel() {

    const history = useHistory();
    const [tabHead, setTabHead] = useState('Dashboard')
    const [adminPic, setAdminPic] = useState('');
    const adminName = UserName();
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Admin Panel";
        getAdminPic()
    }, [])

    const getAdminPic = () => {
        axios.get(`https://api.github.com/users/${adminName}`)
            .then(response => setAdminPic(response.data.avatar_url))
            .catch(err => alert(err.message))
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
                console.warn("Error : 404")
        }
    }

    const changeTabs = (tab) => {
        setTabHead(tab.title)
        history.push({ search: tab.path })
    }

    const logOut = () => {
        dispatch(setUserLogOutState())
        history.push({ pathname: '/' })
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
                        <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={adminPic} alt="" width="32" height="32" className="rounded-circle me-2" />
                            @{adminName}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><button className="dropdown-item" onClick={() => history.push({ pathname: '/' })}>Home</button></li>
                            <li><button className="dropdown-item" onClick={() => window.open('https://github.com/polynomica/service-snippetsauce', '_blank', 'noopener,noreferrer')}>Service Repo</button></li>
                            <hr />
                            <li><button className="dropdown-item" onClick={logOut}>Sign out</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="base-flex fixed-bottom side-bar-mobile">
                <div className={tabHead === 'Dashboard' ? "base-flex bars active" : "base-flex bars"} onClick={() => changeTabs({ path: 'dashboard', title: 'Dashboard' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="grey" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                </div>

                <div className={tabHead === 'Language' ? "base-flex bars active" : "base-flex bars"} onClick={() => changeTabs({ path: 'language', title: 'Language' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="grey" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                </div>
                <div className={tabHead === 'Snippet Manager' ? "base-flex bars active" : "base-flex bars"} onClick={() => changeTabs({ path: 'snippet-manager', title: 'Snippet Manager' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="grey" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                    </svg>
                </div>
                <div className="base-flex bars dropdown">
                    <a className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={adminPic} alt="" width="30" height="30" className="rounded-circle me-2" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><button className="dropdown-item" onClick={() => history.push({ pathname: '/' })}>Home</button></li>
                        <li><button className="dropdown-item" onClick={() => window.open('https://github.com/polynomica/service-snippetsauce', '_blank', 'noopener,noreferrer')}>Service Repo</button></li>
                        <hr />
                        <li><button className="dropdown-item" onClick={logOut}>Sign out</button></li>
                    </ul>
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