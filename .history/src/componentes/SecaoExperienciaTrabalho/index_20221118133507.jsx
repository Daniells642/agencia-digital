import Card from '../Card';
import './style.css';

export default function SecaoExperienciaTrabalho() {
    return (
      <section id='secao-experiencia' className="secao-modo-claro">
            <div id='container-texto' className="container-texto-modo-claro">
                <h1>
                Experiências De Trabalho
                </h1>
                <p>
                Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            < Card/>
  
      </section>
    );
  }