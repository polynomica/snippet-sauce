import navStyles from '../styles/Navbar.module.css'
import ssLogo from '../public/sslogo.png'
import Link from 'next/link'

export default function Navbar() {

    const languages = [
        { name: 'Python' },
        { name: 'Javascript' },
        { name: 'Java' },
        { name: 'Php' },
        { name: 'React js' },
        { name: 'HTML Css' }
    ]

    return (
        <nav className={navStyles.navbar}>
            <a className={`${navStyles.navLinks} ${navStyles.hero}`} href='/'>
                <img src={ssLogo.src} />
                Snippet Sauce
            </a>

            <div className={navStyles.navContent}>
                <span className={`${navStyles.navLinks}  ${navStyles.langPicker}`}>Filter
                    <div className={navStyles.languageHolder}>
                        {languages &&
                            languages.map((item, index) => (
                                <Link key={index} href={{ pathname: '/filter', query: { name: item.name } }}>
                                    <a className={navStyles.langHolderLinks} >{item.name}</a>
                                </Link>
                            ))
                        }
                    </div>
                </span>

                <a href="#Contribute" className={`${navStyles.navLinks} ${navStyles.navLinksActive}`}>Contribute</a>
                <Link href={{ pathname: '/about' }}>
                    <a className={navStyles.navLinks}>About</a>
                </Link>

                <a href="#Profile" className={navStyles.navLinks}>Profile</a>
            </div>
        </nav>

    )
}