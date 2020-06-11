import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuantityMeasurement from './components/QuantityMeasurement';
import '../src/App.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <QuantityMeasurement />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();