import React from 'react';
import '../App.css';
import LengthMeasurement from './LengthMeasurement';
import TemperatureMeasurement from './TemperatureMeasurement';
import VolumeMeasurement from './VolumeMeasurement';
import { Container, Row, Col } from 'reactstrap';

class TemperatureQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            converters: ["Celsius", "Fahrenheit", "Kelvin"],
            inupt: "",
            result: "",
            base: "",
            convertTo: ""
        };
    }

    handleSelect = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        },
            this.calculate
        );
    };

    handleInput = (event) => {
        console.log(event.target.value);
        this.setState({
            input: event.target.value,
        },
            this.calculate
        );
    }

    calculate = () => {
        if (this.state.base === "Celsius" && this.state.convertTo === "Fahrenheit") {
            const result = (this.state.input * 9 / 5) + 32;
            this.setState({
                result
            });
        }

        if (this.state.base === "Celsius" && this.state.convertTo === "Kelvin") {
            const result = parseFloat(this.state.input) + 273.15;
            this.setState({
                result
            });
        }

        if (this.state.base === "Fahrenheit" && this.state.convertTo === "Celsius") {
            const result = parseFloat(this.state.input - 32) * 5 / 9;
            this.setState({
                result
            });
        }

        if (this.state.base === "Fahrenheit" && this.state.convertTo === "Kelvin") {
            const result = parseFloat(this.state.input - 32) * 5 / 9 + 273.15;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kelvin" && this.state.convertTo === "Celsius") {
            const result = parseFloat(this.state.input) - 273.15;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kelvin" && this.state.convertTo === "Fahrenheit") {
            const result = Math.round(parseFloat(this.state.input - 273.15) * 9 / 5 + 32).toFixed(2);
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
                        type="text" id="input" />
                    <span> </span>
                    <input value={result}
                        onChange={this.handleInput}
                        type="text" id="result"
                        disabled={true} /><br />
                    <select name="base"
                        value={base} onChange={this.handleSelect} id="inputType">
                        {converters.map(convert =>
                            <option key={convert} value={convert}> {convert} </option>
                        )}
                    </select>
                    <span> </span>
                    <select name="convertTo"
                        value={convertTo} onChange={this.handleSelect} id="resultType">
                        {converters.map(convert =>
                            <option key={convert} value={convert}> {convert} </option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}
export default TemperatureQuantity;
