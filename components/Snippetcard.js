import styles from '../styles/Cards.module.css'
import Link from 'next/link'

export default function SnippetCard() {
    return (
        <Link href={{ pathname: '/snippet' }}>
            <a href="/snippet" className={styles.card}>
                <img className={styles.cardThumb} src='https://raw.githubusercontent.com/polynomica/service-snippetsauce/main/snippetThumbs/jsThumb.png' />
                <div className={styles.cardData}>

                    <h2 className={styles.cardTitle} >Javascipt array show aa</h2>
                    <span className={styles.cardAuthor}>suyashvash</span>
                </div>
            </a>
        </Link>
    )
}