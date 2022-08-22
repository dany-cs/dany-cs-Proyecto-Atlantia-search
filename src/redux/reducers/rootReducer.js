import { combineReducers } from 'redux';
import { beerProductsReducer } from './beerProductsReducer';
import { presenceShareReducer } from './presenceShareReducer';
import { priceEvolutionReducer } from './priceEvolutionReducer';

export const rootReducer = combineReducers({
    beerProducts: beerProductsReducer,
    presenceShare: presenceShareReducer,
    priceEvolution: priceEvolutionReducer,
});