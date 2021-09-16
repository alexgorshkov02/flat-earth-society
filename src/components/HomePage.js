import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
                    <Card class="card">
                        <header class="newsheader">
                            <h5>Today on Flat EarthSpace</h5>
                        </header>
                    </Card>
                </Col>
                <aside>
                    <Card class="aside">
                        <header class="newsheader">
                            <h5>Join Today!</h5>
                        </header>

                    </Card>
                </aside>
            </Row>
        </Container>
    )
}

export default HomePage