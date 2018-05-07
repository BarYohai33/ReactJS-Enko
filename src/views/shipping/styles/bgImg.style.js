import Background from '../img/page_livraison1.png';
import Background1 from '../img/route.png';

const bgImgStyle = {
  background: `url(${Background})`+','+`url(${Background1})`,
  backgroundRepeat: 'no-repeat',
  // maxWidth:'100%',
  // maxHeight:'100%',
  height:'100vh',
  backgroundPosition: 'bottom',
}



export default { bgImgStyle };