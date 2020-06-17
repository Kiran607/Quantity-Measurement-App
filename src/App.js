import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import QuantityMeasurement from './components/QuantityMeasurement';
import VolumeQuantity from './components/VolumeQuantity';
import TemperatureQuantity from './components/TemperatureQuantity';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/lengthQuantity" exact component={QuantityMeasurement} />
      <Route path="/volumeQuantity" exact component={VolumeQuantity}/>
      <Route path="/temperatureQuantity" exact component={TemperatureQuantity} />
      </Switch>
    </Router>
  );
}

export default App;
