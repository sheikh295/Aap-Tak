import React, { useState } from 'react'

function Navbar(props) {
    
    const [country, setCountry] = useState('us')

    const setCountyUk = () => {
        setCountry('gb')
    };

    const setCountryUs = () => {
        setCountry('us')
    };

    const setCountryIn = () => {
        setCountry('in')
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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Sports</a></li>
                                <li><a className="dropdown-item" href="#">Technology</a></li>
                                <li><a className="dropdown-item" href="#">Business</a></li>
                                <li><a className="dropdown-item" href="#">Entertainment</a></li>
                                <li><a className="dropdown-item" href="#">General</a></li>
                                <li><a className="dropdown-item" href="#">Health</a></li>
                                <li><a className="dropdown-item" href="#">Science</a></li>
                                {/* <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="d-flex dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{country}</button>
                        <ul className="dropdown-menu">
                            <li><a onClick={setCountyUk} className="dropdown-item">UK</a></li>
                            <li><a onClick={setCountryUs} className="dropdown-item">US</a></li>
                            <li><a onClick={setCountryIn} className="dropdown-item">IN</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar