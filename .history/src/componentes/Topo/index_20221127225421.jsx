import './style.css';
import Logo from '../../assets/logo.png';
import iconeSol from '../../assets/sun.png';
import iconeLua from '../../assets/moon.png';

export default function Topo(props) {
    return (
      <header className={props.ehTemaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
            <img className="logo" src={Logo} alt="Logotipo"/>
            <button onClick={props.alterarTema} className={props.ehTemaEscuro ? 'botao-modo-escuro' : 'botao-modo-claro'}>
                <img className="btn-icone" src={props.ehTemaEscuro ? iconeSol : iconeLua} alt="ícone para alterar o tema"/>
            </button>
      </header>
    );
  }
  
