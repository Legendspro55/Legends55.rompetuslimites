import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Ecosystem from './components/Ecosystem';
import Pricing from './components/Pricing';
import WallOfLove from './components/WallOfLove';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Ecosystem />
        <Pricing />
        <WallOfLove />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;