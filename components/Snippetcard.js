import styles from '../styles/Cards.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function SnippetCard(props) {
    return (
        <Link href={{ pathname: '/snippet', query: { title: props.title, sauce: props.id } }}>
            <a href={`/snippet?title=${props.title}?sauce=${props.id}`} className={`${styles.card}`}>
                {/* <img alt='Snippet language thumbnail' className={styles.cardThumb} src={props.url} /> */}
                <Image alt='Snippet language thumbnail' layout='fill' width={'100%'} height={'100%'} className={styles.cardThumb} src={props.url}/>
                <div className={`flex  ${styles.cardData}`}>
                    <h2 className={styles.cardTitle} >{props.title}</h2>
                    <span className={styles.cardAuthor}>{props.author}</span>
                </div>
            </a>
        </Link>
    )
}