import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AxiomEditor from './components/AxiomEditor';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/axiom-editor" element={<PrivateRoute><AxiomEditor /></PrivateRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;