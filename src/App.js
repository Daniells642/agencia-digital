import Card from "./componentes/Card";
import Rodape from "./componentes/Rodape";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";

function App() {
  return (
    <div>
      <Topo/>
      <SecaoBanner/>
      <SecaoExperienciaTrabalho/>
      <Card/>
      <Rodape/>
    </div>
  );
}

export default App;
