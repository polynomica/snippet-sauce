import styles from '../styles/SnippetScreen.module.css'

export default function LoadingWrapper() {
    return (
        <div className={`screen loadingScreen`}>
   
            <span className="loader"></span>
            <h3>Loading ....</h3>
        </div>
    )
}