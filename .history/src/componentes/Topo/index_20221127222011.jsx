import './style.css';
import Logo from '../../assets/logo.png';
import iconeSol from '../../assets/sun.png';
import iconeLua from '../../assets/moon.png';

export default function Topo(props) {
    return (
      <header className={props.ehTemaEscuro ? "container-topo-modo-escuro" : "container-topo-modo-claro"}>
            <img className="logo" src={Logo} alt="Logotipo"/>
            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? 'btn-icone-modo-escuro' : 'btn-icone-modo-claro'}>
                <img className="btn-icone-modo-claro" src="assets/moon.png" alt="ícone para alterar o tema"/>
            </button>
      </header>
    );
  }
  
