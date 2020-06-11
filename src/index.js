import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuantityMeasurement from './components/QuantityMeasurement';
import '../src/App.css';
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <QuantityMeasurement />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();