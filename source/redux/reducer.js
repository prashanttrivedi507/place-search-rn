import  GET_PLACES_FULFILLED  from './constants';

const initialState = {
    places: [], 
}

const locationList = (state = initialState, action) => {
    switch(action.type) {
        case GET_PLACES_FULFILLED:
        return {...state, places:action.payload};      
        default: 
        return state;
    }
}

export default locationList;