import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import scale from '../assests/scale.png'

class LengthMeasurement extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="card">
                <Card>
                    <Button className="buttonLength">
                        <CardImg src={scale} alt="Card image cap" className="lengthCard" />
                        <CardBody>
                            <CardText>Length</CardText>
                        </CardBody>
                    </Button>
                </Card>
            </div>
        );
    }
}
export default LengthMeasurement;