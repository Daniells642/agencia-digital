import './style.css';
import Logo from 'assets/logo.png';


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