import React from 'react';
import Chart from 'react-apexcharts';

export const PriceEvolution = ({ priceData }) => {
  const xxAmbar = priceData.filter(item =>  item.name === 'Cerveza XX Ambar 325 ml');
  const priceXxAmbar = xxAmbar.map(item =>  item.price);

  const xxLager = priceData.filter(item =>  item.name === 'Cerveza XX Lager 355 ml');
  const dateXxLager = xxLager.map(item =>  item.dateExtraction);
  const priceXxLager = xxLager.map(item =>  item.price);

  const tecateLigth = priceData.filter(item =>  item.name === 'Cerveza Tecate Light 355 ml');
  const priceTecateLigth = tecateLigth.map(item =>  item.price);

  return (
    <div className='PriceEvolution'>
      <h1 className='PriceEvolution--Title'>Price Evolution</h1>
      <div className='PriceEvolution--Line'>
        <Chart
          type='line'
          width={868}
          height={407}
          id= 'realtime'
          series={[
            {
              name: 'Cerveza XX Ambar 325 ml',
              data: priceXxAmbar,
            },
            {
              name: 'Cerveza XX Lager 355 ml',
              data: priceXxLager,
            },
            {
              name: 'Cerveza Tecate Light 355 ml',
              data: priceTecateLigth,
            },
          ]}
          options={{
            colors: ['#D6215B', '#7530B2', '#FFB448'],
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type:'datetime',
              categories: dateXxLager,
            },
            yaxis: {
              labels: {
                formatter: (value) => {
                  return '$'+ value;
                }
              },
            },
          }}
        />
      </div>
    </div>
  );
};