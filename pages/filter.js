import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import SnippetCard from '../components/Snippetcard'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from "axios";
import Link from 'next/link'
import LoadingWrapper from "../components/loadingScreen";


export default function FilterScreen() {

    const { query } = useRouter();

    useEffect(() => {

        if (!query.name) {
            return;
        } else {
            getLangSnippets()
        }

    }, [query])


    const filterName = query.name

    const [errorLog, setErrorLog] = useState(null);
    const [snippetData, setSnippetData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [langData, setLangData] = useState(null)

    const getLangSnippets = async () => {
        setLoading(true)

        await axios.post("https://snippetsauce.herokuapp.com/api/filter", { language: `${filterName.toLowerCase()}` })
            .then((response) => {
                if (response.data.status === true) {
                    setLangData(response.data.lang_data)

                    setSnippetData(response.data.snippet_data); setErrorLog(null); setLoading(false)
                } else { setLangData(null); setLoading(false); setErrorLog(response.data.message); setSnippetData(null) }
            })
            .catch((err) => { setErrorLog(err.message); setLoading(false); setSnippetData(null) });
    }

    const seoHandle = () => {
        if (langData !== null) {
            return (
                <Head>
                    <title>{filterName + " Snippets | Snippet Sauce"}</title>

                    <meta name="title" content={filterName + " Snippets | Snippet Sauce"} />
                    <meta name="description" content={langData.description} />
                    <meta name="keywords" content={filterName} />

                    <meta property="og:title" content={filterName + " Snippets | Snippet Sauce"} />
                    <meta property="og:description" content={langData.description} />

                    <meta property="twitter:title" content={filterName + " Snippets | Snippet Sauce"} />
                    <meta property="twitter:description" content={langData.description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="snippetsauce.tech/" />
                    <meta property="og:image" content={langData.logo} />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="snippetsauce.tech" />
                    <meta property="twitter:image" content={langData.logo} />
                </Head>
            )
        } else {
            <Head>
                <title>Invalid Filter</title>
            </Head>
        }
    }

    return (
        !isLoading ?
            <>
                {seoHandle()}
                <div className={`screen ${styles.homeScreen}`}>


                    <div className={`flex ${styles.homeHeader}`}>
                        <div className={`flex ${styles.homeBody}`}>
                            <h2>Filter</h2>
                            <div className={`flex ${styles.tagHolder}`}>
                                <span className={styles.bodyTagline}>{filterName}</span>
                                {langData && <p>{langData.description}</p>}
                            </div>
                        </div>
                        {langData &&
                            <img alt={`${filterName} logo`} className={styles.svgDecoration} src={langData.logo} />
                        }


                    </div>

                    <div className={`contentArea`}>
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
                            :
                            <div className={`flex ${styles.errorHolder}`}>
                                <span>No Snippet for {filterName} found</span>
                                <Link href={{ pathname: '/about', hash: 'contribute' }}>
                                    <span className={styles.contribButton}>Contribute by adding snippet</span>
                                </Link>

                            </div>
                        }
                    </div>
                </div>
            </>

            :
            <LoadingWrapper />

    )
}