import styles from '../styles/About.module.css'
import QStart from '../public/qStart.svg'
import QEnd from '../public/qEnd.svg'
import BMC from '../public/bmc-button.svg'
import Head from 'next/head'

export default function AboutScreen() {

    const seoHandle = () => {

        return (
            <Head>
                <title>About | Snippet Sauce</title>

                <meta name="title" content="About | Snippet Sauce" />
                <meta name="description" content={"Snippet sauce is a one-stop snippet collection platform. We provide a huge collection of fully tested and working code snippets, so you don&apos;t have to worry about try and error. You can also contribute to Snippet sauce by submitting your snippets or raising some issues.Our mission is to provide the best working code snippets with ease. From HTML to Bhai Lang we got you covered."} />

                <meta property="og:title" content="About | Snippet Sauce" />
                <meta property="og:description" content={"Snippet sauce is a one-stop snippet collection platform. We provide a huge collection of fully tested and working code snippets, so you don&apos;t have to worry about try and error. You can also contribute to Snippet sauce by submitting your snippets or raising some issues.Our mission is to provide the best working code snippets with ease. From HTML to Bhai Lang we got you covered."} />

                <meta property="twitter:title" content="About | Snippet Sauce" />
                <meta property="twitter:description" content={"Snippet sauce is a one-stop snippet collection platform. We provide a huge collection of fully tested and working code snippets, so you don&apos;t have to worry about try and error. You can also contribute to Snippet sauce by submitting your snippets or raising some issues.Our mission is to provide the best working code snippets with ease. From HTML to Bhai Lang we got you covered."} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="snippetsauce.tech/" />
                <meta property="og:image" content="/_next/static/media/logo.1e817900.svg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="snippetsauce.tech" />
                <meta property="twitter:image" content="/_next/static/media/logo.1e817900.svg" />
            </Head>
        )

    }

    return (
        <div className={`screen flex ${styles.aboutPage}`}>
            {seoHandle()}


            <div className={styles.aboutScreen}>
                <div className={`flex ${styles.aboutBanner}`}>
                    <img alt='a' src={QStart.src} />
                    <span>No one wants to remember the codes, that &apos; s why we are here to help!</span>
                    <img alt='b' src={QEnd.src} />
                </div>
                <br />
                <h2>About</h2>
                <p>Snippet sauce is a one-stop snippet collection platform. We provide a huge collection of fully tested and working code snippets, so you don&apos;t have to worry about try and error. You can also contribute to Snippet sauce by submitting your snippets or raising some issues.
                    <br />
                    Our mission is to provide the best working code snippets with ease. From HTML to Bhai Lang we got you covered.
                </p>
                <br />
                {/* <h2>Founders</h2>
                <br /> */}
                <h2>Support Us</h2>
                <span>We upload working and useful code snippets for FREE, so you don&apos;t have to do the hustle to remember them !</span>
                <br />
                <span>Any Donation will be appreciated :) </span>
                <br />
                <br />
                <a
                    href="https://www.buymeacoffee.com/snippetsauce"
                    rel="noreferrer"
                    target="_blank">
                    <img
                        src={BMC.src}
                        alt="Buy Me A Coffee"
                        className={styles.buyMeCoffeeButton} /></a>

                <br id='contribute' />
                <br />
                <br />
                <h2 >Want to contribute ?</h2>
                <p>Found a Bug or have an awesome suggestion?</p>

                <p>We will be more than happy to implement it and improve the experience of Snippet Sauce.</p>
                <br />
                <p style={{ color: '#ec0000', fontWeight: 'bold' }}>How to contribute?</p>
                <p>Please head over to our service repo and raise an issue with appropriate details to help us quickly resolve it.</p>
                <p>If you decide to contribute Snippets feel free to open an issue. The guidelines for contributing are mentioned in the repo.
                </p>
                <p>The service repo can be found
                    <a target={'_blank'} rel="noreferrer" style={{ color: '#ec0000', }} href='https://github.com/polynomica/service-snippetsauce' > here</a>
                </p>



            </div>

        </div >
    )
}