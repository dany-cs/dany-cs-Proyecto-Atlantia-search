import { types } from '../types/types';

export const makeRequestGeneral = () => {
    return {
        type: types.MAKE_REQUEST_GENERAL
    };

};

export const getDataBeerProducts = (res) => {
    return {
        type: types.GET_DATA_BEER_PRODUCTS,
        payload: res,
    };

};

export const getDataPresenceShare = (res) => {
    return {
        type: types.GET_DATA_PRESENCE_SHARE,
        payload: res,
    };

};

export const getDataPriceEvolution = (res) => {
    return {
        type: types.GET_DATA_PRICE_EVOLUTION,
        payload: res,
    };

};