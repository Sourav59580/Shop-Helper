import React from 'react'
import './css/Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-succes bg-success">
                <span className="navbar-brand h1 text-light">
                    <img src="https://pluspng.com/img-png/vegetable-png-hd-vegetable-image-png-image-1260.png" width="100" className="d-inline-block align-top" alt="" />
                    <span id='brandname'>CREATE SHOPPING LIST</span>
                </span>
            </nav>
        </div>
    )
}

export default Navbar
