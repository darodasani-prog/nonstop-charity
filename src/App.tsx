/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GeminiChat } from './components/GeminiChat';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import GetInvolved from './pages/GetInvolved';
import Projects from './pages/Projects';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <GeminiChat />
      </div>
    </Router>
  );
}



