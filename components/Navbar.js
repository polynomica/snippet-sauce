import navStyles from '../styles/Navbar.module.css'
import ssLogo from '../public/sslogo.png'

export default function Navbar() {
    return (
        <nav className={navStyles.navbar}>
            <a className={`${navStyles.navLinks} ${navStyles.hero}`} href='/'>
                <img src={ssLogo.src} />
                Snippet Sauce
            </a>

            <div className={navStyles.navContent}>
                <span className={`${navStyles.navLinks}  ${navStyles.langPicker}`}>Languages
                    <div className={navStyles.languageHolder}>
                        <a className={navStyles.langHolderLinks} href="#">Python</a>
                        <a className={navStyles.langHolderLinks} href="#">Java</a>
                        <a className={navStyles.langHolderLinks} href="#">JavaScript</a>
                        <a className={navStyles.langHolderLinks} href="#">Python</a>
                        <a className={navStyles.langHolderLinks} href="#">Java</a>
                        <a className={navStyles.langHolderLinks} href="#">JavaScript</a>
                        <a className={navStyles.langHolderLinks} href="#">Python</a>
                        <a className={navStyles.langHolderLinks} href="#">Java</a>
                        <a className={navStyles.langHolderLinks} href="#">JavaScript</a>
                        <a className={navStyles.langHolderLinks} href="#">Python</a>
                        <a className={navStyles.langHolderLinks} href="#">Java</a>
                        <a className={navStyles.langHolderLinks} href="#">JavaScript</a>
                        <a className={navStyles.langHolderLinks} href="#">Python</a>
                        <a className={navStyles.langHolderLinks} href="#">Java</a>
                        <a className={navStyles.langHolderLinks} href="#">JavaScript</a>
                        <a className={navStyles.langHolderLinks} href="#">Python</a>
                        <a className={navStyles.langHolderLinks} href="#">Java</a>
                        <a className={navStyles.langHolderLinks} href="#">JavaScript</a>
                    </div>
                </span>

                <a href="#Contribute" className={`${navStyles.navLinks} ${navStyles.navLinksActive}`}>Contribute</a>
                <a href="#About" className={navStyles.navLinks}>About</a>
                <a href="#Profile" className={navStyles.navLinks}>Profile</a>
            </div>
        </nav>

    )
}