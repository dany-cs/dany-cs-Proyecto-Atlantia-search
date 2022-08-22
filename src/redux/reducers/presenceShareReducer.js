import { types } from '../types/types';

const initialState = {
    presenceData: [],
};

export const presenceShareReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.MAKE_REQUEST_GENERAL:
            return {
                presenceData: [],
            }
        case types.GET_DATA_PRESENCE_SHARE:
            return {
                ...state,
                presenceData: action.payload
            }
        default:
            return state;
    }
};