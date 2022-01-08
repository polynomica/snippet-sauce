import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import styles from '../styles/SnippetScreen.module.css'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Clipboard from 'react-clipboard.js';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { deployConfig } from "./deployConfig";

export default function SnippetPage() {

    const { query, asPath } = useRouter();
    const sauce = query.sauce;
    const shareUrl = asPath;

    useEffect(() => {

        if (!query.sauce) {
            console.log(query.sauce)
            return;
        } else {
            getSnippetDetail();

        }
    }, [query.sauce])


    const [snippetBody, setSnippetBody] = useState(null);
    const [similarSnippets, setSimilarSnippets] = useState([]);
    const [isLoading, setIsLoading] = useState(true)




    // const suggested = [
    //     { title: 'OOP with core' },
    //     { title: 'Selenium with axios' },
    //     { title: 'Python sorting algo' },
    //     { title: 'OOP with core' },
    //     { title: 'Selenium with axios' },
    //     { title: 'Python sorting algo' },
    //     { title: 'OOP with core' },
    //     { title: 'Selenium with axios' },
    //     { title: 'Python sorting algo' },
    //     { title: 'OOP with core' },
    //     { title: 'Selenium with axios' },
    //     { title: 'Python sorting algo' },
    //     { title: 'OOP with core' },
    //     { title: 'Selenium with axios' },
    //     { title: 'Python sorting algo' },
    // ]


    const getSnippetDetail = async () => {
        setIsLoading(true)
        await axios.get(`https://snippetsauce.herokuapp.com/api/search/${sauce}`)
            .then((response) => {
                if (response.data.status) {
                    setSnippetBody(response.data.snippet_data);
                    getSimilarSnippets(response.data.snippet_data.snippet_language);
                    setIsLoading(false);
                } else setIsLoading(false)
            }).catch(error => { setSnippetBody(null); setIsLoading(false); })

    }

    const getSimilarSnippets = async (lang) => {
        setIsLoading(true)
        await axios.post("https://snippetsauce.herokuapp.com/api/filter", { language: lang })
            .then((response) => {
                if (response.data.status) { setSimilarSnippets(response.data.snippet_data); console.log(response.data.snippet_data) }
                else setSimilarSnippets(null)
                setIsLoading(false)
            })
            .catch((err) => { setIsLoading(false); setSimilarSnippets(null) })
    }

    const tagArrayFormatter = (array) => {
        let tagArray = [];
        array.forEach(element => tagArray.push({ name: element }))
        return tagArray;
    }



    return (
        !isLoading ?
            <>
                {snippetBody ?
                    <div className={`screen ${styles.snippetPage}`}>
                        <Head>
                            <title>{snippetBody ? snippetBody.snippet_title : "No Snippet Found"} | Snippet Sauce</title>
                        </Head>

                        <div className={styles.suggestedTab}>
                            <h3 className={styles.suggestedTitle}>Similar Snippets</h3>
                            <div>
                                {similarSnippets &&
                                    similarSnippets.map((link, index) => (
                                        <Link key={index} href={{ pathname: '/snippet', query: { sauce: link.snippet_id } }}>
                                            <a className={styles.suggestedLink}>{link.snippet_title}</a>
                                        </Link>
                                    ))}
                            </div>

                        </div>

                        <div className={styles.snippetScreen}>
                            <div className={styles.snippetHeader}>
                                <div style={{ width: '80%' }}>
                                    <p className={styles.snippetlang}> <strong>Snippet Sauce - {snippetBody.snippet_id}</strong> </p>
                                    <h1 className={styles.snippetTitle}>{snippetBody.snippet_title}</h1>
                                    <p className={styles.snippetlang}> <strong>Language - {snippetBody.snippet_language}</strong> </p>
                                </div>

                                <div>

                                    <Clipboard onClick={() => alert("URL Copied sucessfully!")} className={styles.copyButton} data-clipboard-text={`http://localhost:3000${shareUrl}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 12c0 1.654 1.346 3 3 3c.794 0 1.512-.315 2.049-.82l5.991 3.424c-.018.13-.04.26-.04.396c0 1.654 1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3c-.794 0-1.512.315-2.049.82L8.96 12.397c.018-.131.04-.261.04-.397s-.022-.266-.04-.397l5.991-3.423c.537.505 1.255.82 2.049.82c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .136.022.266.04.397L8.049 9.82A2.982 2.982 0 0 0 6 9c-1.654 0-3 1.346-3 3z" fill="red" /></svg>
                                    </Clipboard>

                                    {
                                        deployConfig.visitorAuth == true &&
                                        <button className={styles.shareBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="28" height="28" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="red"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" /></g></svg>
                                        </button>

                                    }

                                </div>
                            </div>

                            <div className={styles.snippetData}>
                                <p>{snippetBody.snippet_description}</p>
                                <br />
                                {/* <p className={styles.snippetHeading}> <strong>Snippet Code</strong> </p> */}
                                <div className={styles.codeTerminal}>
                                    <div className={styles.terminalHead}>
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


                                        <Clipboard onClick={() => alert("Code Copied Successfully!")} className={styles.copyButton} data-clipboard-text={snippetBody.snippet_code}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>
                                        </Clipboard>
                                    </div>
                                    <SyntaxHighlighter className="code-area" language={snippetBody.snippet_language} style={atomOneDark}>{snippetBody.snippet_code}</SyntaxHighlighter>

                                </div>
                                <br />
                                <p className={styles.snippetHeading}>Related tags</p>
                                <div className={styles.snippetSeo}>
                                    {snippetBody.snippet_seo &&
                                        tagArrayFormatter(snippetBody.snippet_seo).map((tag, index) => <span className={styles.seoTags} key={index}>{tag.name}</span>)
                                    }
                                </div>

                                <br />
                                <p className={styles.snippetHeading}>Author</p>
                                <div className={styles.snippetAutherHolder}>
                                    <img alt="Author Pic" src={`https://github.com/${snippetBody.snippet_author}.png`} className={styles.authorPic} />
                                    <div className={styles.authorData}>
                                        <p>{snippetBody.snippet_author}</p>
                                        {
                                            deployConfig.visitorAuth == true ?
                                                <Link href={{ pathname: '/user' }}>
                                                    <a href='#' style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>View Profile</a>
                                                </Link>
                                                :
                                                <a target={'_blank'} rel={'no-ref'} href={`https://github.com/${snippetBody.snippet_author}`} style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>View Profile</a>

                                        }

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    : <div className={`screen ${styles.errorHolder}`}>
                        <span>Invalid sauce ! No Snippet found. </span>
                    </div>
                }
            </>
            :
            <div className={`screen`}>
                <h3>Loading ....</h3>
            </div>
    )
}