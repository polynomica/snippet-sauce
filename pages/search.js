import React, { useState, useRef } from "react";
import styles from '../styles/Search.module.css'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Button from "../components/Button"
import DataListInput from "react-plain-datalist-input";
import SeoHandler from "../components/seoHandler";
import axios from "axios";
import SnippetCard from '../components/Snippetcard'

export default function Search() {

    const router = useRouter()
    const [searchString, setsearchString] = useState('');
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const [mode, setMode] = useState('title');

    const searchSnippet =async () => {
       
        if (searchString.trim() !== "") {

            if(mode=='sauce'){
                 router.push({ pathname: '/snippet', query: { sauce: searchString } })
            }else{
                setIsLoading(true)

               
                await axios.get(`https://snippetsauce.herokuapp.com/api/title/${searchString}`)
                .then(response=>{
                    console.log(response.data)
                    setIsLoading(false)
                    setResults(response.data.snippet_data)
                })
                .catch(err=>{
                    setIsLoading(false)
                    alert('Something went wrong !')
                })
            }
           
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
        setsearchString(text);
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
               
                    <input maxLength={mode=='sauce' && 9} onInputCapture={(e) => inputHandler(e.target.value)} placeholder={mode=='sauce' ?'Enter Sauce':'Enter Keywords ..'} type={'search'} />
                    <Button customStyle={{ margin: 0,padding:15 }} title={"Search"} type="fill" hoverEffect={false} onPress={searchSnippet} />
                    
                </div>
                <br/>
                {
                    mode=='sauce' ?
                        <span onClick={()=>setMode('title')} className="modeChanger">Search by Title</span>
                    :
                        <span onClick={()=>setMode('sauce')} className="modeChanger">Search by Sauce</span>
                }
                
                <br/>
                    <br/>
                    <br/> <br/>

                    <div className={`contentArea`}>
                    {
                !isLoading?
                results!==null?
                    results.length!==0 ? results.map((card, index) => (
                        <SnippetCard
                        key={index}
                        title={card.snippet_title}
                        url={card.snippet_thumbnail}
                        author={card.snippet_author}
                        id={card.snippet_id}
                        type={'home'} />
                            ))
                    : 
                        <div className={styles.errorHolder}>
                            <span>No Snippets found ! Please come back later</span>
                        </div>

                    :
                    <></>
                    :
                    <div style={{flexDirection:'row',textAlign:'center'}}>  
                         <span className="loader"></span>
                            <br/>
                         <span >Searching ...</span>
                    </div>
               
              
                }

                        </div>
               

            </div>

        </div >
    )
}