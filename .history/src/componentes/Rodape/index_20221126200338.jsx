import './style.css';

import iconeTwitter from '../../assets/twitter.png';
import iconeLinkedin from '../../assets/linkedin.png';
import iconeDribble from '../../assets/dribble.png';
import iconeBehance from '../../assets/behance.png';
import iconeGooglePlus from '../../assets/google-plus.png';

export default function Rodape(props) {

  return(
    <footer className="rodape-modo-claro">
      <img src='assets/logo.png' alt="logomarca"/>
      <p className="paragrafo">
        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
      </p>
      <div className="iconesRodape">
        <img src='assets/facebook.png' alt="facebook"/>
        <img src={iconeTwitter} alt="twitter"/>
        <img src={iconeLinkedin} alt="linkedin"/>
        <img src={iconeDribble} alt="dribble"/>
        <img src={iconeBehance} alt="behance"/>
        <img src={iconeGooglePlus} alt="google plus"/>
      </div>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>nome do desenvolvedor</span></p>
      </div>
    </footer>
  )
}