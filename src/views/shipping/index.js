// React
import React, { Component } from 'react';
import BgImg from './components/bgImg.component';
import SideBar from './components/sideBar.component';
import { Container, Row, Col } from 'reactstrap';



class Shipping extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(

			
		<Row>
        
          	<SideBar />
          	 
          	<BgImg /> 

        </Row>

      
			
			
			
		);
	}

}

export default Shipping;