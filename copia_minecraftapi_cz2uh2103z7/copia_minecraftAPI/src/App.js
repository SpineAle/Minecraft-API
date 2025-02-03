import React, {useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blocchi from "./Blocchi";
import DescrizioneBlocchi from './DescrizioneBlocchi';
import Errore from './Errore';
import Informazioni from "./Informazioni";
import DescrizioneBlocchiTabella from './DescrizioneBlocchiTabella';
import SpiegazioneFiltri from './SpiegazioneFiltri';
import BlocchiPreferiti from './BlocchiPreferiti';


const App = () => {
  const [preferiti, setPreferiti] = useState([]);

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Blocchi />} path='/' />
          <Route element={<DescrizioneBlocchi />} path='/descrizioneblocchi' />
          <Route element={<Informazioni />} path='/informazioni' />
          <Route element={<DescrizioneBlocchiTabella />} path='/descrizioneblocchitabella' />
          <Route element={<SpiegazioneFiltri />} path='/spiegazionefiltri' />
          <Route element={<BlocchiPreferiti />} path='/blocchipreferiti' />
          <Route element={<Errore />} path='*' />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
