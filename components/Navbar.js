import navStyles from '../styles/Navbar.module.css'
import ssLogo from '../public/sslogo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {


    const router = useRouter()

    const languages = [
        { name: 'Python' },
        { name: 'Javascript' },
        { name: 'Java' },
        { name: 'Php' },
        { name: 'React js' },
        { name: 'HTML Css' }
    ]

    const currentPath = router.pathname;

    return (
        <nav className={navStyles.navbar}>
            <Link href={{ pathname: '/' }}>
                <a className={`${navStyles.navLinks} ${navStyles.hero} ${currentPath == "/" && navStyles.navLinksActive}`} >
                    <img src={ssLogo.src} />
                    Snippet Sauce
                </a>
            </Link>

            <div className={navStyles.navContent}>
                <span className={`${navStyles.navLinks}  ${navStyles.langPicker} ${currentPath == "/filter" && navStyles.navLinksActive}`}>Filter
                    <div className={navStyles.languageHolder}>
                        {languages &&
                            languages.map((item, index) => (
                                <Link key={index} href={{ pathname: '/filter', query: { name: item.name } }}>
                                    <a className={`${navStyles.langHolderLinks}`} >{item.name}</a>
                                </Link>
                            ))
                        }
                    </div>
                </span>

                <a href="#Contribute" className={`${navStyles.navLinks} `}>Contribute</a>
                <Link href={{ pathname: '/about' }}>
                    <a className={`${navStyles.navLinks} ${currentPath == "/about" && navStyles.navLinksActive}`}>About</a>
                </Link>

                <a href="#Profile" className={navStyles.navLinks}>Profile</a>
            </div>
        </nav>

    )
}