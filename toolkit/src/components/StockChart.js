import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import LabelModule from 'highcharts/modules/series-label';
import GridLight from 'highcharts/themes/grid-light';
import highcharts3d from 'highcharts/highcharts-3d';

const StockChart = () => {
  highcharts3d(Highcharts);
  GridLight(Highcharts);
  LabelModule(Highcharts);

  const options = {
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: 'AAPL Stock Price',
    },
    series: [
      {
        name: 'AAPL',
        data: [
          [1220832000000, 22.04],
          [1220918400000, 22.01],
          [1221004800000, 22.05],
          [1221091200000, 21.79],
          [1221177600000, 22.17],
          [1221436800000, 22.18],
          [1221523200000, 22.08],
          [1221609600000, 22.17],
          [1221696000000, 22.29],
          [1221782400000, 22.19],
          [1222041600000, 22.14],
          [1222128000000, 22.28],
          [1222214400000, 22.05],
          [1222300800000, 22.11],
          [1222387200000, 22.06],
        ],
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
};

export default StockChart;
