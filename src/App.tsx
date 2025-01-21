import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import FAQ from './components/FAQ';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative h-[80vh] bg-black">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Seafood spread"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Dampa sa Bonguyan</h1>
              <p className="text-xl md:text-2xl mb-8">Experience the finest seafood and BBQ in Davao</p>
              <a
                href="#menu"
                className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <Menu />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;