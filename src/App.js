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
      <NavBar />  {/* This will appear on all pages */}
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <StorySection />
            <Services />
          </>
        } />

        {/* Route for Menu Page */}
        <Route path="/menu" element={<MenuPage />} /> {/* This will render the Menu page when the route is accessed */}
        <Route path="/Ser" element={<Ser />} /> 
        <Route path="/fast" element={<HeroAndStorySection />} />
      </Routes>
      <Footer />  {/* Footer will also appear on all pages */}
    </Router>
  );
}

export default App;
