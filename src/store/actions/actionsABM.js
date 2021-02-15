import axios from 'axios';
import * as actionTypes from './actionTypes';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const start = () => ({ type: actionTypes.ABM_START });

export const getAll = (serverURL, endpoint, subendpoint = '') => {
    return dispatch => {
        dispatch(start());
        let url = `${serverURL}${endpoint}${subendpoint? subendpoint : ''}`;
        axios
            .get(url)
            .then(response => {
                dispatch(getAllSuccess(endpoint.substring(1), response.data));
            })
            .catch(error => {
                if (!error.response) {
                    dispatch(getAllFail({ message: '¡No se pudo conectar con el servidor!'}));
                    return;
                }
                dispatch(getAllFail({ message: '¡No se ha obtenido la lista completa'}));
            });
    };
};

export const getAllSuccess = (property, data) => {
    let objectData = {};
    objectData[property] = data.data;
    return {
        type: actionTypes.ABM_GET_ALL_SUCCESS,
        completeList: objectData
    };
};

export const getAllFail = error => {
    return {
        type: actionTypes.ABM_GET_ALL_FAIL,
        error
    };
};

