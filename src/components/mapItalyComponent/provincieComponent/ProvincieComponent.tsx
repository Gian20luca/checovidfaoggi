import React, { useEffect } from 'react';
import './ProvincieComponent.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDataProvincie } from '../../../RTK/slices/dataProvincieSlice';
import { getOpenTableProvincie } from '../../../RTK/slices/openTableProvincie';
import { applicaSeparatore } from '../../../core/functions/applicaSeparatore';

export const ProvincieComponent = (props: any) => {

    const dispatch = useDispatch();

    const dataProvincie = useSelector((state: any) => state.dataProvincie.dataProvincie);
    const openTableProvincie = useSelector((state: any) => state.openTableProvincie.openTableProvincie);

    useEffect(() => {
        dispatch(getDataProvincie());
    }, [])

    const closeTableProvincie = (): any => {
        const closeTableProvincie = document.getElementById('tableProvincie');
        closeTableProvincie?.classList.remove('animate__bounceInDown');
        closeTableProvincie?.classList.add('animate__bounceOutUp');
        dispatch(getOpenTableProvincie(false))
    }

    return (
        <div>

            {openTableProvincie && <div className='containerProvincie'>
                <button className='btn' style={{ backgroundColor: props.colors }} onClick={closeTableProvincie}>Chiudi</button>
                <div className='animate_ animate__animated animate__bounceInDown' id='tableProvincie'>
                    <table className="table table-striped table-bordered table-hover table-responsive{-sm|-md|-lg|-xl}">
                        <thead className='text-white' style={{ backgroundColor: props.colors }}>
                            <tr>
                                <th scope="col">Provincia</th>
                                <th scope="col">Totale casi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataProvincie.map((item: any, index: number) => {
                                if (item.codice_regione === props.data) {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{item.denominazione_provincia}</th>
                                            <td>{applicaSeparatore(item.totale_casi)}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </div>
    );
}