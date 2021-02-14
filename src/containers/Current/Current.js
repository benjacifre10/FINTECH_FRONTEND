import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ComboBox, Spinner } from 'biga';
import Card from '../../components/UI/Card/Card';

import * as actions from '../../store/actions';

import styles from './Current.module.css';

const serverURL = process.env.REACT_APP_SERVER_URL;

const Current = () => {

    const dispatch = useDispatch();

    
    const [data, setData] = useState(null);
    const [front, setFront] = useState(null);
    const [ciudad, setCiudad] = useState('');
    const ciudades = [{nombre: 'Barcelona'}, {nombre: 'Paris'}, {nombre: 'Brasilia'}, {nombre: 'Moscu'}, {nombre: 'Londres'}];
    const currentWeather = useSelector(state => state.abm.completeList.current);
    const usePreviousData = (value) => {
        console.log('function_previous', value);
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
            return ref.current;
        });
    };

    const prevDataRef = usePreviousData(currentWeather);


    useEffect(() => {
        dispatch(actions.getAll(serverURL, '/current', `/?city=${ciudad}`));
    }, [dispatch, ciudad]);

    useEffect(() => {
        if (currentWeather) {
            setFront(
                <React.Fragment>
                    <img src="/OpenWeather.png" alt="open_weather"></img>
                </React.Fragment>
            );
            if (ciudad && currentWeather.current === undefined) {
                console.log('con ciudad');
                let icon = `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
                setData(
                    <React.Fragment>
                        <h3>{currentWeather.name}, {currentWeather.sys.country}</h3>
                        <h4><i>{currentWeather.weather[0].description}</i></h4>
                        <img src={icon} alt="icon"/>
                        <p>Temperatura: {((currentWeather.main.temp)/10).toFixed(1)}</p>
                        <p>Humedad: {currentWeather.main.humidity}%</p>
                        <p>Viento: {(currentWeather.wind.speed).toFixed(1)} km/h</p>
                    </React.Fragment>
                );
            } else {
                if (currentWeather.current !== undefined) {
                    let icon = `http://openweathermap.org/img/w/${currentWeather.current.weather[0].icon}.png`;
                    setData(
                        <React.Fragment>
                            <h3>{currentWeather.timezone}</h3>
                            <h4><i>{currentWeather.current.weather[0].description}</i></h4>
                            <img src={icon} alt="icon"/>
                            <p>Temperatura: {((currentWeather.current.temp)/10).toFixed(1)}</p>
                            <p>Humedad: {currentWeather.current.humidity}%</p>
                            <p>Viento: {(currentWeather.current.wind_speed).toFixed(1)} km/h</p>
                        </React.Fragment>
                    );
                }
            }
        }
    }, [currentWeather, ciudad]);

    const changeValue = (type, val) => {
        if (type) { 
            setCiudad(val);
        }
    };

    return (
        <div className={styles.wrapper}>
            {console.log('render', prevDataRef, currentWeather)}
            <h2>Clima Actual</h2>
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
            {data && prevDataRef === undefined ?
                currentWeather !== prevDataRef ?
                <Card 
                    front={front}
                    data={data}>
                </Card> :
                <div className={styles.spinner}>
                    <Spinner />
                </div> :
                <div className={styles.spinner}>
                    <Spinner />
                </div> 
            }
        </div>
    );
};

export default Current;
