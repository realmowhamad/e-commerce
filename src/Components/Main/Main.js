import React from 'react';
import BottomBar from '../BottomBar/BottomBar';
import { Container, Row, Col } from 'react-bootstrap'

import './Main.css'


const Main = () => {
    return (
        <Container fluid>
            <Row className="Row-grid">
                <Col >
                    <h1>Hi</h1>
                </Col>

                <Col className="BottomBar-Col">
                    {<BottomBar />}
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
