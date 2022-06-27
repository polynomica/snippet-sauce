import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import SnippetCard from '../components/Snippetcard'
import Button from '../components/Button'
import Head from 'next/head'
import axios from 'axios'
import logo from '../public/logo.svg'
import { deployConfig } from '../components/deployConfig.js'

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
      .then((response) => { console.log(response.data); setSnippetData(response.data.snippet_data); setLoading(false); setErrorLog(null) })
      .catch((err) => { setErrorLog(err.message); setSnippetData(null) });
  }


  return (
    !isLoading ?
      <div className={`screen flex ${styles.homeScreen}`}>
        <Head>
          <title>Snippet Sauce | Home</title>
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
      <div className={`screen`}>
        <h3>Loading ....</h3>
      </div>

  )
}
