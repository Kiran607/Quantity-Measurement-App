import React from 'react';
import '../services/quantityMeasurement.css';

class QuantityMeasurement extends React.Component{
    render(){
        return(
            <div className="quantityForm">
                <label htmlFor="text" id="text"><h2>Quanment</h2></label>
                <div className="rectangle">
                <h1>Welcome to Quantity Measurement</h1>
                </div>
            </div>
        );
    }
} 
export default QuantityMeasurement;