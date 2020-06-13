import React from 'react';
import '../App.css';
import LengthMeasurement from './LengthMeasurement';
import TemperatureMeasurement from './TemperatureMeasurement';
import VolumeMeasurement from './VolumeMeasurement';
import { Container, Row, Col } from 'reactstrap';
import { switchCase } from '@babel/types';

class QuantityMeasurement extends React.Component {
    constructor(props){
        super(props);
       this.state={
        converters:["Meteres","Kilometere","Centimeteres","Millimetere","Micrometere","Mile","Foot","Inch"],
        inupt:"",
        result:"",
        base:"",
        convertTo:"",
    };
    }

  

    handleSelect=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        },
        this.calculate
        );
    };

    handleInput=(event)=>{
        console.log(event.target.value);
        this.setState({
            input:event.target.value,
            result:event.target.value/1000
        },
        this.calculate
        );
    }

    calculate=()=>{

        // switch(this.state.base && this.state.convertTo){
        //     case "Meteres" && "Kilometere":
        //         const result=this.state.inupt /1000;
        //         return result;
        //     default:
        //         alert("Not calculated");
        // }
        
    }

    render() {
        const {converters,input,result,base,convertTo}=this.state;
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
                        type="text" id="input"/>
                    <span> </span>
                    <input value={result} 
                        onChange={this.handleInput}
                        type="text" id="result" 
                        disabled={true} /><br/>
                    <select name="base" 
                        value={base} onChange={this.handleSelect} id="inputType">
                        {converters.map(convert=>
                            <option key={convert} value={convert}> {convert} </option>
                        )}                       
                    </select>
                    <span> </span>
                    <select name="convertTo" 
                        value={convertTo} onChange={this.handleSelect} id="resultType">
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
