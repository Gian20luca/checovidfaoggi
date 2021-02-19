import React, { useEffect } from 'react';
import './DataRegionsComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDataRegions } from '../../RTK/slices/dataRegionsSlice';

export const DataRegionsComponent = () => {
    const _ = require("lodash");
    const dataregionsselector = (state: any) => state.dataRegions;
    const dataregions = useSelector(dataregionsselector);

    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(getDataRegions()) }
    , []);

    // var allDataRegions: any = [];
    // dataregions['dataRegions'].map( (item: any) => {
    //     allDataRegions.push(item);
    // });

    //assegnazione id come il geojson
    dataregions['dataRegions'].map((item: any) => {
        item.denominazione_regione === "Piemonte" ? item.codice_regione = 1 :
            item.denominazione_regione === "Valle d'Aosta" ? item.codice_regione = 2 :
                item.denominazione_regione === "Lombardia" ? item.codice_regione = 3 :
                    item.denominazione_regione === "P.A. Trento" ? item.codice_regione = 4 :
                        item.denominazione_regione === "Veneto" ? item.codice_regione = 5 :
                            item.denominazione_regione === "Friuli Venezia Giulia" ? item.codice_regione = 6 :
                                item.denominazione_regione === "Liguria" ? item.codice_regione = 7 :
                                    item.denominazione_regione === "Emilia-Romagna" ? item.codice_regione = 8 :
                                        item.denominazione_regione === "Toscana" ? item.codice_regione = 9 :
                                            item.denominazione_regione === "Umbria" ? item.codice_regione = 10 :
                                                item.denominazione_regione === "Marche" ? item.codice_regione = 11 :
                                                    item.denominazione_regione === "Lazio" ? item.codice_regione = 12 :
                                                        item.denominazione_regione === "Abruzzo" ? item.codice_regione = 13 :
                                                            item.denominazione_regione === "Molise" ? item.codice_regione = 14 :
                                                                item.denominazione_regione === "Campania" ? item.codice_regione = 15 :
                                                                    item.denominazione_regione === "Puglia" ? item.codice_regione = 16 :
                                                                        item.denominazione_regione === "Basilicata" ? item.codice_regione = 17 :
                                                                            item.denominazione_regione === "Calabria" ? item.codice_regione = 18 :
                                                                                item.denominazione_regione === "Sicilia" ? item.codice_regione = 19 :
                                                                                    item.denominazione_regione === "Sardegna" ? item.codice_regione = 20 : item.codice_regione = 21
    })

    dataregions['dataRegions'] = _.orderBy(dataregions['dataRegions'], ["codice_regione"], ["asc"]);
    console.log(dataregions['dataRegions'])
    return (
        <div>
            { dataregions['dataRegions'] && <div>

                {dataregions['dataRegions'].map((item: any, index: number) => <div key={index}>
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
            </div>}
        </div>
    );

}
