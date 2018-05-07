// React
import React from 'react';
// Style
import Style from '../styles/sideBar.style';
import { Row, Col } from 'reactstrap';
import { Slider } from 'react-burgers';
import { Profil } from '../components/profil.component';
import Shopping from '../img/shopping-basket.png'
import Restauration from '../img/restauration.png'
import Coursier from '../img/coursier.png'
import Support from '../img/aide.png'
import Off from '../img/off.png'
import Profile from '../img/profil.png'


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
		style= { Style.sideBarStyle } 
		className="text-center pagination-centered"> 
		<Row>
			<Col
			md = {this.state.toggle ? '12' : '12'}  
			style={{marginLeft:8,}}
			>
			 <Slider
			 color='#fff'
			 width={30}
			 lineHeight={3}
			 lineSpacing={5}
			 onClick={this.eventHandler} className={this.state.toggle ? 'BurgerActive BurgerSlider float-right' : 'text-center'}
			 />

			 </Col>
		</Row>
			<Row>
			<Col 
			md={ this.state.toggle ? '3' : '3'}
			className={this.state.toggle ? '' : 'text-center pagination-centered'}>
			<button style={this.state.toggle ? {backgroundColor: 'transparent',border:0,marginLeft:50,marginBottom:40} : {backgroundColor: 'transparent',border:0,marginLeft:25}}

			>
		    <img 
		    src={Profile} 
		    style={this.state.toggle ? {width:50,height:50,cursor:'pointer',borderRadius:50,} : {width:50,height:50,cursor:'pointer',borderRadius:50,}}
		    />
		     </button>
		     </Col>
		     <Col
				md = "9"
				style={{cursor:'pointer'}}
				onClick={()=>{console.log('ok')}}
				className={this.state.toggle ? '' : 'd-md-none'}
				>
				<p style={{fontSize:9,color:'white',lineHeight:1.2,}}> <span style={{marginRight:70}}>Adresse de livraison :</span> 
				<br/><span style={{marginLeft:40}}><a> <u>1 avenue de grenoble,Aulnay sous bois, 93600</u></a> </span></p>
				
				</Col>
		     </Row>
			<Row>
				<Col 
				className={this.state.toggle ? '' : 'd-md-none'}
				md="12"
				>
				<h5 
				style={{color:'white',}} 
				className={this.state.toggle ? '' : 'invisible'}> Nos agents sont à vos services</h5>
				</Col>
			</Row>
			<Row>
			<Col 
			md={ this.state.toggle ? '3' : '3'}
			className={this.state.toggle ? '' : 'text-center pagination-centered'}>
			<button style={this.state.toggle ? {backgroundColor: 'transparent',border:0,marginLeft:50,marginTop:20} : {backgroundColor: 'transparent',border:0,marginLeft:25}}

			>
		    <img 
		    src={Shopping} 
		    style={this.state.toggle ? {width:50,height:50,cursor:'pointer',borderRadius:50,} : {width:50,height:50,cursor:'pointer',borderRadius:50,}}
		    />
		     </button>
		     </Col>
		     <Col
				md = "9"
				style={{cursor:'pointer',marginTop:30,}}
				onClick={()=>{console.log('ok')}}
				className={this.state.toggle ? '' : 'd-md-none'}
				>
				<span style={{fontSize:16,color:'white'}}> Livraison sur mesure </span>
				
				</Col>
		     </Row>
			<Row>
			<Col 
			md={ this.state.toggle ? '3' : '3'}
			className={this.state.toggle ? '' : 'text-center pagination-centered'}>
			<button style={this.state.toggle ? {backgroundColor: 'transparent',border:0,marginLeft:50,marginTop:10} : {backgroundColor: 'transparent',border:0,marginLeft:25,marginTop:5}}>
		    <img 
		    src={Restauration} 
		    style={{width:50,height:50,cursor:'pointer',borderRadius:50,}}
		    />
		     </button>
		     </Col>
		     <Col
				md = "9"
				style={{cursor:'pointer',marginTop:20,}}
				onClick={()=>{console.log('ok')}}
				className={this.state.toggle ? '' : 'd-md-none'}
				>
				<span style={{fontSize:16,color:'white',marginRight:60}}> Restauration </span>
				
				</Col>
		     </Row>
		     <Row>
			<Col 
			md={ this.state.toggle ? '3' : '3'}
			className={this.state.toggle ? '' : 'text-center pagination-centered'}>
			<button style={this.state.toggle ? {backgroundColor: 'transparent',border:0,marginLeft:50} : {backgroundColor: 'transparent',border:0,marginLeft:25}}>
		    <img 
		    src={Coursier} 
		    style={{width:50,height:50,cursor:'pointer',borderRadius:50,marginTop:10,}}
		    />
		     </button>
		     </Col>
		     <Col
				md = "9"
				style={{cursor:'pointer',marginTop:25,}}
				onClick={()=>{console.log('ok')}}
				className={this.state.toggle ? '' : 'd-md-none'}
				>
				<span style={{fontSize:16,color:'white',marginRight:90}}> Coursier </span>
				
				</Col>
		     </Row>
		     <Row style={{marginTop:370,}}>
			<Col 
			md={ this.state.toggle ? '3' : '3'}
			className={this.state.toggle ? '' : 'text-center pagination-centered'}>
			<button style={this.state.toggle ? {backgroundColor: 'transparent',border:0,marginLeft:50} : {backgroundColor: 'transparent',border:0,marginLeft:25}}>
		    <img 
		    src={Support} 
		    style={{width:30,height:30,cursor:'pointer',borderRadius:50,marginTop:10,}}
		    />
		     </button>
		     </Col>
		     <Col
				md = "9"
				style={{cursor:'pointer',marginTop:10,}}
				onClick={()=>{console.log('ok')}}
				className={this.state.toggle ? '' : 'd-md-none'}
				>
				<span style={{fontSize:16,color:'white',marginRight:90}}> Support </span>
				
				</Col>
		     </Row>

		<Row>
			<Col 
			md={ this.state.toggle ? '3' : '3'}
			className={this.state.toggle ? '' : 'text-center pagination-centered'}>
			<button style={this.state.toggle ? {backgroundColor: 'transparent',border:0,marginLeft:50} : {backgroundColor: 'transparent',border:0,marginLeft:25}}>
		    <img 
		    src={Off} 
		    style={{width:35,height:35,cursor:'pointer',borderRadius:50,marginTop:10,}}
		    />
		     </button>
		     </Col>
		     <Col
				md = "9"
				style={{cursor:'pointer',marginTop:13,}}
				onClick={()=>{console.log('ok')}}
				className={this.state.toggle ? '' : 'd-md-none'}
				>
				<span style={{fontSize:16,color:'white',marginRight:90}}> Déconnexion </span>
				
				</Col>
		     </Row>




	</Col>
    
    );
  }
}
export default sideBar;

