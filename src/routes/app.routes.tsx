import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Clientes from "../pages/clientes";
import Condominios from "../pages/condominios";
import OrdensServico from "../pages/ordensServico";
import Projetos from "../pages/projetos";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/condominios" element={<Condominios />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/ordensServico" element={<OrdensServico />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path={"*"} element={<Navigate to={"/condominios"} />} />
    </Routes>
  );
};

export default AppRoutes;
