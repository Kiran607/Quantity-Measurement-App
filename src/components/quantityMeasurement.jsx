import React from 'react';
import '../App.css';
import LengthMeasurement from '../components/LengthMeasurement';
import TemperatureMeasurement from '../components/TemperatureMeasurement';
import VolumeMeasurement from '../components/VolumeMeasurement';
import { Container, Row, Col } from 'reactstrap';

class QuantityMeasurement extends React.Component {
    render() {
        return (
            <div className="quantityForm">
                <div className="header">
                    <header>
                        <h1>Welcome to quantity Measurement</h1>
                    </header>
                </div>
                <div className="text">CHOOSE TYPE</div>
                <Container>
                    <Row>
                        <Col>
                            <LengthMeasurement />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TemperatureMeasurement />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <VolumeMeasurement />
                        </Col>
                    </Row>
                </Container>
                <div className="measurement">
                </div>
            </div>
        );
    }
}
export default QuantityMeasurement;