import React from 'react';
import AddData from './AddData';
import ViewData from './ViewData';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
// import Display from './Display';
// import UserDisplay from './UserDisplay';

const App = () => {
  return (
    <div>
      {/* <Display />
      <UserDisplay /> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<ViewData />} />
          <Route path="/add" element={<AddData />} />
          <Route path="/edit/:id" element={<AddData />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
