import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MenuPage from './Pages/MenuPage'; // Import MenuPage component
import StorySection from './components/StorySection'; // Add other sections you need to keep
import Services from './components/Services';
import Ser from './Pages/Serpage';
import HeroAndStorySection from './Pages/fastfood';

function App() {
  return (
    <Router>
      {/* Navbar will appear on all pages */}
      <NavBar />
      
      <Routes>
        {/* Route for Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <StorySection />
              <Services />
            </>
          } 
        />

        {/* Route for Menu Page */}
        <Route path="/menu" element={<MenuPage />} />

        {/* Route for Service Page */}
        <Route path="/Ser" element={<Ser />} />

        {/* Route for Fast Food Page */}
        <Route path="/fast" element={<HeroAndStorySection />} />
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
