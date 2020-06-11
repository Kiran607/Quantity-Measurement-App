import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import volume from '../assests/volume.png'

class VolumeMeasurement extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="volumeCard">
                <Card>
                    <Button className="volumeButton">
                        <CardImg src={volume} alt="Card image cap" className="volumeCardImg" />
                        <CardBody>
                            <CardText>Volume</CardText>
                        </CardBody>
                    </Button>
                </Card>
            </div>
        );
    }
}
export default VolumeMeasurement;