import React, { useEffect, useState } from 'react';
import './MapItalyComponent.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FetchData } from '../../service/fetchData';
import { applicaSeparatore } from '../../core/functions/applicaSeparatore';

export const MapItalyComponent: React.FC = () => {
    const position: any = [42, 12.5];
    const _ = require("lodash");
    const objectAssign = require('object-assign');
    let service = FetchData.getInstance();
    const [dataGeojson, setDataGeojson]: any = useState();
    const [colorsGeojson, setColorsGeojson]: any = useState([]);
    const [DataRegions, setDataRegions]: any = useState([]);
    const [openDetails, setOpenDetails]: any = useState('');
    const [colorBGDetails, setColorBGDetails]: any = useState('');

    let larghezzaDocument = document.documentElement.clientWidth;

    useEffect(() => {

        //chiamata api per dati geojson
        fetch('https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson')
            .then(response => response.json())
            .then(data => setDataGeojson(data));
        //chiamata api per i colori della regione
        fetch('https://raw.githubusercontent.com/imcatta/restrizioni_regionali_covid/main/dataset.json')
            .then(response => response.json())
            .then(data => setColorsGeojson(data));
        fetch(
            "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json"
        )
            .then((response) => response.json())
            .then((data) => setDataRegions(data));
    }, []);

    // console.log('GEOJSON',dataGeojson)
    // // console.log('MODALE',openDetails)

    //recupero dati di ogni regione
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
    console.log('DATI DELLE REGIONI', allDataRegions);
    /***************************************************************************************************************************************/

    //recupero data di ieri 
    var date = new Date();
    var gg, mm, aaaa;
    gg = (((date.getDate() - 1) > 9 ? '' : '0') + (date.getDate() - 1));
    mm = (((date.getMonth() + 1) > 9 ? '' : '0') + (date.getMonth() + 1)) + "-";
    aaaa = date.getFullYear() + "-";
    let totalDate = aaaa + mm + gg;

    //recupero regioni di ieri per i relativi colori
    var colors: any = [];
    colorsGeojson.map(async (item: any) => {
        if (item.data === totalDate) {
            await colors.push(item);
        }
    });
    //assegnazione id come il geojson
    colors.map((item: any) => {
        item.denominazione_regione === "Piemonte" ? item.id = 1 :
            item.denominazione_regione === "Valle d'Aosta" ? item.id = 2 :
                item.denominazione_regione === "Lombardia" ? item.id = 3 :
                    item.denominazione_regione === "Provincia autonoma Trento" ? item.id = 4 :
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
    //ordinamento per numero
    colors = _.orderBy(colors, ["id"], ["asc"]);
    //console.log('COLORI',colors)

    //generazione colori
    const getColor = (colore: string) => {
        return colore === 'giallo' ? 'yellow' : colore === 'arancione' ? 'orange' : colore === 'rosso' ? 'red' : 'white';
    }

    const colorBGdetails = () => {
        return colors[openDetails - 1]?.colore === 'giallo' ? '#ffda33' : colors[openDetails - 1]?.colore === 'arancione' ? '#FF8800' : colors[openDetails - 1]?.colore === 'rosso' ? '#ff4444' : 'white';
    }

    const style = (features: any) => {
        return {
            fillColor: getColor(colors[features.properties.reg_istat_code_num - 1]?.colore),
            fillOpacity: 0.75,
            opacity: 1,
            weight: 0.6,
            color: 'black',
        };
    };

    const highlightFeature = (e: any) => {
        const layer = e.target;
        layer.setStyle({
            weight: 1.2,
            color: 'black',
            fillOpacity: 1,
        });
    }

    const resetHighlight = (e: any) => {
        const layer = e.target;
        layer.setStyle({
            fillOpacity: 0.75,
            opacity: 1,
            weight: 0.6,
            color: 'black',
        });
    };

    const Details = (e: any) => {
        setOpenDetails(e.target.feature.properties.reg_istat_code_num);
    };
    const CloseDetails = () => {
        const closeModalAnimation = document.getElementById('modale');
        closeModalAnimation?.classList.remove('animate__bounceInLeft');
        closeModalAnimation?.classList.add('animate__bounceOutRight');
        setTimeout(() => { setOpenDetails('') }, 500);
    };

    const onEachFeature = (features: any, layer: any) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: Details
        })
        layer.bindTooltip(features.properties.reg_name);

    }

    const responsiveMap = (larghezza: number) => {
        if (larghezza < 415) {
            return 5
        } else {
            return 5.5
        }
    }

    return (<div>
        {/* {!openDetails &&
            <p className='clickP'>
                Clicka su una regione per saperne di più.
            </p>} */}
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='containerMapGlobal animate_ animate__animated animate__bounceIn'>

                        <MapContainer id='map' center={position} zoom={responsiveMap(larghezzaDocument)} maxZoom={responsiveMap(larghezzaDocument)} minZoom={responsiveMap(larghezzaDocument)} maxBounds={position} dragging={false}>
                            <TileLayer
                                attribution='Progetto di: Gianluca Bellafronte'
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                            />
                            {dataGeojson && colorsGeojson && <GeoJSON style={style} onEachFeature={onEachFeature} data={dataGeojson.features}></GeoJSON>}
                        </MapContainer>

                    </div>
                </div>
                {openDetails &&
                    <div className='col-md-6 modale animate_ animate__animated animate__bounceInLeft' id='modale'>

                        <div>

                            {openDetails &&

                                allDataRegions.map((item: any) => {
                                    console.log(openDetails)
                                    if (item.id === openDetails) {
                                        return (
                                            <div key={item.id} className='card text-white ' style={{ backgroundColor: colorBGdetails() }}>

                                                <div className="card-header">
                                                    <button type="button" className="close" onClick={CloseDetails}>x</button>
                                                    <h3> {item.denominazione_regione}</h3>
                                                </div>
                                                <div className="card-body">
                                                    <p> Deceduti: {applicaSeparatore(item.deceduti)}</p>
                                                    <p> Dimessi guariti: {applicaSeparatore(item.dimessi_guariti)}</p>
                                                    <p> Ingressi terapia intensiva: {applicaSeparatore(item.ingressi_terapia_intensiva)}</p>
                                                    <p> Isolamento domiciliare: {applicaSeparatore(item.isolamento_domiciliare)}</p>
                                                    <p> Nuovi positivi: {applicaSeparatore(item.nuovi_positivi)}</p>
                                                    <p> Ricoverati con sintomi: {applicaSeparatore(item.ricoverati_con_sintomi)}</p>
                                                    <p> Tamponi: {applicaSeparatore(item.tamponi)}</p>
                                                    <p> Tamponi test antigenico rapido: {applicaSeparatore(item.tamponi_test_antigenico_rapido)}</p>
                                                    <p> Tamponi test molecolare: {applicaSeparatore(item.tamponi_test_molecolare)}</p>
                                                    <p> Terapia intensiva: {applicaSeparatore(item.terapia_intensiva)}</p>
                                                    <p> Totale casi: {applicaSeparatore(item.totale_casi)}</p>
                                                    <p> Totale ospedalizzati: {applicaSeparatore(item.totale_ospedalizzati)}</p>
                                                    <p> Totale positivi: {applicaSeparatore(item.totale_positivi)}</p>
                                                    <p> Totale positivi test antigenico rapido: {applicaSeparatore(item.totale_positivi_test_antigenico_rapido)}</p>
                                                    <p> Totale positivi test molecolare: {applicaSeparatore(item.totale_positivi_test_molecolare)}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div>
                            {openDetails &&

                                (4 === openDetails) ?
                                <div className='card text-white' style={{ backgroundColor: colorBGdetails() }}>
                                    <div className="card-header">
                                        <h3> {allDataRegions[20].denominazione_regione}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p> Deceduti: {applicaSeparatore(allDataRegions[20].deceduti)}</p>
                                        <p> Dimessi guariti: {applicaSeparatore(allDataRegions[20].dimessi_guariti)}</p>
                                        <p> Ingressi terapia intensiva: {applicaSeparatore(allDataRegions[20].ingressi_terapia_intensiva)}</p>
                                        <p> Isolamento domiciliare: {applicaSeparatore(allDataRegions[20].isolamento_domiciliare)}</p>
                                        <p> Nuovi positivi: {applicaSeparatore(allDataRegions[20].nuovi_positivi)}</p>
                                        <p> Ricoverati con sintomi: {applicaSeparatore(allDataRegions[20].ricoverati_con_sintomi)}</p>
                                        <p> Tamponi: {applicaSeparatore(allDataRegions[20].tamponi)}</p>
                                        <p> Tamponi test antigenico rapido: {applicaSeparatore(allDataRegions[20].tamponi_test_antigenico_rapido)}</p>
                                        <p> Tamponi test molecolare: {applicaSeparatore(allDataRegions[20].tamponi_test_molecolare)}</p>
                                        <p> Terapia intensiva: {applicaSeparatore(allDataRegions[20].terapia_intensiva)}</p>
                                        <p> Totale casi: {applicaSeparatore(allDataRegions[20].totale_casi)}</p>
                                        <p> Totale ospedalizzati: {applicaSeparatore(allDataRegions[20].totale_ospedalizzati)}</p>
                                        <p> Totale positivi: {applicaSeparatore(allDataRegions[20].totale_positivi)}</p>
                                        <p> Totale positivi test antigenico rapido: {applicaSeparatore(allDataRegions[20].totale_positivi_test_antigenico_rapido)}</p>
                                        <p> Totale positivi test molecolare: {applicaSeparatore(allDataRegions[20].totale_positivi_test_molecolare)}</p>
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
    );
}
