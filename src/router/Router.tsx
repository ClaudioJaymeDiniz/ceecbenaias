import { Routes, Route } from "react-router";
import Capoeira from "../pages/capoeira";
import Funcional from "../pages/funcional";
import Galeria from "../pages/galeria";
import Home from "../pages/home";
import Loja from "../pages/loja";
import Sede from "../pages/sede";

export default function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capoeira" element={<Capoeira />} />
        <Route path="/funcional-capoeira" element={<Funcional />} />
        <Route path="/galeria" element={<Galeria  />} />
        <Route path="/nossa-sede" element={<Sede  />} />
        <Route path="/loja" element={<Loja  />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} /> {/* Rota para página 404 */}
      </Routes>
    );
  };