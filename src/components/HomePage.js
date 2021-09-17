import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePage(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <section class="newscontainer">
                        <header class="newsheader">
                            <h5>Today at Flat EarthSpace</h5>
                        </header>
                    </section>
                    <section class="logincontainer">
                        <header class="loginheader">
                            <h5>Log In</h5>
                        </header>
                        <div class="login-forms">
                            <label>Email
                                <input type="text">
                                </input>
                            </label>

                            <label>Password
                                <input type="text">

                                </input>
                            </label>
                            <ul>
                                <li>
                                    <input id="checkbox" type="checkbox" id="checkbox"></input>
                                    Remember Me
                                </li>
                                <li>
                                    <button id="loginbutton">Log In</button>
                                </li>

                            </ul>

                        </div>
                    </section>
    
                </Col>

            </Row>
        </Container>
    )
}

export default HomePage