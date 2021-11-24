import axios from "axios";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import './navBar.scss';

export default function NavBar(props) {

    const history = useHistory();
    const [inputSauce, setInputSauce] = React.useState('');
    const [languages, setLanguages] = React.useState([]);

    useEffect(() => {
        axios.get("https://snippetsauce.herokuapp.com/api/languages")
            .then((response) => { languageSetter(response.data.languages) })
    }, [])



    const searchSauce = (e) => {
        if (inputSauce.length !== 9) {
            alert("Invalid Sauce ! ")
            e.preventDefault()
        } else history.push({ pathname: '/snippet', search: `search/`, hash: `${inputSauce}`, state: { snippetId: inputSauce } });

    }

    const chooseLang = (language) => {
        history.push({ pathname: '/filter', search: `${language}` })
    }

    const languageSetter = (array) => {
        let temp = [];
        array.forEach(element => temp.push({ name: element }))
        setLanguages(temp)
    }




    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Snippet Sauce</Link>
                    {props.navOptions === true &&
                        <>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Languages
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><button className="dropdown-item" onClick={() => chooseLang('python')}>Python</button></li>
                                            <li><button className="dropdown-item" onClick={() => chooseLang('javascript')}>JavaScript</button></li>
                                            <li><button className="dropdown-item" onClick={() => chooseLang('laravel')}>Laravel</button></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Browse All</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"> <a className="nav-link active" aria-current="page" rel="noopener noreferrer" target="blank" href="https://github.com/polynomica/snippet-sauce">Contribute</a></li>
                                </ul>
                                <div className="d-flex">
                                    <input onChange={(e) => setInputSauce(e.target.value)} className="form-control me-2" type="search" placeholder="Enter Sauce" aria-label="Search" />
                                    <button onClick={(e) => searchSauce(e)} className="btn btn-primary" type="submit">Search</button>
                                </div>

                            </div>
                        </>
                    }
                </div>
            </nav>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog custom">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Browse Language</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="base-flex modal-body" id="modal-body">
                            {languages.map((item, index) => <button onClick={() => chooseLang(item.name)} key={index} data-bs-dismiss="modal" className="languages-button">{item.name}</button>)}

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}