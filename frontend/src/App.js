import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import PatientsPage from './PatientsPage';
import AddPatientPage from './AddPatientPage';

const App = () => {
  return (
    <Router>
      <div>
      <Navbar/>
      
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/add-patient" element={<AddPatientPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <h1>Welcome to the Patient Records App</h1>
    <p>Please select an option from the navigation above.</p>
  </div>
);

export default App;
