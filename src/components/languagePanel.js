import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthToken } from "../app/useStore";

export default function LanguagePanel() {


    const [languages, setLanguages] = useState([]);
    const [updateLangName, setUpdateLangName] = useState('');
    const [updateLangShort, setUpdateLangShort] = useState('')
    const [updateLangThumb, setUpdateLangThumb] = useState('')
    const [updateLangDesc, setUpdateLangDesc] = useState('');
    const [updateLangLogo, setUpdateLangLogo] = useState('');

    const [selectedLang, setSelectedLang] = useState(null);
    const [currentLangMode, setCurrentLangMode] = useState('new')
    const [isLoading, setIsLoading] = useState(false)

    const [newLangName, setNewLangName] = useState('');
    const [newLangShortForm, setNewLangShortform] = useState('');
    const [newLangThumb, setNewLangThumb] = useState('');
    const [newLangLogo, setNewLangLogo] = useState('');
    const [newLangDesc, setNewLangDesc] = useState('');

    const token = AuthToken()



    useEffect(() => {
        axios.get("https://snippetsauce.herokuapp.com/api/languages")
            .then((response) => { languageSetter(response.data.languages) })
    }, [])


    const languageSetter = (array) => {
        let temp = [];
        array.forEach(element => temp.push({ name: element }))
        setLanguages(temp)
    }


    const addLanguage = async () => {
        if (newLangShortForm.length === 3 && newLangName !== '' && newLangDesc !== '') {
            setIsLoading(true)
            const data = {
                "language_name": newLangName.toLowerCase(),
                "short_form": newLangShortForm.toLowerCase(),
                "thumbnail": newLangThumb,
                "lang_desc": newLangDesc,
                "lang_logo": newLangLogo
            }

            await axios.post("https://snippetsauce.herokuapp.com/api/add_language", data,
                { "headers": { "x-admin-token": `${token}` } })
                .then((response) => { alert(response.data.message); setIsLoading(false) })
                .catch(err => { alert(err); setIsLoading(false) })
        } else { alert("Short form must be 3 words long " + newLangShortForm) }
    }



    const updateDetailSetter = (language) => {
        setIsLoading(true)
        setSelectedLang(language)
        axios.get(`https://snippetsauce.herokuapp.com/api/language_detail/${language}`, { "headers": { "x-admin-token": `${token}` } })
            .then((response) => {

                console.log(response.data)
                setUpdateLangName(response.data.language);
                setUpdateLangShort(response.data.short_form)
                setUpdateLangDesc(response.data.description)
                setUpdateLangLogo(response.data.logo)
                setUpdateLangThumb(response.data.thumbnail)
                setIsLoading(false)
            })
            .catch(err => { alert(err); setIsLoading(false) })
    }


    const updateLanguage = async () => {
        if (selectedLang !== null) {
            setIsLoading(true)
            const langNameReal = selectedLang;

            const data = {
                "language_name": updateLangName,
                "thumbnail": updateLangThumb,
                "lang_desc": updateLangDesc,
                "lang_logo": updateLangLogo,
            }

            console.log(data)

            await axios.post(`https://snippetsauce.herokuapp.com/api/update_language/${selectedLang}`, data, { "headers": { "x-admin-token": `${token}` } })
                .then(response => { console.log(response.data.message); alert(response.data.message); setIsLoading(false) })
                .catch(err => { alert(err); setIsLoading(false) })
        }
    }


    return (


        <div className="panel language-panel">
            <br />
            <ul className="nav nav-tabs">
                <li className="nav-item"> <button className={currentLangMode === 'new' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentLangMode('new')}>New</button></li>
                <li className="nav-item"><button className={currentLangMode === 'update' ? "nav-link active" : "nav-link"} aria-current="page" onClick={() => setCurrentLangMode('update')}>Update</button></li>
            </ul>


            {
                currentLangMode === 'new' ?
                    !isLoading ?
                        <div className="base-flex lang-new">
                            <div className="base-flex lang-forum">

                                <div className="base-flex lang-data">
                                    <div className="mb-3">
                                        <label htmlFor="langName" className="form-label">Language Name </label>
                                        <input type="text" onChange={(e) => setNewLangName(e.target.value)} className="form-control" id="langName" placeholder="Ex- Python" aria-describedby="Language name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="langShortform" className="form-label">Short form</label>
                                        <input type="text" onChange={(e) => { setNewLangShortform(e.target.value) }} className="form-control" placeholder="Ex- pyt" id="langShortform" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lnagThumb" className="form-label">Lang Thumb URL</label>
                                        <input type="url" onChange={(e) => { setNewLangThumb(e.target.value) }} className="form-control" id="langthumb" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="langDesc" className="form-label">Lang Description</label>
                                        <textarea onChange={(e) => { setNewLangDesc(e.target.value) }} className="form-control" id="floatingTextarea"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="langLogo" className="form-label">Lang Logo URL</label>
                                        <input type="url" onChange={(e) => { setNewLangLogo(e.target.value) }} className="form-control" id="langthumb" />
                                    </div>
                                    <button onClick={addLanguage} className="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="base-flex" style={{ flex: 1, height: 100, width: '100%' }}>
                            <span style={{ fontSize: '1.5rem' }}>Loading...</span>
                        </div>

                    :
                    !isLoading ?
                        <div className="base-flex lang-update">
                            <div className="dropdown">
                                <button className="btn small btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {selectedLang === null ? 'Choose Lanaguage' : selectedLang}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {languages.map((item, index) => <li key={index}><button onClick={(e) => updateDetailSetter(item.name)} className="dropdown-item" >{item.name}</button></li>)}
                                </ul>
                            </div>

                            <div className="base-flex lang-forum">

                                <div className="base-flex lang-data">
                                    <div className="mb-3">
                                        <label htmlFor="langName" className="form-label">Language Name</label>
                                        <input type="text" value={updateLangName} onChange={(e) => setUpdateLangName(e.target.value)} className="form-control" id="langName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lnagThumb" className="form-label">Lang Thumb URL</label>
                                        <input type="url" value={updateLangThumb} onChange={(e) => { setUpdateLangThumb(e.target.value) }} className="form-control" id="langthumb" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="langDesc" className="form-label">Lang Description</label>
                                        <textarea value={updateLangDesc} onChange={(e) => { setUpdateLangDesc(e.target.value) }} className="form-control" id="floatingTextarea"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="langLogo" className="form-label">Lang Logo URL</label>
                                        <input type="url" value={updateLangLogo} onChange={(e) => { setUpdateLangLogo(e.target.value) }} className="form-control" id="langthumb" />
                                    </div>
                                    <button type="submit" onClick={updateLanguage} className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="base-flex" style={{ flex: 1, height: 100, width: '100%' }}>
                            <span style={{ fontSize: '1.5rem' }}>Loading...</span>
                        </div>


            }
        </div>




    )
}