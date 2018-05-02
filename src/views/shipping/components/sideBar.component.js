// React
import React from 'react';
// Style
import Style from '../styles/sideBar.style';
import { Row, Col } from 'reactstrap';
import { Slider } from 'react-burgers';
import { Profil } from '../components/profil.component';

class sideBar extends React.Component {
	constructor(props) {
        super(props);
    this.state = {toggle: true};
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    );
  }
  render () {

    return (
	<Col md = {this.state.toggle ? '3' : '1'}
		 xs = {this.state.toggle ? '8' : '3'}
		style= { Style.sideBarStyle } className="text-center pagination-centered"> 
		<Row>
			<Col
			md = {this.state.toggle ? '' : ''}  
			>
			 <Slider
			 color='#fff'
			 width={30}
			 lineHeight={3}
			 lineSpacing={5}
			 onClick={this.eventHandler} className={this.state.toggle ? 'BurgerActive BurgerSlider float-right' : ''}
			 />

			 </Col>
		</Row>

			<Col
			md={ this.state.toggle ? '3' : ''}
			className={this.state.toggle ? '' : 'text-center pagination-centered'}

			>
			<Profil

			/>
			</Col>
			<Col
			md = "9"
			>

			<span
			style={{color:'white',fontSize:10,}}
			className={this.state.toggle ? '' : 'invisible'}
			> 
			Adresse de livraison :
			</span> 
			<p className={this.state.toggle ? '' : 'invisible'}><a href="#" style={{color:'white'}}> <u>1 Avenue de grenoble aulnay sous bois 93600</u></a></p>
			
			</Col>
			<Row>
			<Col 
			md="12"
			>
			<br/>
			<h5 style={{color:'white',}} className={this.state.toggle ? '' : 'invisible'}> Nos agents sont à vos services</h5>
			</Col>
			</Row>

	</Col>
    
    );
  }
}
export default sideBar;

