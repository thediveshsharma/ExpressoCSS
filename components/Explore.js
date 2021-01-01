import React from 'react'
import '../Explore.css'

function Explore() {
    return (
        <>
        <div id="navbar">
            <div className="logo-search">ExpressIt</div>
            <form id="search"><input type="text" id="search-bar" placeholder="Search"></input></form>
            <div id="links">
                <div className="link">My Profile</div>
                <div className="link">Logout</div>
            </div>
        </div>

        <div id="explore">
            <h1>Explore <strong>Expresso</strong> Write-Ups</h1>
        </div>
        </>
    )
}

export default Explore
