import React from 'react';
import './App.css';
import { DataRegionsComponent } from './components/dataRegionsComponent/DataRegionsComponent';
import { MapItalyComponent } from './components/mapItalyComponent/MapItalyComponent';

function App() {

  return (
    <div>
      <MapItalyComponent />
      <DataRegionsComponent />
    </div>
  );
}

export default App;
