import styles from '../styles/SnippetScreen.module.css'
import loadingGif from '../public/loadingGif.gif'

export default function LoadingWrapper() {
    return (
        <div className={`screen loadingScreen`}>
            <img src={loadingGif.src} width={120} height={120} />
            <h3>Loading ....</h3>
        </div>
    )
}