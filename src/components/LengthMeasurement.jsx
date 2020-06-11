import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Button
  } from 'reactstrap';
  import scale from '../assests/scale.png'

class LengthMeasurement extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className="card">
            <Card>
              <CardImg src={scale} alt="Card image cap" />
              <CardBody>
                <CardText>Length</CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </div>

        );
    }
}
export default LengthMeasurement ;