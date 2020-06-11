import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import hot from '../assests/hot.png'

class TemperatureMeasurement extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="temperatureCard">
                <Card>
                    <button className="temperatureButton">
                        <CardImg src={hot} alt="Card image cap" className="hotCardImg" />
                        <CardBody>
                            <CardText>Temperature</CardText>
                        </CardBody>
                    </button>
                </Card>
            </div>
        );
    }
}
export default TemperatureMeasurement;