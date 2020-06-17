import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import scale from '../assests/scale.png'
import { Link } from 'react-router-dom';

class LengthMeasurement extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <Card>
                    <Link to="/lengthQuantity">
                        <Button className="buttonLength">
                            <CardImg src={scale} alt="Card image cap" className="lengthCard" />
                            <CardBody>
                                <CardText id="lengthText">Length</CardText>
                            </CardBody>
                        </Button>
                    </Link>
                </Card>
            </div>
        );
    }
}
export default LengthMeasurement;