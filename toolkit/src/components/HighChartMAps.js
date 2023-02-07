import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highmaps';
import mapData from '@highcharts/map-collection/custom/world.geo.json';

const HighChartMaps = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    Highcharts.mapChart(containerRef.current, {
      chart: {
        map: mapData,
      },
      title: {
        text: 'World Map with Highlighted Areas',
      },
      series: [
        {
          name: 'Countries',
          data: [
            { name: 'United States of America', value: 400, color: 'green' },
            { name: 'India', value: 200, color: '#00FF00' },
            { name: 'China', value: 200, color: 'red' },
          ],
          joinBy: ['name', 'name'],
          dataLabels: {
            enabled: true,
            format: '{point.name}',
          },
          states: {
            hover: {
              color: '#a4edba',
            },
          },
          borderColor: '#A0A0A0',
        },
      ],
    });
  }, []);

  return <div ref={containerRef} />;
};

export default HighChartMaps;
