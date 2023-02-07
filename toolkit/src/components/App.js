import React from 'react';
import AddData from './AddData';
import ViewData from './ViewData';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import MapView from './MapView';
import Map2 from './Map2';
import GraphView from './GraphView';
import FileExport from './FileExport';
import SingleView from './SingleView';
import MapsApi from './MapsApi';
import HighCharts from './HighCharts';
import '../css/index.css';
import Drag from './Drag';
import CombinedChartExample from './CombinedChartExample';
import StockChart from './StockChart';
import DummyChart from './DummyChart';
import HighChartMaps from './HighChartMAps';
import UserLocationMap from './UserLocationMap';
// import Display from './Display';
// import UserDisplay from './UserDisplay';

const App = () => {
  return (
    <div>
      {/* <Display />
      <UserDisplay /> */}
      <Router>
        <Routes>
          <Route path="/view" element={<ViewData />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/edit/:id" element={<AddData />} />
          <Route path="/mapsApi" element={<MapsApi />} />
          <Route path="/drag" element={<Drag />} />

          <Route path="/chart" element={<HighCharts />} />
          <Route path="/Rechart" element={<CombinedChartExample />} />
          <Route path="/stockchart" element={<StockChart />} />
          <Route path="/dummy" element={<DummyChart />} />
          <Route path="/highmap" element={<HighChartMaps />} />
          <Route path="/mapuser" element={<UserLocationMap />} />

          <Route path="/map" element={<MapView />} />
          <Route path="/map2" element={<Map2 />} />
          <Route path="/graph" element={<GraphView />} />
          <Route path="/" exact element={<FileExport />} />
          <Route path="/viewData/:id" exact element={<SingleView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
