import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import SnippetCard from '../components/Snippetcard'
import Button from '../components/Button'
import Head from 'next/head'
import axios from 'axios'
import logo from '../public/logo.svg'
import { deployConfig } from '../components/deployConfig.js'
import LoadingWrapper from '../components/loadingScreen'
import ssPoster from '../public/ssPoster.png'

export default function HomeScreen() {

  const [errorLog, setErrorLog] = useState(null);
  const [snippetData, setSnippetData] = useState([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getSnippets();
    //getSnippetsByGZip()

  }, []);

  const getSnippets = async () => {
    await axios.get("https://snippetsauce.herokuapp.com/api/display")
      .then((response) => { setSnippetData(response.data.snippet_data); setLoading(false); setErrorLog(null) })
      .catch((err) => { setErrorLog(err.message); setSnippetData(null) });
  }


  const seoBody = {
    windowTitle: 'Snippet Sauce | Home',
    metaTitle: 'Snippet Sauce | An one stop snippet store for all your needs.',
    metaDescription: "Snippet Sauce is a one stop for all your snippet needs. It's got all the latest boiler plate codes, no matter the programming language, just make sure to remember the SAUCE to your favorite snippets",
    keyword: 'snippets,codes,developer'
  }

  return (
    !isLoading ?
      <div className={`screen flex ${styles.homeScreen}`}>
        <Head>
          <title>{seoBody.windowTitle}</title>

          <meta name="title" content={seoBody.metaTitle} />
          <meta name="description" content={seoBody.metaDescription} />
          <meta name="keywords" content={seoBody.keyword} />

          <meta property="og:title" content={seoBody.metaTitle} />
          <meta property="og:description" content={seoBody.metaDescription} />

          <meta property="twitter:title" content={seoBody.metaTitle} />
          <meta property="twitter:description" content={seoBody.metaDescription} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="snippetsauce.tech/" />
          <meta property="og:image" content={ssPoster.src} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="snippetsauce.tech" />
          <meta property="twitter:image" content={ssPoster.src} />

        </Head>


        <div className={`flex ${styles.homeHeader}`}>
          <div className={`flex ${styles.homeBody}`}>
            <h2>Home</h2>
            <div className={`flex ${styles.tagHolder}`}>
              <span className={styles.bodyTagline}>Discover the latest snippet for your latest project</span>
              <span>Snippet Sauce is the leading destination to find pre made working Code Snippets from all the languages and frameworks.</span>
            </div>
            <br />
            {
              deployConfig.visitorAuth == true &&
              <div>
                <Button title={"Sign Up"} type="fill" hoverEffect={true} />
                <Button title={"Login"} type="outline" hoverEffect={true} />
              </div>
            }

            {/* <span>Create account to save your fav snippets!</span> */}

          </div>
          <img alt='Snippet sauce logo' className={`${styles.svgDecoration} ${styles.decorationAnimation}`} src={logo.src} />

        </div>


        <div className={`contentArea`}>
          {snippetData ? snippetData.map((card, index) => (
            <SnippetCard
              key={index}
              title={card.snippet_title}
              url={card.snippet_thumbnail}
              author={card.snippet_author}
              id={card.snippet_id}
              type={'home'} />
          ))
            : <div className={styles.errorHolder}>
              <span>No Snippets found ! Please come back later</span>
            </div>
          }

        </div>
      </div>
      :
      <LoadingWrapper />

  )
}
