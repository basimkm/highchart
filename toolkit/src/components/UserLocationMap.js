import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highmaps';
import mapData from '@highcharts/map-collection/custom/world.geo.json';

Map(Highcharts);

const UserLocationMap = () => {
  useEffect(() => {
    Highcharts.mapChart('container', {
      chart: {
        map: mapData,
      },
      title: {
        text: 'World Map',
      },
      series: [
        {
          type: 'map',
          data: [
            {
              name: 'USA',
              value: 100,
            },
            {
              name: 'France',
              value: 200,
            },
            {
              name: 'Germany',
              value: 300,
            },
          ],
        },
      ],
    });
  }, []);

  return <div id="container" style={{ height: '500px', width: '100%' }} />;
};

export default UserLocationMap;
