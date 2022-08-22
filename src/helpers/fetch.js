export const getBeerProducts = async() => {

    const url = `https://atlantia-dev-test.herokuapp.com/api/beer-products/`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();
        return data;

    } catch (error) {

        console.log(error);

    }

};

export const getPresenceShare = async() => {

    const url = `https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();
        return data;

    } catch (error) {

        console.log(error);

    }

};

export const getPriceEvolution = async() => {

    const url = `https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();
        return data;

    } catch (error) {

        console.log(error);

    }

};