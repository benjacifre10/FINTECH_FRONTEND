import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    items: [],
    completeList: {},
    selected: null,
    error: null,
    sucess: null, 
    message: null,
    loading: false,
    loadingList: false
};

const abmStart = (state, action) => {
    return updateObject(state, {
        error: false,
        sucess: false,
        message: null,
        loading: true
    });
};

const abmGetAllCompleteListSucess = (state, action) => {
    return updateObject(state, {
        completeList: action.completeList,
        error: false,
        sucess: false,
        message: null,
        loadingList: false
    });
};

const abmGetAllCompleteListFail = (state, action) => {
    return updateObject(state, {
        error: true,
        success: false,
        message: action.error,
        loading: false,
        loadingList: false
    });
};

const abmRowSuccess = (state, action) => {
    return updateObject(state, {
        error: false,
        success: true,
        message: action.message,
        loading: false,
        loadingList: false
    });
};

const abmRowFail = (state, action) => {
    return updateObject(state, {
        error: true,
        success: false,
        message: action.error.message,
        loading: false,
        loadingList: false
    });
};

const reducer = (state = initialState, action) => {
    if (!action) { return state; }
    switch (action.type) {
        case actionTypes.ABM_START: return abmStart(state, action);
        case actionTypes.ABM_GET_ALL_FAIL: return abmGetAllCompleteListFail(state, action);
        case actionTypes.ABM_GET_ALL_SUCCESS: return abmGetAllCompleteListSucess(state, action);
        case actionTypes.ABM_ROW_FAIL: return abmRowFail(state, action);
        case actionTypes.ABM_ROW_SUCCESS: return abmRowSuccess(state, action);
        default: return state;
    }
}

export default reducer;