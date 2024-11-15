import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ModerateText } from './pages/ModerateText';
import { Results } from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moderate-text" element={<ModerateText />} />
          <Route path="/results" element={<Results />} />
        </Routes>

        {/* Background Decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl transform rotate-12 opacity-30" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-t from-blue-500/20 to-purple-500/20 blur-3xl transform -rotate-12 opacity-30" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;