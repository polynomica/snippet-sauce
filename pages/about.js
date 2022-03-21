import styles from '../styles/About.module.css'
import QStart from '../public/qStart.svg'
import QEnd from '../public/qEnd.svg'
import BMC from '../public/bmc-button.svg'
import Head from 'next/head'

export default function AboutScreen() {
    return (
        <div className={`screen flex ${styles.aboutPage}`}>
            <Head>
                <title>About | Snippet Sauce</title>
            </Head>


            <div className={styles.aboutScreen}>
                <div className={`flex ${styles.aboutBanner}`}>
                    <img alt='a' src={QStart.src} />
                    <span>No one wants to remmber the codes, that &apos; s why we are here to help!</span>
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
                <p>Found a Bug or want to suggest something?</p>

                <p>We will be glad to have you in out little team !. Please step forward and contribute anything you think can improve Snippet Sauce.</p>
                <br />
                <p style={{ color: '#ec0000', fontWeight: 'bold' }}>How to contribute?</p>
                <p>Head over to our service repo and raise an issue regarding your query | Or upload the snippet you want to submit with your GitHub user name [ ;) we will give proper credit ]</p>
                <p>We will approve the submittion once we cross check the issue/ query/ snippet</p>

                <a target={'_blank'} rel="noreferrer" style={{ color: '#ec0000', }} href='https://github.com/polynomica/service-snippetsauce' >Click to visit Service Repo</a>

            </div>

        </div >
    )
}