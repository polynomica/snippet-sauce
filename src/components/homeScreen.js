import axios from "axios";
import React, { useEffect, useState } from "react";
import SnippetCard from "./snippetCard";

import NavBar from './navBar'
import './homeScreen.scss'
import { useHistory } from "react-router-dom";

export default function HomeScreen(props) {
    const history = useHistory();
    const [errorLog, setErrorLog] = useState(null);
    const [snippetData, setSnippetData] = useState([]);


    useEffect(() => {
        getSnippets()
    }, [history.location.search]);

    const getSnippets = () => {

        if (props.mode === "filterScreen") {
            axios.post("https://snippetsauce.herokuapp.com/api/filter", { language: `${history.location.search.split("?")[1]}` })
                .then((response) => {
                    if (response.data.status == true) {
                        setSnippetData(response.data.snippet_data); setErrorLog(null)
                    } else { setErrorLog(response.data.message); setSnippetData([]) }
                })
                .catch((err) => { setErrorLog(err.message) });
        } else {
            axios.get("https://snippetsauce.herokuapp.com/api/display")
                .then((response) => { setSnippetData(response.data.snippet_data); setErrorLog(null) })
                .catch((err) => { setErrorLog(err.message); setSnippetData([]) });
        }

    }

    const dateFromatter = (isoDate) => {
        var d = new Date(isoDate);
        return d.toLocaleDateString('en-GB');;
    }

    // const snippetData = [
    //     {
    //         snippet_title: "Java Swift",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'jv123456'
    //     },
    //     {
    //         snippet_title: "Python Djangio",
    //         snippet_author: "Suyash Vashishtha",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'py123456'
    //     },
    //     {
    //         snippet_title: "Laravel Php",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'php123456'
    //     },
    //     {
    //         snippet_title: "Laravel Php",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'php123456'
    //     },
    //     {
    //         snippet_title: "Java Swift",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'jv123456'
    //     },
    //     {
    //         snippet_title: "Python Djangio",
    //         snippet_author: "Suyash Vashishtha",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'py123456'
    //     },
    //     {
    //         snippet_title: "Laravel Php",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'php123456'
    //     },
    //     {
    //         snippet_title: "Laravel Php",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'php123456'
    //     },
    //     {
    //         snippet_title: "Python Djangio",
    //         snippet_author: "Suyash Vashishtha",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'py123456'
    //     },
    //     {
    //         snippet_title: "Laravel Php",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'php123456'
    //     },
    //     {
    //         snippet_title: "Laravel Php",
    //         snippet_author: "Hetarth Shah",
    //         snippet_timestamp: "2021-11-09T19:02:31.755634Z",
    //         snippet_thumbnail: snippetThumb,
    //         author_pic: author_pic,
    //         snippet_id: 'php123456'
    //     },

    // ];

    return (
        <>
            <NavBar navOptions={true} />
            <section className="base-flex snippet-grid">
                <h3 className="snippet-grid-head">Home</h3>
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
            </section>
        </>
    )
}