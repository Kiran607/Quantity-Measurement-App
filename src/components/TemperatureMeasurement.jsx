import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import hot from '../assests/hot.png';
import { Link } from 'react-router-dom';

class TemperatureMeasurement extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="temperatureCard">
                <Card>
                    <Link to="/temperatureQuantity">
                        <button className="temperatureButton">
                            <CardImg src={hot} alt="Card image cap" className="hotCardImg" />
                            <CardBody>
                                <CardText id="temperatureText">Temperature</CardText>
                            </CardBody>
                        </button>
                    </Link>
                </Card>
            </div>
        );
    }
}
export default TemperatureMeasurement;