import { types } from '../types/types';

const initialState = {
    priceData: [],
};

export const priceEvolutionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MAKE_REQUEST_GENERAL:
            return {
                priceData: [],
            }
        case types.GET_DATA_PRICE_EVOLUTION:
            return {
                ...state,
                priceData: action.payload
            }
        default:
            return state;
    }
};