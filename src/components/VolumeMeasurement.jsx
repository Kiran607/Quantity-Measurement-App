import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import volume from '../assests/volume.png'
import { Link } from 'react-router-dom';

// import VolumeQuantity from 'react-router-dom';

class VolumeMeasurement extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="volumeCard">
                <Card>
                    <Link to="/volumeQuantity">
                        <Button className="volumeButton">
                            <CardImg src={volume} alt="Card image cap" className="volumeCardImg" />
                            <CardBody>
                                <CardText id="volumeText">Volume</CardText>
                            </CardBody>
                        </Button>
                    </Link>
                </Card>
            </div>
        );
    }
}
export default VolumeMeasurement;