
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Smoking from './components/Smoking';
import AerobicExecise from './components/AerobicExercise';
import ReduceWeight from './components/ReduceWeight';
import Mortality from './components/Mortality';
import Sugar from './components/Sugar';

function DefaultRedirect() {
  return <Navigate to="/smoking" replace />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container>
          <div className="content">
            <Routes>
              <Route index element={<DefaultRedirect />} />
              <Route path="/smoking" element={<Smoking />} />
              <Route path="/aerobicexecise" element={<AerobicExecise />} />
              <Route path="/reduceweight" element={<ReduceWeight />} />
              <Route path="/mortality" element={<Mortality />} />
              <Route path="/sugar" element={<Sugar />} />
            </Routes>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
