import React, { useEffect } from 'react';

function Footer() {
    return (
        <footer amp-fx="float-in-bottom" class="footer">
            <br></br>
            <ul>
                <li><a href="">About</a></li>
                <li>|</li>
                <li><a href="">FAQ</a></li>
                <li>|</li>
                <li><a href="">Contact</a></li>
                <li>|</li>
                <li><a href="">Github</a></li>
                <li>|</li>
                <li><a href="">Linkedin</a></li>
            </ul>
            <p>&copy;2021 Flat EartherSpace.com. All Rights Reserved.</p>
            <script async custom-element="amp-fx-collection" src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js"></script>

        </footer>
    )
}

export default Footer