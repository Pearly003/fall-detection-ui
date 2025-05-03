// App.js (React for Web)
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import LiveStream from './pages/LiveStream';
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch('http://134.208.3.240:5000/status')
      .then(res => res.json())
      .then(data => {
        console.log('API response:', data);
        setStatus(data.status); // "Camera online" or "Camera offline"
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setStatus('Failed to connect');
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LiveStream />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/livestream" element={<LiveStream />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/stream/:ipAddress" element={<LiveStream />} />
      </Routes>
    </Router>
  );
}

export default App;
