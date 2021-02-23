import React, { useEffect } from 'react';
import './App.css';
import { ConsigliComponent } from './components/consigliComponent/ConsigliComponent';
import { DataItalyComponent } from './components/dataItalyComponent/DataItalyComponent';
import { MapItalyComponent } from './components/mapItalyComponent/MapItalyComponent';
import { TableVacciniComponent } from './components/tableVacciniComponent/TableVacciniComponent';
import { EffectComponent } from './core/components/effectComponent/EffectComponent';
import { FooterComponent } from './core/components/footerComponent/FooterComponent';

function App() {



  return (
    <div className='globalContainer'>

      <div className='container'>
        <h1 className="titlePage">Che covid fa oggi ?</h1>
        <DataItalyComponent />
        <div className="space"></div>
        <ConsigliComponent />
        <MapItalyComponent />
        {/* <EffectComponent /> */}
        <TableVacciniComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
