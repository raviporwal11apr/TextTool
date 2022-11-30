import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { themeToggle, theme, themeText } = props;

    return (
        <nav className={`navbar navbar-expand-lg text-bg-${theme} navbar-${theme} shadow-sm`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <span className='gradient'>TextTool</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch d-inline-flex align-items-center justify-content-center">
                        <input className="form-check-input me-2" type="checkbox" onClick={themeToggle} />
                        <span className='me-4'>{themeText}</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
