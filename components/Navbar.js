import { useState, useEffect } from 'react'
import navStyles from '../styles/Navbar.module.css'
import ssLogo from '../public/sslogo.webp'
import searchIcon from '../public/searchIcon.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from "axios";
import { deployConfig } from '../components/deployConfig'
import Button from './Button'
import { isMobile } from "react-device-detect";

export default function Navbar() {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {

        if (isMobile == false) {
            axios.get("https://snippetsauce.herokuapp.com/api/languages")
                .then((response) => { languageSetter(response.data.languages) })
                .catch(err => { console.log(err) })
        }

    }, [])

    const router = useRouter()

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
                    <span>Snippet Sauce</span>
                </a>
            </Link>

            <div className={`flex ${navStyles.navContent}`}>

                <Link href={{ pathname: '/search' }}>
                    <a className={`flex ${navStyles.navLinks} ${currentPath == "/search" && navStyles.navLinksActive} ${navStyles.navOptions}`}>
                        <img alt='search' src={searchIcon.src} style={{ marginRight: 5 }} />
                        Search
                    </a>
                </Link>
                {
                    languages.length !== 0 &&
                    <span className={` ${navStyles.navLinks}  ${navStyles.langPicker} ${currentPath == "/filter" && navStyles.navLinksActive} ${navStyles.navOptions}`}>Filter
                        <div className={`flex ${navStyles.languageHolder}`}>

                            {languages.map((item, index) => (
                                <Link key={index} href={{ pathname: '/filter', query: { name: item.name } }}>
                                    <a className={`${navStyles.langHolderLinks}`} >{item.name}</a>
                                </Link>
                            ))}

                        </div>
                    </span>

                }

                <Link href={{ pathname: '/about' }}>
                    <a className={` ${navStyles.navLinks} ${currentPath == "/about" && navStyles.navLinksActive} ${navStyles.navOptions}`}>About</a>
                </Link>

                {/* {deployConfig.visitorAuth == true &&
                    <Link href={{ pathname: '/profile' }}>
                        <a className={` ${navStyles.navLinks} ${currentPath == "/profile" && navStyles.navLinksActive} ${navStyles.navOptions}`}>Profile</a>
                    </Link>
                } */}



            </div>
        </nav >

    )
}