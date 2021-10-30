import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(props) {



    const languages = [
        { name: "JavaScript" },
        { name: "Python" },
        { name: "Java" },
        { name: "Laravel" },
        { name: "PHP" },
        { name: "Golang" },
        { name: "Some Language" },
        { name: "JavaScript" },
        { name: "Python" },
        { name: "Java" },
        { name: "Laravel" },
        { name: "PHP" },
        { name: "Golang" },
        { name: "Some Language" },
        { name: "JavaScript" },
        { name: "Python" },
        { name: "Java" },
        { name: "Laravel" },
        { name: "PHP" },
        { name: "Golang" },
        { name: "Some Language" },
    ];





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
                                            <li><a className="dropdown-item" href="#">Python</a></li>
                                            <li><a className="dropdown-item" href="#">JavaScript</a></li>
                                            <li><a className="dropdown-item" href="#">Laravel</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Browse All</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item"> <a className="nav-link active" aria-current="page" rel="noopener noreferrer" target="blank" href="https://github.com/polynomica/snippet-sauce">Contribute</a></li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Enter Sauce" aria-label="Search" />
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </form>

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
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="base-flex modal-body" id="modal-body">
                            {languages.map((item, index) => (<button key={index} data-bs-dismiss="modal" className="languages-button">{item.name}</button>))}
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