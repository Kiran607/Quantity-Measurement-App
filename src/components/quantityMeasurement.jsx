import React from 'react';
import '../App.css';
import LengthMeasurement from './LengthMeasurement';
import TemperatureMeasurement from './TemperatureMeasurement';
import VolumeMeasurement from './VolumeMeasurement';
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
                <div className="converterBody">
                    <h4 className="converter-title">From To</h4>
                    <input type="text" value="1" id="input"/>
                    <span> </span>
                    <input type="text" value="100" id="result"/><br/>
                    <select id="inputType">
                        <option value="meter">Meteres</option>
                        <option value="kilometer">Kilometere</option>
                        <option value="centimeters">Centimeteres</option>
                        <option value="millimeter">Millimetere</option>
                        <option value="micrometer">Micrometere</option>
                        <option value="mile">Mile</option>
                        <option value="foot">Foot</option>
                        <option value="inch">Inch</option>
                    </select>
                    <span> </span>
                    <select id="resultType">
                        <option value="meter">Meteres</option>
                        <option value="kilometer">Kilometere</option>
                        <option value="centimeters">Centimeteres</option>
                        <option value="millimeter">Millimetere</option>
                        <option value="micrometer">Micrometere</option>
                        <option value="mile">Mile</option>
                        <option value="foot">Foot</option>
                        <option value="inch">Inch</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default QuantityMeasurement;