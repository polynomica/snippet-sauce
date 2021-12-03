import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import SnippetCard from "./snippetCard";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import NavBar from './navBar'
import { useHistory } from "react-router-dom";
import './snippetScreen.scss'
import UpdateSnippetForm from "./updateSnippetForm";
import { UserRole } from "../app/useStore.js";
import ErrorScreen from "./errorScreen";
import LoadingScreen from './loadingScreen'

export default function SnippetDetails() {

    const history = useHistory();
    const snippetId = history.location.search.split('?')[1];
    const [snippetBody, setSnippetBody] = useState(null);
    const [similarSnippets, setSimilarSnippets] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const role = UserRole()



    useEffect(() => {
        getSnippetDetail();
        getSimilarCard();

    }, [])

    const getSnippetDetail = () => {
        axios.get(`https://snippetsauce.herokuapp.com/api/search/${snippetId}`)
            .then((response) => {
                if (response.data.status === true) {
                    setSnippetBody(response.data.snippet_data);
                    setIsLoading(false);
                } else setIsLoading(false)
            }).catch(error => alert("Something went wrong please ! Try after sometime"))

    }

    const getSimilarCard = () => {
        axios.post("https://snippetsauce.herokuapp.com/api/filter", { language: snippetBody !== null && snippetBody.snippet_language })
            .then((response) => {
                if (response.data.status) setSimilarSnippets(response.data.snippet_data);
                else setSimilarSnippets([])
            })
    }

    const tagArrayFormatter = (array) => {
        let tagArray = [];
        array.forEach(element => tagArray.push({ name: element }))
        return tagArray;
    }

    const scrollerRef = useRef(null);
    const scrollSlide = (direction) => {
        const slideAmount = 350;
        if (direction === "Next") { scrollerRef.current.scrollLeft += slideAmount; }
        if (direction === "Prev") { scrollerRef.current.scrollLeft -= slideAmount; }
    }

    const dateFromatter = (isoDate) => {
        var d = new Date(isoDate);
        return d.toLocaleDateString('en-GB');;
    }



    const deleteSnippet = (sauce) => {
        if (window.confirm("Are you sure you want to delete this snippet!. This cant be undone !")) {
            const confirmation = prompt("Please enter the snippet sauce to confirm. " + sauce)
            if (confirmation === sauce) {
                axios.post(`https://snippetsauce.herokuapp.com/api/delete_snippet/${sauce}`)
                    .then((response) => {
                        if (response.data.status) {
                            alert(response.data.message);
                            history.push({ pathname: '/' })
                        }
                        else alert("Some error occured !")
                    })
            } else alert("Confirmation failed !")
        }
    }

    const Screen = () => {
        document.title = `${snippetBody.snippet_title} | Snippet Sauce`;
        return (

            snippetBody !== null ?
                <>
                    <NavBar navOptions={false} />
                    <div className="base-flex snippet-page">

                        <div className="modal fade" id="updateSnippet" tabIndex="-1" aria-labelledby="updateSnippetLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="updateSnippetLabel">Edit Snippet</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-success">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="base-flex snippet-page-wrapper">
                            <div className="base-flex snippet-about">
                                <div className="area-div base-flex snippet-code-holder">
                                    <h2 className="base-flex">{snippetBody.snippet_title}</h2>
                                    <span className="desc-timestamp">Posted on - {dateFromatter(snippetBody.snippet_timestamp)}</span>
                                    <div className="base-flex badge-holder">
                                        <div>
                                            <span className="badge rounded-pill bg-primary">{snippetBody.snippet_language}</span>
                                            {tagArrayFormatter(snippetBody.snippet_tag).map((item, index) => (<span key={index} className="badge rounded-pill bg-warning text-dark">{item.name}</span>))}
                                        </div>

                                        <button type="button" onClick={() => { navigator.clipboard.writeText(snippetBody.snippet_id); alert("Sauce copied sucessfully !") }} className="btn btn-sm btn-outline-dark">Copy Sauce - {snippetBody.snippet_id}</button>
                                    </div>

                                    <div className="code-terminal">
                                        <div className="base-flex terminal-head">
                                            <div className="head-dot-holder">
                                                <svg stroke="currentColor" fill="#ff5f56" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="8"></circle>
                                                </svg>
                                                <svg stroke="currentColor" fill="#ffbd2e" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="8"></circle>
                                                </svg>
                                                <svg stroke="currentColor" fill="#27c93f" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
                                        <SyntaxHighlighter language="javascript" style={atomOneDark}>{snippetBody.snippet_code}</SyntaxHighlighter>

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

                                <div className="area-div base-flex seo-holder">
                                    <h2>Related terms</h2>
                                    <div className="base-flex seo-wrapper">
                                        {tagArrayFormatter(snippetBody.snippet_seo).map((item, index) => (<h3 key={index} className="seo-tag">{item.name}</h3>))}
                                    </div>
                                </div>

                                {role === "admin" &&
                                    <div className="area-div base-flex snippet-admin">
                                        <h2>Snippet Actions</h2>
                                        <span>Warning: these actions can only be performed by Admins and cant be reversed !</span>
                                        <div className="base-flex snippet-tools">
                                            <button type="button" className="base-flex btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                                Update Snippet</button>
                                            <button onClick={() => deleteSnippet(snippetBody.snippet_id)} type="button" className="btn btn-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                                Delete Snippet</button>
                                        </div>
                                    </div>
                                }

                            </div>

                            <div className="area-div base-flex snippet-author-info">
                                <h2 className="title">Snippet Author</h2>
                                <div className="base-flex author-holder">
                                    <img src={snippetBody.author_pic} alt="Author" />
                                    <div className="base-flex author-detail">
                                        <h2 className="author-name">{snippetBody.snippet_author}</h2>
                                        <p className="lead">{snippetBody.author_bio !== null ? snippetBody.author_bio : `Hi this is ${snippetBody.snippet_author}`}</p>
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
                    </div >

                    {role === "admin" &&
                        <UpdateSnippetForm
                            snippetId={snippetBody.snippet_id}
                            title={snippetBody.snippet_title}
                            language={snippetBody.snippet_language}
                            description={snippetBody.snippet_description}
                            code={snippetBody.snippet_code}
                            blog={snippetBody.snippet_blog}
                            tags={snippetBody.snippet_tag.toString()}
                            seo={snippetBody.snippet_seo.toString()}
                            demo={snippetBody.snippet_demo_url}
                            author={snippetBody.snippet_author}
                        />}
                </>
                : <ErrorScreen />
        )
    }
    return (
        !isLoading ? <Screen /> : <LoadingScreen mode={"snippetscreen"} />
    )
}