import axios from "axios";
import React, { useEffect, useState } from "react";
import SnippetCard from "./snippetCard";
import snippetThumb from '../assets/snippetThumb.png'
import author_pic from '../assets/authorPic.jpg'
import NavBar from './navBar'
import './homeScreen.scss'

export default function HomeScreen() {

    // const [snippetData, setSnippetData] = useState([]);
    const [errorLog, setErrorLog] = useState(null);
    const baseURL = "https://18e4-2409-4041-2e9c-1a58-c131-6128-a80e-b11d.ngrok.io/api/display";

    // useEffect(() => {
    //     axios.get(baseURL)
    //         .then((response) => { setSnippetData(response.data.data); console.log(response.data.data) })
    //         .catch((err) => setErrorLog(err.message));
    // }, []);



    const snippetData = [
        {
            snippet_title: "Java Swift",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'jv123456'
        },
        {
            snippet_title: "Python Djangio",
            snippet_author: "Suyash Vashishtha",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'py123456'
        },
        {
            snippet_title: "Laravel Php",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'php123456'
        },
        {
            snippet_title: "Laravel Php",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'php123456'
        },
        {
            snippet_title: "Java Swift",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'jv123456'
        },
        {
            snippet_title: "Python Djangio",
            snippet_author: "Suyash Vashishtha",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'py123456'
        },
        {
            snippet_title: "Laravel Php",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'php123456'
        },
        {
            snippet_title: "Laravel Php",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'php123456'
        },
        {
            snippet_title: "Python Djangio",
            snippet_author: "Suyash Vashishtha",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'py123456'
        },
        {
            snippet_title: "Laravel Php",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'php123456'
        },
        {
            snippet_title: "Laravel Php",
            snippet_author: "Hetarth Shah",
            snippet_time: "12 Oct 2021",
            snippet_thumbnail: snippetThumb,
            author_pic: author_pic,
            snippet_id: 'php123456'
        },

    ];



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
                            snippetTime={item.snippet_time}
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