import React from 'react';
import '../App.css';
import LengthMeasurement from './LengthMeasurement';
import TemperatureMeasurement from './TemperatureMeasurement';
import VolumeMeasurement from './VolumeMeasurement';
import { Container, Row, Col } from 'reactstrap';

class QuantityMeasurement extends React.Component {
    state={
        converters:["Meteres","Kilometere","Centimeteres","Millimetere","Micrometere","Mile","Foot","Inch"],
    };
    render() {
        const {converters}=this.state;
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
                    <h4 className="converter-title">FROM TO</h4>
                    <input type="text" id="input"/>
                    <span> </span>
                    <input type="text" id="result"/><br/>
                    <select id="inputType">
                        {converters.map(convert=>
                            <option key={convert} value={convert}> {convert} </option>
                        )}                       
                    </select>
                    <span> </span>
                    <select id="resultType">
                    {converters.map(convert=>
                            <option key={convert} value={convert}> {convert} </option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}
export default QuantityMeasurement;