import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'My Bar Chart',
  },
  xAxis: {
    categories: ['Apples', 'Bananas', 'Oranges'],
  },
  yAxis: {
    title: {
      text: 'Fruit eaten',
    },
  },
  series: [
    {
      type: 'line',
      name: 'Line series',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      type: 'column',
      name: 'Column series',
      data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    },
  ],
};

const DummyChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} barSize={5} />
);

export default DummyChart;
