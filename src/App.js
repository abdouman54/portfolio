import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AddTestimonials from './components/AddTestimonials';
import { TestimonialsProvider } from './components/TestimonialsContext';
import './App.css';

const App = () => {
  return (
    <TestimonialsProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/add-testimonial" element={<AddTestimonials />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TestimonialsProvider>
  );
};

export default App;



