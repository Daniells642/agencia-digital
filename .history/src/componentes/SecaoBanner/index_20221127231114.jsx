import './style.css';

export default function SecaoBanner(props) {
    return (
            <section id='secaoBanner' className={props.ehTemaEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}>

              <div id='imagemFundo' className="imagem-banner"> </div>
            
              <div className="texto-secao-banner">
                  <p>BRANDING / UI / UX / TECNOLOGIA</p>
                  <h1>Agência de Branding</h1>
                  <span>e design digital</span>
              </div>

            </section>
    );
  }