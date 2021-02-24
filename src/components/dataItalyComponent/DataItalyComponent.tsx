import React, { useEffect } from 'react';
import './DataItalyComponent.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDataItaly } from '../../RTK/slices/dataItalySlice';
import { applicaSeparatore } from '../../core/functions/applicaSeparatore';

export const DataItalyComponent = () => {

    const dispatch = useDispatch();
    const dataItaly = useSelector((state: any) => state.dataItaly.dataItaly);

    useEffect(() => {
        dispatch(getDataItaly());
    }, []);

    console.log('andamento nazionale', dataItaly);

    return (
        <div className='animate_ animate__animated animate__bounceIn'>
            {dataItaly?.map((item: any, index: number) => {
                return (
                    <div className='tabData row' key={index}>
                        <div className='card col-md-2 text-white bg-warning'>
                            <p className='card-header'>ATTUALI POSITIVI</p>
                            <p className='card-body'> {applicaSeparatore(item.totale_positivi)}</p>
                        </div>
                        <div className='card col-md-2 text-white bg-success'>
                            <p className='card-header'>DIMESSI/GUARITI</p>
                            <p className='card-body'> {applicaSeparatore(item.dimessi_guariti)}</p>
                        </div>
                        <div className='card col-md-2 text-white bg-secondary'>
                            <p className='card-header'>DECEDUTI</p>
                            <p className='card-body'> {applicaSeparatore(item.deceduti)}</p>
                        </div>
                        <div className='card col-md-2 text-white bg-danger'>
                            <p className='card-header'>TOTALE CASI</p>
                            <p className='card-body'> {applicaSeparatore(item.totale_casi)}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
} 