import './style.css';

export default function Card(props) {
      props.ehTemaEscuro = {ehTemaEscuro}

    return (
      <div id="card" className={ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>
        <p className="primeiroParagrafo">{props.data}</p>
        <h4>{props.titulo}</h4>
        <p className="segundoParagrafo">{props.empresa}</p>
        <p>{props.paragrafo}</p>
    </div>
   );
  }