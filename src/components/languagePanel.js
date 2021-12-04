import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LanguagePanel() {


    const [languages, setLanguages] = useState([]);
    const [updateLangName, setUpdateLangName] = useState('');
    const [updateLangShort, setUpdateLangShort] = useState('')
    const [updateLangThumb, setUpdateLangThumb] = useState('')

    const [selectedLang, setSelectedLang] = useState(null);
    const [currentLangMode, setCurrentLangMode] = useState('new')
    const [createLangName, setCreateLangName] = useState('');
    const [createLangShort, setCreateLangShort] = useState('');
    const [createLangthumb, setCreateLangthumb] = useState(null);

    useEffect(() => {
        axios.get("https://snippetsauce.herokuapp.com/api/languages")
            .then((response) => { languageSetter(response.data.languages) })
    }, [])


    const languageSetter = (array) => {
        let temp = [];
        array.forEach(element => temp.push({ name: element }))
        setLanguages(temp)
    }


    const addLanguage = () => {
        if (createLangShort.length === 3) {
            axios.post("https://snippetsauce.herokuapp.com/api/add_language", { language_name: createLangName.toLowerCase(), short_form: createLangShort.toLowerCase(), thumbnail: createLangthumb })
                .then((response) => alert(response.data.message))
        } else { alert("Short form must be 3 words long " + createLangShort) }
    }



    const updateDetailSetter = (language) => {
        setSelectedLang(language)
        axios.get(`https://snippetsauce.herokuapp.com/api/language_detail/${language}`)
            .then((response) => { setUpdateLangName(response.data.language); setUpdateLangShort(response.data.short_form) })
    }

    const updateLanguage = () => {
        if (selectedLang !== null) {
            const langNameReal = updateLangName;
            const data = { language_name: updateLangName, thumbnail: updateLangThumb, previous_language: langNameReal }
            axios.post(`https://snippetsauce.herokuapp.com/api/update_language/${selectedLang}`, data)
                .then(response => alert(response.data.status ? "Language updated sucessfully!" : "Some Error occured"))
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
                currentLangMode === 'new' &&
                <div className="base-flex lang-new">
                    <div className="base-flex lang-forum">

                        <div className="base-flex lang-data">
                            <div className="mb-3">
                                <label htmlFor="langName" className="form-label">Language Name </label>
                                <input type="text" onChange={(e) => setCreateLangName(e.target.value)} className="form-control" id="langName" placeholder="Ex- Python" aria-describedby="Language name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="langShortform" className="form-label">Short form</label>
                                <input type="text" onChange={(e) => { setCreateLangShort(e.target.value) }} className="form-control" placeholder="Ex- pyt" id="langShortform" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lnagThumb" className="form-label">Lang Thumb URL</label>
                                <input type="url" onChange={(e) => { setCreateLangthumb(e.target.value) }} className="form-control" id="langthumb" />
                            </div>
                            <button onClick={addLanguage} className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            }

            {
                currentLangMode === 'update' &&
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
                                <label htmlFor="langShortform" className="form-label">Short form</label>
                                <input type="text" value={updateLangShort} onChange={(e) => setUpdateLangShort(e.target.value)} className="form-control" id="langShortform" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lnagThumb" className="form-label">Lang Thumb URL</label>
                                <input type="url" onChange={(e) => { setUpdateLangThumb(e.target.value) }} className="form-control" id="langthumb" />
                            </div>
                            <button type="submit" onClick={updateLanguage} className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            }
        </div>


    )
}