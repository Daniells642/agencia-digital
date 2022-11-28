import Rodape from "./componentes/Rodape";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import "./App.css";


function App() {

  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }
  
  return (
    <main>
      <Topo/>
      <SecaoBanner/>
      <SecaoExperienciaTrabalho/>
      <Rodape/>
    </main>
  );
}

export default App;
