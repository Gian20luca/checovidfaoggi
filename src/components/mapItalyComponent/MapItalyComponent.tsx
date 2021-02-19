import React, { useEffect, useState } from 'react';
import './MapItalyComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FetchData } from '../../service/fetchData';

export const MapItalyComponent: React.FC = () => {
    const position: any = [42, 13];
    const _ = require("lodash");
    let service = FetchData.getInstance();
    const [dataGeojson, setDataGeojson]: any = useState();
    const [colorsGeojson, setColorsGeojson]: any = useState([]);
    const [openDetails, setOpenDetails]: any = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        //chiamata api per dati geojson
        fetch('https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson')
            .then(response => response.json())
            .then(data => setDataGeojson(data));
        //chiamata api per i colori della regione
        fetch('https://raw.githubusercontent.com/imcatta/restrizioni_regionali_covid/main/dataset.json')
            .then(response => response.json())
            .then(data => setColorsGeojson(data));
    }, []);
    console.log(dataGeojson)
    console.log(openDetails)

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
console.log(colors)
    //generazione colori
    const getColor = (colore: string) => {
        return colore === 'giallo' ? 'yellow' : colore === 'arancione' ? 'orange' : colore === 'rosso' ? 'red' : 'white';
    }



    const style = (features: any) => {
        return {
            fillColor: getColor(colors[features.properties.reg_istat_code_num - 1].colore),
            fillOpacity: 0.75,
            opacity: 1,
            weight: 0.6,
            color: 'black',
        }
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
        setOpenDetails(true)
    };
    const CloseDetails = () => {
        setOpenDetails(false)
    };

    const onEachFeature = (features: any, layer: any) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: Details
        })
        layer.bindTooltip(features.properties.reg_name);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='containerMapGlobal'>
                        <MapContainer id='map' center={position} zoom={5} maxZoom={5} minZoom={5} maxBounds={position} dragging={false}>
                            <TileLayer
                                attribution='Progetto di: Gianluca Bellafronte'
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                            />
                            {dataGeojson && colorsGeojson && <GeoJSON style={style} onEachFeature={onEachFeature} data={dataGeojson.features}></GeoJSON>}
                        </MapContainer>
                    </div>
                </div>
                <div className='col-md-6'>
                    
                <button type="button" className="close" onClick={CloseDetails}>x</button>
                </div>
            </div>
        </div>
    );

}
