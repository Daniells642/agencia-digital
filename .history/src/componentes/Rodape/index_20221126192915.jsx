import './style.css';
import Logo from './assets/logo.png';
import iconeFacebook from '../assets/facebook.png';


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
               
                </div>
                <p>Copyright 2022 <span>Daniel Lima Sousa</span></p>
            </section>
  
      </div>
    );
  }