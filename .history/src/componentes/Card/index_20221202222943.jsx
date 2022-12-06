import './style.css';

export default function Card(props) {
    return (
      <div id="card" className={ props.ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>
        <p className={ props.ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>{props.data}</p>
        <h4>{props.titulo}</h4>
        <p className={ props.ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>{props.empresa}</p>
        <p>{props.paragrafo}</p>
    </div>
   );
  }