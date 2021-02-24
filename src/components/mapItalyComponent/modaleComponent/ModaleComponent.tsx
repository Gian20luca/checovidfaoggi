import React, { useEffect } from 'react';
import './ModaleComponent.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDataRegions } from '../../../RTK/slices/dataRegionsSlice';
import { getOpenDetails } from '../../../RTK/slices/openDetailsSlice';
import { applicaSeparatore } from '../../../core/functions/applicaSeparatore';


export const ModaleComponent = (props: any) => {
    const _ = require("lodash");
    const DataRegions = useSelector((state: any) => state.dataRegions.dataRegions)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataRegions());
    }, []);

    const CloseDetails = () => {
        const closeModalAnimation = document.getElementById('modale');
        closeModalAnimation?.classList.remove('animate__bounceInLeft');
        closeModalAnimation?.classList.add('animate__bounceOutRight');
        dispatch(getOpenDetails(''));
    };

    return (
        <div>
            {props.data &&

                DataRegions.map((item: any) => {
                    console.log(props.data)
                    if (item.id === props.data) {
                        return (
                            <div key={item.id} className='card text-white ' style={{ backgroundColor: props.colors }}>

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
    );
}