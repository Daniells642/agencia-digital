import Rodape from "./componentes/Rodape";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";

import "./App.css";

function App() {
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
