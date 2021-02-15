import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ComboBox, Spinner } from 'biga';
import Slider from '../../components/UI/Slider/Slider';

import * as actions from '../../store/actions';

import styles from './Forecast.module.css';

const serverURL = process.env.REACT_APP_SERVER_URL;


const Forecast = () => {
    const dispatch = useDispatch();

    const [ciudad, setCiudad] = useState('');
    const ciudades = [{nombre: 'Barcelona'}, {nombre: 'Paris'}, {nombre: 'Brasilia'}, {nombre: 'Moscu'}, {nombre: 'Londres'}];
    const forecastWeather = useSelector(state => state.abm.completeList.forecast);

    useEffect(() => {
        dispatch(actions.getAll(serverURL, '/forecast', `/?city=${ciudad}`));
    }, [dispatch, ciudad]);

    const changeValue = (type, val) => {
        if (type) { 
            setCiudad(val);
        }
    };

    return (
        <div className={styles.wrapper}>
            <h2>Clima a Futuro</h2>
            <div className={styles.center}>
                <ComboBox 
                    changed={changeValue}
                    options={{
                    title: "Ciudades",
                    data: ciudades,
                    key: "nombre",
                    text: ["nombre"],
                    background: "#2f3640",
                    disabled: false
                    }}
                />
            </div>
            {forecastWeather ?
                <Slider data={forecastWeather}></Slider> :
                <div className={styles.spinner}>
                    <Spinner />
                </div> 
            }
        </div>
    );
};

export default Forecast;
