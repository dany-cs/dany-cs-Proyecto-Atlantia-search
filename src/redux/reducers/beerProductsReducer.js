import { types } from '../types/types';

const initialState = {
    beerData: [],
};

export const beerProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MAKE_REQUEST_GENERAL:
            return {
                beerData: [],
            }
        case types.GET_DATA_BEER_PRODUCTS:
            return {
                ...state,
                beerData: action.payload
            }
        default:
            return state;
    }
};