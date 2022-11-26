import './style.css';

export default function Rodape() {
    return (
      <div>
            <section id="rodape" className="limitar-secao">
                <img className="img-logo" src="assets/logo.png" alt="" title=""  />
                <p>
                Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.
                </p>
                <div className='icones'>
                  <img src="assets/facebook.png" alt="ícone" title="ícone facebook"  />
                  <img src="assets/twitter.png" alt="ícone" title="ícone twitter"  />
                  <img src="assets/linkedin.png" alt="ícone" title=" ícone linkedin"  />
                  <img src="assets/dribbler.png" alt="logo" title="logo da agência digital"  />
                  <img src="assets/behance.png" alt="ícone" title="ícone behance "  />
                  <img src="assets/google-plus.png" alt="ícone" title="ícone google-plus"  />
                </div>
                <p>
                Copyright 2022 Daniel Lima Sousa
                </p>
            </section>
  
      </div>
    );
  }