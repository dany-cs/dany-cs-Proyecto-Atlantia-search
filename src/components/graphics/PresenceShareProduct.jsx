import React from 'react';
import Chart from 'react-apexcharts';

export const PresenceShareProduct = ({ presenceShare }) => {
  const number = presenceShare.map(item =>  item.presenceShare);
  const name = presenceShare.map(item =>  item.name);

  return (
    <div className='PresenceShareProduct--Wrapper'>
      <h1 className='PresenceShareProduct--Title'>Presence Share by Product</h1>
      <div className='PresenceShareProduct--Pie'>
        <Chart
          height={407}
          options={{
              labels: name,
              colors: ['#D6215B', '#FF7A00', '#7530B2', '#23B794', '#006FFF'],
          }}
          series={number}
          type='pie'
          width={500}
        />
      </div>
    </div>
  );
};