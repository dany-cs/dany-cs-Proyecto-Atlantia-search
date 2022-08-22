import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBeerProducts, getPresenceShare, getPriceEvolution } from '../helpers/fetch';
import { getDataBeerProducts, getDataPresenceShare, getDataPriceEvolution, makeRequestGeneral } from '../redux/actions/data';
import { ComparativeAnalysis } from './comparationTables/ComparativeAnalysis';
import { PresenceShareProduct } from './graphics/PresenceShareProduct';
import { PriceEvolution } from './graphics/PriceEvolution';
import image from './assets/atlantia-search.svg';


export const Home = () => {
    const dispatch = useDispatch();
    const { beerData } = useSelector(state => state.beerProducts);
    const { presenceData } = useSelector(state => state.presenceShare);
    const { priceData } = useSelector(state => state.priceEvolution);

    useEffect(() => {
        dispatch(makeRequestGeneral());

        const fetchData = async() => {
            const dataBeerProducts = await getBeerProducts();
            dispatch(getDataBeerProducts(dataBeerProducts));

            const dataPresenceShare = await getPresenceShare();
            dispatch(getDataPresenceShare(dataPresenceShare));

            const dataPriceEvolution = await getPriceEvolution();
            dispatch(getDataPriceEvolution(dataPriceEvolution));
        };

        fetchData();
    }, [dispatch]);


    if (priceData === undefined && beerData === undefined && presenceData === undefined) return;

    return (
        <div className='Atlantia'>
            <header className='Atlantia--Header'>
                <img src={ image } alt={ image }/>
            </header>
            <div className='Atlantia--Content'>
                <h1 className='Atlantia--Title'>General Performance Analysis</h1>
                <div className='Atlantia--Graphics'>
                    <PriceEvolution
                        priceData={ priceData }
                    />
                    <PresenceShareProduct
                        presenceShare={ presenceData }
                    />
                </div>
                <div className='ComparativeAnalysis'>
                    <ComparativeAnalysis
                        beerProducts={ beerData }
                    />
                </div>
            </div>
        </div>
    );
};
