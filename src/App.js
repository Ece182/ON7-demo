import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedCourses from './FeaturedCourses';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Animation from './Animation';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
      <Animation />
    </div>
  );
}

export default App;
