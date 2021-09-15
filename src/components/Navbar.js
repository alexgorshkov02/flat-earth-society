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
            <div id="logo" class="splash">
                <h1 class="fes-logo">Flat Earth Society&trade;</h1>
            </div>
        </header>
    )
}

export default Navbar