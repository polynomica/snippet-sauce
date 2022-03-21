import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import SnippetCard from '../components/Snippetcard'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from "axios";
import Link from 'next/link'


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
    const [langData, setLangData] = useState(null)

    const getLangSnippets = async () => {
        setLoading(true)

        await axios.post("https://snippetsauce.herokuapp.com/api/filter", { language: `${filterName.toLowerCase()}` })
            .then((response) => {
                if (response.data.status === true) {
                    setLangData(response.data.lang_data)
                    console.log(response.data)
                    setSnippetData(response.data.snippet_data); setErrorLog(null); setLoading(false)
                } else { setLangData(null); console.log(response.data); setLoading(false); setErrorLog(response.data.message); setSnippetData(null) }
            })
            .catch((err) => { console.log(err); setErrorLog(err.message); setLoading(false); setSnippetData(null) });
    }

    return (
        !isLoading ?
            <div className={`screen ${styles.homeScreen}`}>
                <Head>
                    <title>{filterName} Snippets | Snippet Sauce </title>
                </Head>

                <div className={`flex ${styles.homeHeader}`}>
                    <div className={`flex ${styles.homeBody}`}>
                        <h2>Filter</h2>
                        <div className={`flex ${styles.tagHolder}`}>
                            <span className={styles.bodyTagline}>{filterName}</span>
                            {langData && <p>{langData.desc}</p>}
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
            :
            <div className={`screen`}>
                <h3>Loading ....</h3>
            </div>

    )
}