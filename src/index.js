import React, { Component } from 'react';
import Shipping from './views/shipping';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  render() {
    return (
    	
 
      <Shipping/>

    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
