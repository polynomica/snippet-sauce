import { useState, useEffect } from 'react'
import navStyles from '../styles/Navbar.module.css'
import ssLogo from '../public/sslogo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios";
import { deployConfig } from '../pages/deployConfig'

export default function Navbar() {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        axios.get("https://snippetsauce.herokuapp.com/api/languages")
            .then((response) => { languageSetter(response.data.languages) })
    }, [])

    const router = useRouter()

    // const languages = [
    //     { name: 'Python' },
    //     { name: 'Javascript' },
    //     { name: 'Java' },
    //     { name: 'Php' },
    //     { name: 'React js' },
    //     { name: 'HTML Css' }
    // ]

    const languageSetter = (array) => {
        let temp = [];
        array.forEach(element => temp.push({ name: `${element.charAt(0).toUpperCase() + element.slice(1)}` }))
        setLanguages(temp)
    }

    const currentPath = router.pathname;

    return (
        <nav className={`flex ${navStyles.navbar}`}>
            <Link href={{ pathname: '/' }}>
                <a className={`${navStyles.navLinks} flex ${navStyles.hero} ${currentPath == "/" && navStyles.navLinksActive}`} >
                    <img alt='Snippet sauce logo in navbar' src={ssLogo.src} />
                    Snippet Sauce
                </a>
            </Link>

            <div className={navStyles.navContent}>

                <Link href={{ pathname: '/search' }}>
                    <a className={`${navStyles.navLinks} ${currentPath == "/search" && navStyles.navLinksActive}`}>Search</a>
                </Link>

                <span className={`${navStyles.navLinks}  ${navStyles.langPicker} ${currentPath == "/filter" && navStyles.navLinksActive}`}>Filter
                    <div className={`flex ${navStyles.languageHolder}`}>
                        {languages &&
                            languages.map((item, index) => (
                                <Link key={index} href={{ pathname: '/filter', query: { name: item.name } }}>
                                    <a className={`${navStyles.langHolderLinks}`} >{item.name}</a>
                                </Link>
                            ))
                        }
                    </div>
                </span>

                <Link href={{ pathname: '/about' }}>
                    <a className={`${navStyles.navLinks} ${currentPath == "/about" && navStyles.navLinksActive}`}>About</a>
                </Link>

                {deployConfig.visitorAuth == true &&
                    <Link href={{ pathname: '/profile' }}>
                        <a className={`${navStyles.navLinks} ${currentPath == "/profile" && navStyles.navLinksActive}`}>Profile</a>
                    </Link>
                }

            </div>
        </nav>

    )
}