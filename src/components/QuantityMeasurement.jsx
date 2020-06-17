import React from 'react';
import '../App.css';
import LengthMeasurement from './LengthMeasurement';
import TemperatureMeasurement from './TemperatureMeasurement';
import VolumeMeasurement from './VolumeMeasurement';
import { Container, Row, Col } from 'reactstrap';

class QuantityMeasurement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            converters: ["Metres", "Kilometre", "Centimetres", "Milimetre", "Micrometre", "Mile", "Foot", "Inch"],
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

            if (this.state.base === "Metres" && this.state.convertTo === "Kilometre") {
            const result = this.state.input / 1000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Metres" && this.state.convertTo === "Centimetres") {
            const result = this.state.input / 0.01;
            this.setState({
                result
            });
        }

        if (this.state.base === "Metres" && this.state.convertTo === "Foot") {
            const result = this.state.input * 3.2808;
            this.setState({
                result
            });
        }

        if (this.state.base === "Metres" && this.state.convertTo === "Milimetre") {
            const result = this.state.input * 1000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Metres" && this.state.convertTo === "Micrometre") {
            const result = this.state.input * 1000000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Metres" && this.state.convertTo === "Mile") {
            const result = this.state.input * 0.00062137;
            this.setState({
                result
            });
        }

        if (this.state.base === "Metres" && this.state.convertTo === "Inch") {
            const result = this.state.input * 39.370;
            this.setState({
                result
            });
        }

        //Kilometre to other components

        if (this.state.base === "Kilometre" && this.state.convertTo === "Metres") {
            const result = this.state.input * 1000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kilometre" && this.state.convertTo === "Centimetres") {
            const result = this.state.input * 100000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kilometre" && this.state.convertTo === "Milimetre") {
            const result = this.state.input * 1000000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kilometre" && this.state.convertTo === "Micrometre") {
            const result = this.state.input * 1000000000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kilometre" && this.state.convertTo === "Mile") {
            const result = this.state.input * 0.62137;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kilometre" && this.state.convertTo === "Foot") {
            const result = this.state.input * 3280.8;
            this.setState({
                result
            });
        }

        if (this.state.base === "Kilometre" && this.state.convertTo === "Inch") {
            const result = this.state.input * 39370;
            this.setState({
                result
            });
        }

        //Centimetre to other measurement

        if (this.state.base === "Centimetres" && this.state.convertTo === "Metres") {
            const result = this.state.input / 100;
            this.setState({
                result
            });
        }

        if (this.state.base === "Centimetres" && this.state.convertTo === "Kilometre") {
            const result = this.state.input / 100000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Centimetres" && this.state.convertTo === "Milimetre") {
            const result = this.state.input * 10;
            this.setState({
                result
            });
        }

        if (this.state.base === "Centimetres" && this.state.convertTo === "Micrometre") {
            const result = this.state.input * 10000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Centimetres" && this.state.convertTo === "Mile") {
            const result = this.state.input * 0.0000062137;
            this.setState({
                result
            });
        }

        if (this.state.base === "Centimetres" && this.state.convertTo === "Foot") {
            const result = this.state.input * 0.032808;
            this.setState({
                result
            });
        }

        if (this.state.base === "Centimetres" && this.state.convertTo === "Inch") {
            const result = this.state.input * 0.39370;
            this.setState({
                result
            });
        }

        //MilliMetres to other measurement

        if (this.state.base === "Milimetre" && this.state.convertTo === "Metres") {
            const result = this.state.input / 1000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Milimetre" && this.state.convertTo === "Kilometre") {
            const result = this.state.input / 1000000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Milimetre" && this.state.convertTo === "Centimetres") {
            const result = this.state.input / 10;
            this.setState({
                result
            });
        }

        if (this.state.base === "Milimetre" && this.state.convertTo === "Micrometre") {
            const result = this.state.input * 1000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Milimetre" && this.state.convertTo === "Mile") {
            const result = this.state.input * 6.2137119223733E-7;
            this.setState({
                result
            });
        }

        if (this.state.base === "Milimetre" && this.state.convertTo === "Foot") {
            const result = this.state.input / 305;
            this.setState({
                result
            });
        }

        if (this.state.base === "Milimetre" && this.state.convertTo === "Inch") {
            const result = this.state.input / 25.4;
            this.setState({
                result
            });
        }

        //Micrometre to other measurements

        if (this.state.base === "Micrometre" && this.state.convertTo === "Metres") {
            const result = this.state.input / 1000000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Micrometre" && this.state.convertTo === "Kilometre") {
            const result = this.state.input / 1000000000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Micrometre" && this.state.convertTo === "Centimetres") {
            const result = this.state.input / 10000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Micrometre" && this.state.convertTo === "Milimetre") {
            const result = this.state.input / 1000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Micrometre" && this.state.convertTo === "Mile") {
            const result = this.state.input / 1609344000;
            this.setState({
                result
            });
        }

        if (this.state.base === "Micrometre" && this.state.convertTo === "Foot") {
            const result = this.state.input / 304800;
            this.setState({
                result
            });
        }

        if (this.state.base === "Micrometre" && this.state.convertTo === "Inch") {
            const result = this.state.input / 25400;
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
                {/* <FromToComponent /> */}
            </div>
        );
    }
}
export default QuantityMeasurement;
