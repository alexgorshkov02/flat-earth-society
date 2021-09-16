import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage(props) {
    return (
        // <body>
        //     <div class="content">
        //         <div class="newsheader">
        //             <h5>Today on Flat EarthSpace</h5>
        //         </div>
        //     </div>
            
        // </body>
        <Container class="container">
            <Row>
                <Col>
                    <section class="box">
                        <header class="newsheader">
                            <h5>Today on Flat EarthSpace</h5>
                        </header>
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage