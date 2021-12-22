import navStyles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={navStyles.navbar}>
            <a className={navStyles.navLinks} href='/'>Snippet Sauce</a>

            <div className={navStyles.navContent}>
                <a href="#Languages" className={`${navStyles.navLinks} ${navStyles.navLinksActive}`}>Languages</a>
                <a href="#Contribute" className={navStyles.navLinks}>Contribute</a>
                <a href="#About" className={navStyles.navLinks}>About</a>
                <a href="#Profile" className={navStyles.navLinks}>Profile</a>
            </div>
        </nav>

    )
}