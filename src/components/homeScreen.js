import axios from "axios";
import React, { useEffect, useState } from "react";
import SnippetCard from "./snippetCard";

import NavBar from './navBar'
import './homeScreen.scss'
import { useHistory } from "react-router-dom";
import LoadingScreen from './loadingScreen'

export default function HomeScreen(props) {
    const history = useHistory();
    const [errorLog, setErrorLog] = useState(null);
    const [snippetData, setSnippetData] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getSnippets();

    }, [history.location.search]);

<<<<<<< Updated upstream
    const getSnippets = () => {

=======
    const getSnippets = async () => {
        setLoading(true)
>>>>>>> Stashed changes
        if (props.mode === "filterScreen") {
            axios.post("https://snippetsauce.herokuapp.com/api/filter", { language: `${history.location.search.split("?")[1]}` })
                .then((response) => {
                    if (response.data.status === true) {
                        console.log(response.data)
                        setSnippetData(response.data.snippet_data); setErrorLog(null); setLoading(false)
                    } else { setErrorLog(response.data.message); setLoading(false); setSnippetData([]) }
                })
                .catch((err) => { setErrorLog(err.message); setLoading(false) });
        } else {
            axios.get("https://snippetsauce.herokuapp.com/api/display")
                .then((response) => { setSnippetData(response.data.snippet_data); setLoading(false); setErrorLog(null) })
                .catch((err) => { setErrorLog(err.message); setSnippetData([]); setLoading(false); });
        }

    }

    const dateFromatter = (isoDate) => {
        var d = new Date(isoDate);
        return d.toLocaleDateString('en-GB');;
    }

    document.title = "Snippet Sauce | Easy and fast code snippet collection"

    return (

        <>
            <NavBar navOptions={true} />
            <section className="base-flex snippet-grid">
                <h3 className="snippet-grid-head">Home</h3>
                {!isLoading ?
                    <div className="base-flex snippet-grid-wrapper">
                        {errorLog !== null && <h5>{errorLog}</h5>}
                        {snippetData && snippetData.map((item, index) => (
                            <SnippetCard
                                key={index}
                                snippetTitle={item.snippet_title}
                                snippetAuthor={item.snippet_author}
                                snippetTime={dateFromatter(item.snippet_timestamp)}
                                authorPic={item.author_pic}
                                snippetThumbnail={item.snippet_thumbnail}
                                snippetId={item.snippet_id}
                            />
                        ))}
                    </div>
                    :
                    <LoadingScreen mode="homescreen" />
                }

            </section>
        </>


    )
}