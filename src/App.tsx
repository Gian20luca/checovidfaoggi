import React from 'react';
import './App.css';
import { DataItalyComponent } from './components/dataItalyComponent/DataItalyComponent';
import { MapItalyComponent } from './components/mapItalyComponent/MapItalyComponent';
import { TableVacciniComponent } from './components/tableVacciniComponent/TableVacciniComponent';

function App() {

  return (
    <div className='container'>
      <h1 className="titlePage">Che covid fa oggi ?</h1>
          <DataItalyComponent />
          <MapItalyComponent />
        <TableVacciniComponent />
    </div>
  );
}

export default App;
