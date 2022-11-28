import './style.css';
import Logo from '../../assets/logo.png';
import iconeSol from '../../assets/sun.png';
import iconeLua from '../../assets/moon.png';

export default function Topo(props) {
    return (
      <div className="container-topo-modo-claro">
            <img className="logo" src="assets/logo.png" alt="Logotipo"/>
            <button className="botao-modo-claro">
                <img className="btn-icone-modo-claro" src="assets/moon.png" alt="ícone para alterar o tema"/>
            </button>
      </div>
    );
  }
  
