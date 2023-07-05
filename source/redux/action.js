import  GET_PLACES_FULFILLED  from './constants';

export const fetchDataFulfilled = (places) => {
    return {
        type: GET_PLACES_FULFILLED,
        payload: places,
    };
}

export const getDataFulfilled = (item) => {

    return function (dispatch) {
        dispatch(fetchDataFulfilled(item))
    }
}