import React, { useState, useRef } from "react";
import styles from '../styles/Search.module.css'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Button from "../components/Button"
import DataListInput from "react-plain-datalist-input";
import SeoHandler from "../components/seoHandler";

export default function Search() {

    const router = useRouter()
    const [inputSauce, setInputSauce] = useState('');
    const [selectedLang, setSelectedLang] = useState('');

    const [mode, setMode] = useState('sauce');

    const searchSnippet = () => {
        if (inputSauce.trim() !== "") {
            router.push({ pathname: '/snippet', query: { sauce: inputSauce } })
        } else {
            alert("Please enter a Sauce !")
        }

    }

    const modeHandler = () => {
        if (mode == 'sauce') {
            setMode('title')
        } else {
            setMode('sauce')
        }
    }

    const dataListRef = useRef()

    const [item, setItem] = useState([
        { id: 0, label: "asdasd" },
        { id: 0, label: "asdasd" },
        { id: 0, label: "asdasd" },
        { id: 0, label: "asdasd" },
        { id: 0, label: "asdasd" },
        { id: 0, label: "asdasd" },

        { id: 0, label: "asdasd" },
        { id: 0, label: "asdasd" },
        { id: 0, label: "asdasd" },
    ]);

    const inputHandler = (text) => {
        setInputSauce(text);
        // if (text !== "") {
        //     dataListRef.current.style.display = 'flex'
        // } else {
        //     dataListRef.current.style.display = 'none'
        // }


    }



    const items = [{ id: 0, label: "aaa" }]

    return (
        <div className={`screen`}>
            <SeoHandler title={'Search Snipppet | Snippet Sauce'} />
            <div className={`flex ${styles.searchDiv}`}>
                <h2>Search Snippet</h2>

                <div className={`flex ${styles.searchBox}`}>
                    <input maxLength={9} onInputCapture={(e) => inputHandler(e.target.value)} placeholder='Enter sauce ..' type={'search'} />
                    <Button customStyle={{ margin: 0 }} title={"Search"} type="fill" hoverEffect={false} onPress={searchSnippet} />
                </div>


            </div>

        </div >
    )
}