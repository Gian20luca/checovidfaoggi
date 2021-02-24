import React, { useEffect, useState } from 'react';
import './MapItalyComponent.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ModaleComponent } from './modaleComponent/ModaleComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getOpenDetails } from '../../RTK/slices/openDetailsSlice';
import { getColorsRegions } from '../../RTK/slices/colorsRegionsSlice';
import { getDataGeojson } from '../../RTK/slices/dataGeojsonSlice';

export const MapItalyComponent: React.FC = () => {

    const dispatch = useDispatch();
    const _ = require("lodash");

    const position: any = [42, 12.5];

    const openDetails: any = useSelector((state: any) => state.openDetails.openDetails);
    const colorsRegions: any = useSelector((state: any) => state.colorsRegions.colorsRegions);
    const dataGeojson: any = useSelector((state: any) => state.dataGeojson.dataGeojson);

    let larghezzaDocument = document.documentElement.clientWidth;

    useEffect(() => {
        dispatch(getColorsRegions());
        dispatch(getDataGeojson());
    }, []);


    //generazione colori
    const getColor = (colore: string) => {
        return colore === 'giallo' ? 'yellow' : colore === 'arancione' ? 'orange' : colore === 'rosso' ? 'red' : 'white';
    }

    const colorBGdetails = () => {
        return colorsRegions[openDetails - 1]?.colore === 'giallo' ? '#ffda33' : colorsRegions[openDetails - 1]?.colore === 'arancione' ? '#FF8800' : colorsRegions[openDetails - 1]?.colore === 'rosso' ? '#ff4444' : 'white';
    }

    const style = (features: any) => {
        return {
            fillColor: getColor(colorsRegions[features.properties.reg_istat_code_num - 1]?.colore),
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
        dispatch(getOpenDetails(e.target.feature.properties.reg_istat_code_num));
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
    return (
        <div className='allContainer'>
            <div className="row">
                {!openDetails &&
                    <p className='clickP'>
                        Clicca su una regione per saperne di più.
            </p>}
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='containerMapGlobal animate_ animate__animated animate__bounceIn'>

                            <MapContainer id='map' center={position} zoom={responsiveMap(larghezzaDocument)} maxZoom={responsiveMap(larghezzaDocument)} minZoom={responsiveMap(larghezzaDocument)} maxBounds={position} dragging={false}>
                                {/* <TileLayer
                                attribution='Progetto di: Gianluca Bellafronte'
                                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                            /> */}
                                {dataGeojson.features && colorsRegions && <GeoJSON style={style} onEachFeature={onEachFeature} data={dataGeojson.features}></GeoJSON>}
                            </MapContainer>

                        </div>
                    </div>
                    {openDetails &&
                        <div className=' modale animate_ animate__animated animate__bounceInLeft' id='modale'>
                            <div>
                                {openDetails && <ModaleComponent data={openDetails} colors={colorBGdetails()} />}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
