import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ModerateText } from './pages/ModerateText';
import { Results } from './pages/Results';
import { About } from './pages/about';
import { Features } from './pages/features';
import { Pricing } from './pages/pricing';
import { Mission } from './pages/mission';
import { Team } from './pages/team';
import { Global } from './pages/global';
import { NotFound } from './pages/404';

import { LogIn } from './pages/logIn';
import { SignUp } from './pages/signUp'; // Ensure correct import
import { Contributors } from "./pages/Contributors"; // Make sure this import exists
import { Waitlist } from "./pages/Waitlist";
import { ChromeExtension } from "./pages/ChromeExtension";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Fluid Gradient Background */}
        <div className="fixed inset-0 -z-10">
          {/* Primary gradient */}
          <div 
            className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] rounded-full fluid-gradient"
            style={{
              background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.05))',
            }}
          />
          
          {/* Secondary gradient */}
          <div 
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full fluid-gradient"
            style={{
              background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))',
              animationDelay: '-5s',
              animationDuration: '20s'
            }}
          />
          
          {/* Accent gradient */}
          <div 
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full fluid-gradient"
            style={{
              background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))',
              animationDelay: '-10s',
              animationDuration: '25s'
            }}
          />

          {/* Shimmer overlay */}
          <div className="absolute inset-0 gradient-shimmer" />
        </div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/global" element={<Global />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} /> {/* Ensure correct path */}
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/moderate-text" element={<ModerateText />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/chrome-extension" element={<ChromeExtension />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;