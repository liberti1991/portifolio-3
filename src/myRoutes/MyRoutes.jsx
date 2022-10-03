import { Routes, Route } from "react-router-dom";

import { Home } from "../componentes/pages/Home";
import { About } from "../componentes/pages/About";
import { Projects } from "../componentes/pages/Projects";
import { GitHub } from "../componentes/pages/GitHub";
import { Contact } from "../componentes/pages/Contact";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="sobre" element={<About />} />
      <Route path="projetos" element={<Projects />} />
      <Route path="github" element={<GitHub />} />
      <Route path="contato" element={<Contact />} />
    </Routes>
  );
};
