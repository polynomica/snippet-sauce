import styles from '../styles/Cards.module.css'
import Link from 'next/link'

export default function SnippetCard(props) {
    return (
        <Link href={{ pathname: '/snippet', query: { sauce: props.id } }}>
            <a href={`/snippet?sauce=${props.id}`} className={`${styles.card} ${props.type == 'home' ? styles.home : styles.save}`}>
                <img alt='Snippet language thumbnail' className={styles.cardThumb} src={props.url} />
                <div className={`flex  ${styles.cardData}`}>
                    <h2 className={styles.cardTitle} >{props.title}</h2>
                    <span className={styles.cardAuthor}>{props.author}</span>
                </div>
            </a>
        </Link>
    )
}