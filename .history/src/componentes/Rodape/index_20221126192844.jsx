import './style.css';
import Logo from 'assets/logo.png';
import iconeFacebook from '../assets/facebook.png';
import iconeTwitter from './assets/twitter.png';
import iconeLinkedin from './assets/linkedin.png';
import iconeDribble from './assets/dribble.png';
import iconeBehance from './assets/behance.png';
import iconeGooglePlus from 'assets/google-plus.png';

export default function Rodape() {
    return (
      <div>
            <section id="rodape" className="limitar-secao">
                <img className="img-logo" src={Logo} alt="logomarca" title="logomarca"  />
                <p>
                Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.
                </p>
                <div className='icones'>
                  <img src={iconeFacebook} alt="ícone" title="ícone facebook"  />
                  <img src={iconeTwitter} alt="ícone" title="ícone twitter"  />
                  <img src={iconeLinkedin} alt="ícone" title=" ícone linkedin"  />
                  <img src={iconeDribble} alt="ícone" title="ícone dribble"  />
                  <img src={iconeBehance} alt="ícone" title="ícone behance "  />
                  <img src={iconeGooglePlus} alt="ícone" title="ícone google-plus"  />
                </div>
                <p>Copyright 2022 <span>Daniel Lima Sousa</span></p>
            </section>
  
      </div>
    );
  }