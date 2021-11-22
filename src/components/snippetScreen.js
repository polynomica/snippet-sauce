import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import SnippetCard from "./snippetCard";
import snippetThumb from '../assets/snippetThumb.png'
import authorPic from '../assets/authorPic.jpg'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import NavBar from './navBar'
import { useHistory } from "react-router-dom";
import './snippetScreen.scss'

export default function SnippetDetails() {

    const history = useHistory();
    // const snippetId = history.location.state.snippetId;
    const snippetId = "pyt901253"
    const [snippetBody, setSnippetBody] = useState(null);
    const baseURL = "https://snippetsauce.herokuapp.com/api/display";
    const [similarSnippets, setSimilarSnippets] = useState([]);
    const [errorLog, setErrorLog] = useState(null);


    useEffect(() => {
        getSnippetDetail()
        getSimilarCard()

    }, [])

    const getSnippetDetail = () => {
        axios.get(`https://snippetsauce.herokuapp.com/api/search/${snippetId}`)
            .then((response) => { setSnippetBody(response.data.snippet_data) })
            .catch((err) => setErrorLog(err.message));
    }

    const getSimilarCard = () => {
        axios.get(baseURL)
            .then((response) => { setSimilarSnippets(response.data.snippet_data) })
            .catch((err) => setErrorLog(err.message));
    }

    const scrollerRef = useRef(null);
    const scrollSlide = (direction) => {
        const slideAmount = 350;
        if (direction === "Next") { scrollerRef.current.scrollLeft += slideAmount; }
        if (direction === "Prev") { scrollerRef.current.scrollLeft -= slideAmount; }
    }

    const snippetData = [
        {
            snippetTitle: "Java Swift",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'jv123456'
        },
        {
            snippetTitle: "Python Djangio",
            snippetAuthor: "Suyash Vashishtha",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'py123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Java Swift",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'jv123456'
        },
        {
            snippetTitle: "Python Djangio",
            snippetAuthor: "Suyash Vashishtha",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'py123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
        {
            snippetTitle: "Laravel Php",
            snippetAuthor: "Hetarth Shah",
            snippetTime: "12 Oct 2021",
            snippetThumbnail: snippetThumb,
            authorPic: authorPic,
            snippetId: 'php123456'
        },
    ];

    const dateFromatter = (isoDate) => {
        var d = new Date(isoDate);
        return d.toLocaleDateString('en-GB');;
    }

    const codes =
        `
     const scrollSlide = (direction) => {
        const slideAmount = 350;
        if (direction === "Next") { scrollerRef.current.scrollLeft += slideAmount; }
        if (direction === "Prev") { scrollerRef.current.scrollLeft -= slideAmount; }
        console.log(scrollerRef.current.scrollLeft)
    }
         `


    return (

        <>
            <NavBar navOptions={false} />
            {snippetBody !== null && <div className="base-flex snippet-page">

                <div className="base-flex snippet-page-wrapper">
                    <div className="base-flex snippet-about">
                        <div className="area-div base-flex snippet-code-holder">
                            <h2 className="base-flex">snippetBody.snippet_title asddasdsa</h2>

                            <span className="desc-timestamp">Posted on - {dateFromatter(snippetBody.snippet_timestamp)}</span>
                            <div className="base-flex badge-holder">
                                <div>
                                    <span className="badge rounded-pill bg-primary">{snippetBody.snippet_language}</span>
                                    <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                    <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                    <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                </div>

                                <button type="button" onClick={() => { navigator.clipboard.writeText(snippetBody.snippet_id); alert("Sauce copied sucessfully !") }} className="btn btn-sm btn-outline-dark">Copy Sauce - {snippetBody.snippet_id}</button>
                            </div>

                            <div className="code-terminal">
                                <div className="base-flex terminal-head">
                                    <div className="head-dot-holder">
                                        <svg stroke="currentColor" fill="#ff5f56" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="8"></circle>
                                        </svg>
                                        <svg stroke="currentColor" fill="#ffbd2e" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="8"></circle>
                                        </svg>
                                        <svg stroke="currentColor" fill="#27c93f" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="8"></circle>
                                        </svg>
                                    </div>


                                    <button className="copy_button" onClick={() => { navigator.clipboard.writeText(snippetBody.snippet_code); alert("Code copied sucessfully !") }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                        </svg>
                                    </button>
                                </div>
                                <SyntaxHighlighter language="javascript" style={atomOneDark}>{/* {snippetBody.snippet_code} */}{codes}</SyntaxHighlighter>

                            </div>
                            <div className="base-flex sHead">
                                <a type="button" rel="noopener noreferrer" target="blank" href={`${snippetBody.snippet_blog}`} className="btn btn-success btn-sm">How to use - Blog</a>
                                <a type="button" rel="noopener noreferrer" target="blank" href={`${snippetBody.snippet_demo_url}`} className="btn btn-primary btn-sm">Live Demo</a>
                            </div>

                        </div>

                        <div className="area-div base-flex snippet-description-holder">
                            <h2>Snippet Description</h2>
                            <p >{snippetBody.snippet_description}</p>
                        </div>
                    </div>

                    <div className="area-div base-flex snippet-author-info">
                        <h2 className="title">Snippet Author</h2>
                        <div className="base-flex author-holder">
                            <img src={snippetBody.author_pic} alt="Author" />
                            <div className="base-flex author-detail">
                                <h2 className="author-name">{snippetBody.snippet_author}</h2>
                                <p className="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
                                <a type="button" rel="noopener noreferrer" target="blank" href={`https://github.com/${snippetBody.snippet_author}`} className="btn btn-outline-dark">Visit Github</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="base-flex suggested-snippet-holder">
                    <div className="area-div base-flex suggest-head">
                        <h2>Similar Snippet</h2>
                        <div className="slide-btn-holder">
                            <button onClick={() => scrollSlide("Prev")} type="button" className="btn btn-dark">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="white" strokeWidth="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>
                            </button>
                            <button onClick={() => scrollSlide("Next")} type="button" className="btn btn-dark">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="white" strokeWidth="2" points="7 2 17 12 7 22"></polyline></svg>
                            </button>
                        </div>
                    </div>

                    <div ref={scrollerRef} className="snippet-scroller-div">
                        {similarSnippets.length && similarSnippets.map((item, index) => (
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
                </div >
            </div >}


        </>
    )
}