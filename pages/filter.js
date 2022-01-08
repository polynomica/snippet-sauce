import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import SnippetCard from '../components/Snippetcard'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from "axios";


export default function FilterScreen() {

    const { query } = useRouter();

    useEffect(() => {

        if (!query.name) {
            console.log("No query")
            console.log(query.name)
            return;
        } else {
            console.log("yes query name")
            console.log(query.name)
            getLangSnippets()
        }

    }, [query])


    const filterName = query.name
    console.log(filterName)

    const [errorLog, setErrorLog] = useState(null);
    const [snippetData, setSnippetData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const getLangSnippets = async () => {
        setLoading(true)
        await axios.post("https://snippetsauce.herokuapp.com/api/filter", { language: `${filterName.toLowerCase()}` })
            .then((response) => {
                if (response.data.status === true) {
                    setSnippetData(response.data.snippet_data); setErrorLog(null); setLoading(false)
                } else { console.log(response.data.message); setLoading(false); setErrorLog(response.data.message); setSnippetData(null) }
            })
            .catch((err) => { console.log(err); setErrorLog(err.message); setLoading(false); setSnippetData(null) });
    }

    return (
        !isLoading ?
            <div className={`screen ${styles.homeScreen}`}>
                <Head>
                    <title>{filterName} Snippets | Snippet Sauce </title>
                </Head>

                <div className={styles.homeHeader}>
                    <div className={styles.homeBody}>
                        <h2>Filter</h2>
                        <div className={styles.tagHolder}>
                            <span className={styles.bodyTagline}>{filterName}</span>
                            <p>Python is an interpreted high-level general-purpose programming
                                language. Its design philosophy emphasizes code readability with
                                its use of significant indentation. Its language constructs as
                                well as its object-oriented approach aim to help programmers write
                                clear, logical code for small and large-scale projects.</p>
                        </div>
                    </div>
                    <img alt={`${filterName} logo`} className={styles.svgDecoration} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"} />

                </div>

                <div className={styles.contentArea}>
                    {snippetData
                        ? snippetData.map((card, index) => (
                            <SnippetCard
                                key={index}
                                title={card.snippet_title}
                                url={card.snippet_thumbnail}
                                author={card.snippet_author}
                                id={card.snippet_id}
                                type={'home'} />
                        ))
                        : <div className={styles.errorHolder}>
                            <span>No Snippet for this {filterName} found</span>
                        </div>
                    }
                </div>
            </div>
            :
            <div className={`screen`}>
                <h3>Loading ....</h3>
            </div>

    )
}