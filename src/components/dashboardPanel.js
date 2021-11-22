import axios from "axios";
import React, { useEffect, useState } from "react";


export default function DashboardPanel() {
    const [totalSnippets, setTotalSnippet] = useState(0)
    const [repoIssues, setRepoIssues] = useState([]);
    const [errorLog, setErrorLog] = useState();

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