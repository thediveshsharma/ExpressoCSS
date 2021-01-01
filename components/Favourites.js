import React from 'react'
import '../Favourites.css'

function Favourites() {
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

        <div id="favourites">
            <h1>My Favourite <strong>Expresso</strong> Write-Ups</h1>
        </div>
        </>
    )
}

export default Favourites
