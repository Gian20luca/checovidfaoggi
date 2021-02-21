import React, { useEffect, useState } from 'react';
import { MapItalyComponent } from '../mapItalyComponent/MapItalyComponent';
import './DataRegionsComponent.css';


export const DataRegionsComponent = () => {
    const _ = require("lodash");

    const [DataRegions, setDataRegions]: any = useState([]);
    useEffect((): any => {
        return fetch(
            "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"
        )
            .then((response) => response.json())
            .then((data) => setDataRegions(data));
    }
        , []);


    let allDataRegions: any = [];
    DataRegions.map((item: any) => {
        allDataRegions.push(item);
    })


    //assegnazione id come il geojson
    allDataRegions.map((item: any) => {
        item.denominazione_regione === "Piemonte" ? item.id = 1 :
            item.denominazione_regione === "Valle d'Aosta" ? item.id = 2 :
                item.denominazione_regione === "Lombardia" ? item.id = 3 :
                    item.denominazione_regione === "P.A. Trento" ? item.id = 4 :
                        item.denominazione_regione === "Veneto" ? item.id = 5 :
                            item.denominazione_regione === "Friuli Venezia Giulia" ? item.id = 6 :
                                item.denominazione_regione === "Liguria" ? item.id = 7 :
                                    item.denominazione_regione === "Emilia-Romagna" ? item.id = 8 :
                                        item.denominazione_regione === "Toscana" ? item.id = 9 :
                                            item.denominazione_regione === "Umbria" ? item.id = 10 :
                                                item.denominazione_regione === "Marche" ? item.id = 11 :
                                                    item.denominazione_regione === "Lazio" ? item.id = 12 :
                                                        item.denominazione_regione === "Abruzzo" ? item.id = 13 :
                                                            item.denominazione_regione === "Molise" ? item.id = 14 :
                                                                item.denominazione_regione === "Campania" ? item.id = 15 :
                                                                    item.denominazione_regione === "Puglia" ? item.id = 16 :
                                                                        item.denominazione_regione === "Basilicata" ? item.id = 17 :
                                                                            item.denominazione_regione === "Calabria" ? item.id = 18 :
                                                                                item.denominazione_regione === "Sicilia" ? item.id = 19 :
                                                                                    item.denominazione_regione === "Sardegna" ? item.id = 20 : item.id = 21
    })


    allDataRegions = _.orderBy(allDataRegions, ["id"], ["asc"]);
    console.log(allDataRegions);

    return (
        <div>
            
            {/* { allDataRegions && <div>
                {allDataRegions.map((item: any) => <div key={item.id}>
                    <h1> {item.denominazione_regione}</h1>
                    <p> Deceduti: {item.deceduti}</p>
                    <p> Dimessi guariti: {item.dimessi_guariti}</p>
                    <p> Ingressi terapia intensiva: {item.ingressi_terapia_intensiva}</p>
                    <p> Isolamento domiciliare: {item.isolamento_domiciliare}</p>
                    <p> Nuovi positivi: {item.nuovi_positivi}</p>
                    <p> Ricoverati con sintomi: {item.ricoverati_con_sintomi}</p>
                    <p> Tamponi: {item.tamponi}</p>
                    <p> Tamponi test antigenico rapido: {item.tamponi_test_antigenico_rapido}</p>
                    <p> Tamponi test molecolare: {item.tamponi_test_molecolare}</p>
                    <p> Terapia intensiva: {item.terapia_intensiva}</p>
                    <p> Totale casi: {item.totale_casi}</p>
                    <p> Totale ospedalizzati: {item.totale_ospedalizzati}</p>
                    <p> Totale positivi: {item.totale_positivi}</p>
                    <p> Totale positivi test antigenico rapido: {item.totale_positivi_test_antigenico_rapido}</p>
                    <p> Totale positivi test molecolare: {item.totale_positivi_test_molecolare}</p>
                </div>)}
            </div>} */}
        </div>
    );
}
