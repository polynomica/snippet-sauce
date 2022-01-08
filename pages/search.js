import { useState } from 'react';
import styles from '../styles/Search.module.css'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Button from "../components/Button"


export default function Search() {

    const router = useRouter()
    const [inputSauce, setInputSauce] = useState('')

    const searchSnippet = () => {
        router.push({ pathname: '/snippet', query: { sauce: inputSauce } })
    }

    return (
        <div className={`screen`}>
            <div className={styles.searchDiv}>
                <h2>Search Snippet</h2>

                <div className={styles.searchBox}>
                    <input maxLength={9} onInputCapture={(e) => setInputSauce(e.target.value)} placeholder='Enter sauce ..' type={'search'} />
                    <Button title={"Search"} type="fill" hoverEffect={false} onPress={searchSnippet} />
                </div>

            </div>

        </div>
    )
}