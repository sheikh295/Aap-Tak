import React, { useState } from 'react'

function Navbar(props) {
    
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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
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
                                <li><a onClick={props.setGeneral} className="dropdown-item" >General</a></li>
                                <li><a onClick={props.setHealth} className="dropdown-item" >Health</a></li>
                                <li><a onClick={props.setScience} className="dropdown-item" >Science</a></li>
                                {/* <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <div className="d-flex dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{props.country}</button>
                        <ul className="dropdown-menu">
                            <li><a onClick={props.setCountryUs} className="dropdown-item">US</a></li>
                            <li><a onClick={props.setCountryIn} className="dropdown-item">IN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar