import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    let page;  
    if (props.currentPage === '') {
        page = ''
    } else if (props.currentPage === '') {
        page = ''
    } else if (props.currentPage === '') {
        page = ''
    }

    return (
        <header className="googlebar">
            <div className="logocontainer">
                <div id="fes-logo">
                    <h1 id="fes-title">Flat EartherSpace&trade;</h1>
                </div>
                {/* <div id="searchheader">
                    <form id="srch" name="srch">
                        <input id="srchinput">
                        </input>
                        <button id="srchbutton">Search</button>
                    </form>
                </div> */}
            </div>
            <div className="topnav">
                <ul id="leftNav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/browse">Browse</Link></li>
                    <li><a href="">Find People</a></li>
                </ul>
                <ul id="rightNav">
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Safety</a></li>
                    <li><Link to="/signup">Sign Up</Link></li>

                </ul>
            </div>
        </header>
    )
}

export default Navbar