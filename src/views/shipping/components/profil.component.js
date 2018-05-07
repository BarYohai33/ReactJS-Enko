// React
import React from 'react';
// Style
import Style from '../styles/profil.style';
import { Row, Col } from 'reactstrap';
// import imgProfil from '../img/profil.png';




export const Profil = props => (
	     	
			
		    <button 
		    style={Style.profilStyle}>
		    <img 
		    src="https://www.aussitot.fr/wp-content/uploads/2012/07/gplus-photoprofil-199x223.png" 
		    style={Style.profilStyleImg} 
		    />
		     </button>


	);

export default Profil;