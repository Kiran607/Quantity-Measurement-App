import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
} from 'reactstrap';
import volume from '../assests/volume.png'
import { Link,useHistory } from 'react-router-dom';
import quantity from '../assests/Measurement.json';

class VolumeMeasurement extends React.Component {

    // routeChange=()=>{
    //     let path='/volumeQuantity';
    //     let history=useHistory();
    //     history.push(path);
    // }

    render() {
        return (
            <div className="volumeCard">
                <Card>
                    {/* {quantity.map(post => {
                        return(
                            <Button key={post.type} >
                                <CardImg src={post.image} alt="Card image cap" className="volumeCardImg" />
                                <CardText>{post.type}</CardText>
                            </Button>
                        )
                    })} */}
                    <Link to="/volumeQuantity">
                        <Button className="volumeButton" onClick={this.routeChange}>
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