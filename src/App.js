import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import GetStartedPage from './pages/GetStartedPage';
import NextPage from './pages/NextPage';
import LoginPage from './pages/LoginPage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import DashboardPage from './pages/DashboardPage';
import SearchPage from './pages/SearchPage';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      {isLoading && <LoadingPage />}
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/get-started" element={<GetStartedPage setIsLoading={setIsLoading} />} />
          <Route path="/next-page" element={<NextPage setIsLoading={setIsLoading} />} />
          <Route path="/login" element={<LoginPage setIsLoading={setIsLoading} />} />
          <Route path="/search" element={<SearchPage setIsLoading={setIsLoading}/>} />
          <Route path="/dashboard" element={<DashboardPage setIsLoading={setIsLoading}/>} /> {/* Add a new Route for the DashboardPage */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
