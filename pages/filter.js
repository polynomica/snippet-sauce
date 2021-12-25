
import styles from '../styles/Home.module.css'
import SnippetCard from '../components/Snippetcard'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function FilterScreen() {

    const router = useRouter()
    const filterName = router.query.name

    return (
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
                <img className={styles.svgDecoration} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"} />

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