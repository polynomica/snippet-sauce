import React, { useRef } from "react";
import SnippetCard from "./snippetCard";
import snippetThumb from '../assets/snippetThumb.png'
import authorPic from '../assets/authorPic.jpg'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import NavBar from './navBar'
import './snippetScreen.scss'

export default function SnippetDetails() {


    const scrollerRef = useRef(null);
    const scrollSlide = (direction) => {
        const slideAmount = 350;
        if (direction === "Next") { scrollerRef.current.scrollLeft += slideAmount; }
        if (direction === "Prev") { scrollerRef.current.scrollLeft -= slideAmount; }
        console.log(scrollerRef.current.scrollLeft)
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
            <div className="base-flex snippet-page">
                <div className="base-flex snippet-page-wrapper">
                    <div className="base-flex snippet-about">
                        <div className="area-div base-flex snippet-code-holder">
                            <h2 className="base-flex">JavaScript Snippet</h2>
                            <span className="desc-timestamp">Posted on - 12 Oct 2021</span>
                            <div className="base-flex badge-holder">
                                <span className="badge rounded-pill bg-primary">Primary</span>
                                <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                                <span className="badge rounded-pill bg-warning text-dark">Warning</span>
                            </div>

                            <SyntaxHighlighter language="javascript" style={atomOneDark}>{codes}</SyntaxHighlighter>

                            <div className="base-flex sHead">
                                <button type="button" className="btn btn-sm btn-outline-primary">Copy code</button>
                                <button type="button" className="btn btn-sm btn-outline-primary">Copy Sauce - js123595</button>
                            </div>
                        </div>

                        <div className="area-div base-flex snippet-description-holder">
                            <h2>Snippet Description</h2>
                            <p >
                                This snippet is a test snippet in JavaSvript if else stuff. This
                                snippet is a test snippet in JavaSvript if else stuff. This snippet
                                is a test snippet in JavaSvript if else stuff. This snippet is a
                                test snippet in JavaSvript if else stuff. This snippet is a test
                                snippet in JavaSvript if else stuff. This snippet is a test snippet
                                in JavaSvript if else stuff.
                            </p>
                        </div>
                    </div>

                    <div className="area-div base-flex snippet-author-info">
                        <h2>Snippet Author</h2>
                        <div className="base-flex author-holder">
                            <img src={authorPic} alt="Author" />
                            <h2 className="author-name">Suyash Vashishtha</h2>
                            <p className="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
                            <button type="button" className="btn btn-outline-dark">Visit Github</button>
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
                        {snippetData.map((item, index) => (
                            <SnippetCard
                                key={index}
                                snippetTitle={item.snippetTitle}
                                snippetAuthor={item.snippetAuthor}
                                snippetTime={item.snippetTime}
                                authorPic={item.authorPic}
                                snippetThumbnail={item.snippetThumbnail}
                                snippetId={item.snippetId}
                            />
                        ))}
                    </div>
                </div >
            </div >

        </>
    )
}