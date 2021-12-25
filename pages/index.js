
import styles from '../styles/Home.module.css'
import SnippetCard from '../components/Snippetcard'
import Button from '../components/Button'
import Head from 'next/head'
import ssLogo from '../public/sslogo.png'

export default function HomeScreen() {
  return (
    <div className={`screen ${styles.homeScreen}`}>
      <Head>
        <title>Snippet Sauce | Home</title>
      </Head>

      <div className={styles.homeHeader}>
        <div className={styles.homeBody}>
          <h2>Home</h2>
          <div className={styles.tagHolder}>
            <span className={styles.bodyTagline}>Discover the latest snippet for your latest project</span>
            <span>Snippet Sauce is the leading destination to find pre made working Code Snippets from all the languages and frameworks.</span>
          </div>
          <br />
          <div>
            <Button title={"Sign Up"} type="fill" />
            <Button title={"Login"} type="outline" />
          </div>
          {/* <span>Create account to save your fav snippets!</span> */}

        </div>
        <img className={`${styles.svgDecoration} ${styles.decorationAnimation}`} src={ssLogo.src} />

      </div>

      <div className={styles.contentArea}>
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
        <SnippetCard />
      </div>
    </div>
  )
}
