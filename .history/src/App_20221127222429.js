import Rodape from "./componentes/Rodape";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import "./App.css";
import { useState } from "react";


function App() {

  const [ehTemaEscuro, setTemaEscuro] = useStateState(true)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <main>
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <SecaoBanner/>
      <SecaoExperienciaTrabalho/>
      <Rodape/>
    </main>
  );
}

export default App;
