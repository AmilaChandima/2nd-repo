import './App.css';
import NavBar from './components/NavBar';
import StorySection from './components/StorySection';
import Services from './components/Services';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <NavBar />
      {/* Add padding to avoid content overlapping the navbar */}
      <div className="pt-20">
        <Hero/>
        <StorySection />
        <Services/>
        <Footer />
      </div>
    </>
  );
}

export default App;
