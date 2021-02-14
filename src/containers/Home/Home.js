import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from 'biga';
import Card from '../../components/UI/Card/Card';

import * as actions from '../../store/actions';
import styles from './Home.module.css';

const serverURL = process.env.REACT_APP_SERVER_URL;

const Home = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState(null);
    const [front, setFront] = useState(null);

    const ubicationData = useSelector(state => state.abm.completeList.location);
    
    useEffect(() => {
        dispatch(actions.getAll(serverURL, '/location'));
    }, [dispatch]);
    
    useEffect(() => {
        if (ubicationData) {
            setFront(
                <React.Fragment>
                    <i className="fas fa-map-marker-alt"></i>
                </React.Fragment>
            );
            setData(
                <React.Fragment>
                    <h1>{ubicationData.city}</h1>
                    <h2>{ubicationData.country}</h2>
                    <h3>{ubicationData.continent}</h3>
                    <p>Latitud: {ubicationData.lat}</p> 
                    <p>Longitud: {ubicationData.lon}</p>
                </React.Fragment>
            );
        }
    }, [ubicationData]);

    return (
        <div className={styles.wrapper}>
            <h2>Mi ubicación</h2>
            {data ? 
                <Card 
                    front={front} 
                    data={data}>
                </Card> : 
                <div className={styles.spinner}>
                    <Spinner />
                </div>
            }
        </div>
    );
};

export default Home;
