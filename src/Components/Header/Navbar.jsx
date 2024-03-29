import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

function Navbar(props) {

    const setquery = (event) => {
        event.preventDefault();
        props.callQuery(event.target.search.value)
        event.target.search.value = '';
    };

    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Aap Tak</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link id='home-nav-link' className={`nav-link ${props.activeClassHome}`} aria-current="page" to={`/`}>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a onClick={props.setSports} className="dropdown-item">Sports</a></li>
                                <li><a onClick={props.setTechnology} className="dropdown-item" >Technology</a></li>
                                <li><a onClick={props.setBusiness} className="dropdown-item" >Business</a></li>
                                <li><a onClick={props.setEntertainment} className="dropdown-item" >Entertainment</a></li>
                                <li><a onClick={props.setTop} className="dropdown-item" >General</a></li>
                                <li><a onClick={props.setHealth} className="dropdown-item" >Health</a></li>
                                <li><a onClick={props.setScience} className="dropdown-item" >Science</a></li>
                                {/* <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link id='about-nav-link' className={`nav-link ${props.activeClassAbout}`} to={`/about`}>About</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <div className="d-flex dropdown">
                        <button className="btn btn-primary dropdown-toggle mx-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">{props.country}</button>
                        <ul className="dropdown-menu">
                            <li><a onClick={props.setCountryPk} className="dropdown-item">PK</a></li>
                            <li><a onClick={props.setCountryUs} className="dropdown-item">US</a></li>
                            <li><a onClick={props.setCountryIn} className="dropdown-item">IN</a></li>
                            <li><a onClick={props.setCountryUk} className="dropdown-item">UK</a></li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={setquery}>
                            <input name='search' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button id='searchBar' className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar