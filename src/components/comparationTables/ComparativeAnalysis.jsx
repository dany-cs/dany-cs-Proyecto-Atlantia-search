import React from 'react';
import cx from 'classnames';

export const ComparativeAnalysis = ({ beerProducts }) => {
  const productData = () => {
      const data = beerProducts.map((item, i) => {
        const percentage = item.persistence * 100;
        const persistence = Math.abs(percentage);

        const formatter = new Intl.NumberFormat('es-mx', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 0,
        });

        const value = item.averagePrice;
        const price = formatter.format(value);

        const colors = cx({
        'ComparativeAnalysis--Persistence': true,
        'ComparativeAnalysis--Persistence--Red': percentage < 0,
        'ComparativeAnalysis--Persistence--Green': percentage > 0,
        });

        return (
          <div className='ComparativeAnalysis--Table' key={i}>
            <div className='ComparativeAnalysis--NameWrap'>
              <img
                alt={ item.productImage }
                className='ComparativeAnalysis--Image'
                src={ item.productImage }
              />
              <p>{ item.name }</p>
            </div>
            <div className='ComparativeAnalysis--Data'>
              <p className='ComparativeAnalysis--Sku'>{ item.sku }</p>
              <span className={ colors }>{ persistence }</span>
              <p className='ComparativeAnalysis--AveragePrice'>{ price }.00</p>
              <p className='ComparativeAnalysis--Position'>{ item.averagePosition }</p>
            </div>
          </div>
        );
      });

      return data;
    };

  return (
    <div className='ComparativeAnalysis--Wrapper'>
      <h1 className='ComparativeAnalysis--Title'>Comparative Analysis</h1>
      <div className='ComparativeAnalysis--TopBar'>
        <h2 className='ComparativeAnalysis--Name'>Nombre</h2>
        <h2 className='ComparativeAnalysis--Sku'>SKU</h2>
        <h2 className='ComparativeAnalysis--Percentage'>% Presencia</h2>
        <h2 className='ComparativeAnalysis--Price'>Av.Price</h2>
        <h2 className='ComparativeAnalysis--Position'>Av.Position</h2>
      </div>
      { productData() }
    </div>
  );
};