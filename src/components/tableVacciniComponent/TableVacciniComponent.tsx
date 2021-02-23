import React, { useEffect } from 'react';
import './TableVacciniComponent.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVaccini } from '../../RTK/slices/dataVacciniSlice';
import { applicaSeparatore } from '../../core/functions/applicaSeparatore';

export const TableVacciniComponent = () => {

    const dispatch = useDispatch();

    const dataVacciniSelector = (state: any) => state.dataVaccini['dataVaccini'];
    const dataVaccini = useSelector(dataVacciniSelector);

    useEffect(() => {
        dispatch(getVaccini());
    }, []);


    return (
        <div className='containerTable  animate_ animate__animated animate__bounceIn'>
            <p className="titleTable">Dati Vaccinazioni del {dataVaccini[0]?.ultimo_aggiornamento.substring(0,10)} :</p>
            <div className="tableVaccini">

                <table className="table table-striped table-bordered table-hover table-responsive{-sm|-md|-lg|-xl}">
                
                    <thead className='text-white bg-primary'>
                        <tr>
                            <th scope="col">Fascia anagrafica</th>
                            <th scope="col">Operatori sanitari sociosanitari</th>
                            <th scope="col">Ospiti rsa</th>
                            <th scope="col">Over80</th>
                            <th scope="col">Personale non sanitario</th>
                            <th scope="col">Prima dose</th>
                            <th scope="col">Seconda dose</th>
                            <th scope="col">Sesso femminile</th>
                            <th scope="col">Sesso maschile</th>
                            <th scope="col">Totale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataVaccini?.map((item: any) => {
                            return (
                                <tr key={item.index}>
                                    <th scope="row">{item.fascia_anagrafica}</th>
                                    <td>{applicaSeparatore(item.categoria_operatori_sanitari_sociosanitari)}</td>
                                    <td>{applicaSeparatore(item.categoria_ospiti_rsa)}</td>
                                    <td>{applicaSeparatore(item.categoria_over80)}</td>
                                    <td>{applicaSeparatore(item.categoria_personale_non_sanitario)}</td>
                                    <td>{applicaSeparatore(item.prima_dose)}</td>
                                    <td>{applicaSeparatore(item.seconda_dose)}</td>
                                    <td>{applicaSeparatore(item.sesso_femminile)}</td>
                                    <td>{applicaSeparatore(item.sesso_maschile)}</td>
                                    <td>{applicaSeparatore(item.totale)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </div>
    );
} 