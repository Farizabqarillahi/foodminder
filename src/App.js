import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStartedPage from './pages/GetStartedPage';
import NextPage from './pages/NextPage';
import LoginPage from './pages/LoginPage';
import './App.css'; // Importing App.css file

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<GetStartedPage />} />
          <Route path="/next-page" element={<NextPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

