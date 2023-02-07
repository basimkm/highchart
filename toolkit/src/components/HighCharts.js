import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
import highchartsMore from 'highcharts/highcharts-more';
import '../css/index.css';
import Switch from 'react-switch';

const HighCharts = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = (checked) => {
    setIsDark(checked);
  };

  highchartsMore(Highcharts);
  highcharts3d(Highcharts);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const columnChartOptions = {
    chart: {
      animation: {
        duration: 1000,
      },

      type: 'column',
    },
    title: false,
    xAxis: {
      categories: months,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: false,
    },
    legend: {
      symbolRadius: 1,
      layout: 'horizontal',
      align: 'left',
      verticalAlign: 'top',
      itemMarginBottom: 30,
    },

    series: [
      {
        color: 'green',
        name: 'Data 1',
        data: [1, 2, 3],
      },
      {
        color: 'blue',
        name: 'Data 2',
        data: [1, 2, 3],
      },
    ],
  };

  return (
    <div>
      <div className="app">
        <div
          style={{
            backgroundColor: isDark ? '#333' : '#fff',
            color: isDark ? '#fff' : '#333',
          }}
        >
          <Switch onChange={handleToggle} checked={isDark} />
          <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>

          <HighchartsReact
            highcharts={Highcharts}
            options={columnChartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default HighCharts;
