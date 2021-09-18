import React, { useEffect } from 'react';


function Navbar(props) {
    console.log('this is props', props)
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
            <div class="logocontainer">
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
            <div class="topnav">
                <ul id="leftNav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Browse</a></li>
                    <li><a href="">Find People</a></li>
                </ul>
                <ul id="rightNav">
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Safety</a></li>
                    <li><a href="">Sign Up</a></li>

                </ul>
            </div>
        </header>
    )
}

export default Navbar