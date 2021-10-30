import React from "react";
import './adminPanel.scss'
import { useHistory } from "react-router-dom";



// 123131312313212321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1231231321313123123123
//https://api.github.com/repos/polynomica/service-snippetsauce/issues Repo api for issues

export default function AdminPanel() {


    const history = useHistory();
    const [currentPanel, setCurrentPanle] = React.useState('dashboard');

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
                            <span className="stat-number">10</span>
                            <span className="stat-topic">Issues/ Reports</span>
                        </div>
                    </div>
                </div>
                <h4>Reports</h4>
                <div className="base-flex report-holder">
                    <div className="base-flex report-tab">
                        <img src="https://avatars.githubusercontent.com/u/92647336?v=4" alt="" />
                        <div className="report-data">
                            <h2 className="base-flex issue-title">Report Title about issues  <button type="button" className="btn btn-sm btn-outline-primary">View Report</button></h2>
                            <h3 className="issue-author">suyashvash</h3>
                            {/* <div className="base-flex badge-holder">
                                        <span className="badge rounded-pill bg-primary">Primary</span>
                                        <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                        <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                        <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                    </div> */}
                        </div>
                    </div>

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
                return <DashboardPanel />;
            case "?snippet-manager":
                return <DashboardPanel />;
            default:
                console.log("Error 404 ")
        }
    }

    const changeTabs = (tab) => {
        setCurrentPanle(tab)
        history.push({ pathname: '/admin', search: tab })
    }

    return (
        <div className="base-flex admin-panel">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark side-bar" >
                <span className="fs-4">Snippet Sauce</span>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li><button onClick={() => changeTabs('dashboard')} className={currentPanel === 'dashboard' ? "nav-link text-white active" : "nav-link text-white"} aria-current="page">Dashboad</button></li>
                    <li><button onClick={() => changeTabs('language')} className={currentPanel === 'language' ? "nav-link text-white active" : "nav-link text-white"}>Languages</button></li>
                    <li><button onClick={() => changeTabs('snippet-manager')} className={currentPanel === 'snippet-manager' ? "nav-link text-white active" : "nav-link text-white"}>Snippets manager</button></li>
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
                <h3 className="panel-heading">Dashboard</h3>
                <div className="base-flex panel-wrapper">
                    <Panel />
                </div>
            </div>
        </div>
    )
}