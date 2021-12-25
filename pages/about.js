import styles from '../styles/About.module.css'
import QStart from '../public/qStart.svg'
import QEnd from '../public/qEnd.svg'
import BMC from '../public/bmc-button.svg'

export default function AboutScreen() {
    return (
        <div className={`screen ${styles.aboutPage}`}>

            <div className={styles.aboutScreen}>
                <div className={styles.aboutBanner}>
                    <img src={QStart.src} />
                    <span>No one wants to remmber the codes, that's why we are here to help!</span>
                    <img src={QEnd.src} />
                </div>
                <br />
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ac odio sit amet metus bibendum egestas id sodales sapien.
                    Maecenas eleifend ultricies leo, sed tempor lorem. Praesent mollis
                    luctus nisl, vel tincidunt libero viverra sit amet. Praesent ac
                    mauris aliquet, sagittis sapien sed, ullamcorper sapien. Sed id est
                    vel sem consectetur cursus. Nulla urna purus, tristique sit amet
                    lectus vel, semper maximus nibh. Curabitur pharetra mollis mi quis
                    congue. Cras ut eros ac sapien varius lacinia. Quisque eu tincidunt
                    diam. Integer lobortis dui risus, posuere tincidunt dolor elementum id.
                </p>
                <br />
                {/* <h2>Founders</h2>
                <br /> */}
                <h2>Support Us</h2>
                <span>We upload working and useful code snippets for FREE, so you don't have to do the hustle to remember them !</span>
                <br />
                <span>Any Donation will be appreciated :) </span>
                <br />
                <br />
                <a
                    href="https://www.buymeacoffee.com/snippetsauce"
                    target="_blank">
                    <img
                        src={BMC.src}
                        alt="Buy Me A Coffee"
                        className={styles.buyMeCoffeeButton} /></a>

            </div>

        </div >
    )
}