import React from 'react';
import '../App.css';
import LengthMeasurement from './LengthMeasurement';
import TemperatureMeasurement from './TemperatureMeasurement';
import VolumeMeasurement from './VolumeMeasurement';
import { Container, Row, Col } from 'reactstrap';
import quantity from '../assests/Measurement.json';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import calculate from './CalculateQuantity';

class VolumeQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            converters: ["Litres", "Millilitres", "Gallons"],
            inupt: "",
            result: "",
            base: "",
            convertTo: "",

            quantity:[
                {
                    unitImage:"../assests/Measurement.json",
                    type:"Length"
                },
                {
                    unitImage:"../assests/Measurement.json",
                    type:"Volume"
                },
                {
                    unitImage:"../assests/Measurement.json",
                    type:"Temperature"
                }
            ]
        };
    }

    handleSelect = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        },
            this.calculate
            // <calculate/>
        );
    };

    handleInput = (event) => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value,
        },
            this.calculate
            // <calculate/>
        );
    }

    calculate = () => {
        if (this.state.base === "Litres" && this.state.convertTo === "Millilitres") {
            const result = ((this.state.input) * 1000).toFixed(4);
            this.setState({
                result
            });
        }

        if (this.state.base === "Litres" && this.state.convertTo === "Gallons") {
            const result = ((this.state.input) / 3.785).toFixed(3);
            this.setState({
                result
            });
        }

        if (this.state.base === "Millilitres" && this.state.convertTo === "Litres") {
            const result = ((this.state.input) / 1000).toFixed(4);
            this.setState({
                result
            });
        }

        if (this.state.base === "Millilitres" && this.state.convertTo === "Gallons") {
            const result = ((this.state.input) / 3785).toFixed(4);
            this.setState({
                result
            });
        }

        if (this.state.base === "Gallons" && this.state.convertTo === "Litres") {
            const result = ((this.state.input) * 3.785).toFixed(4);
            this.setState({
                result
            });
        }

        if (this.state.base === "Gallons" && this.state.convertTo === "Millilitres") {
            const result = ((this.state.input) * 3785).toFixed(3);
            this.setState({
                result
            });
        }

    }

    render() {
        const { converters, input, result, base, convertTo } = this.state; 
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
                    <input value={input}
                        onChange={this.handleInput}
                        type="" id="input" />
                    <span> </span>
                    <input value={result}
                        onChange={this.handleInput}
                        type="" id="result"
                        disabled={true} /><br />
                    <select name="base"
                        value={base} onChange={this.handleSelect} id="inputTypeVolume">
                        {converters.map(convert =>
                            <option key={convert} value={convert}> {convert} </option>
                        )}
                    </select>
                    <span> </span>
                    <select name="convertTo"
                        value={convertTo} onChange={this.handleSelect} id="resultTypeVolume">
                        {converters.map(convert =>
                            <option key={convert} value={convert}> {convert} </option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}
export default VolumeQuantity;
