import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import BookTable from './pages/BookTable';
import BlogSection from './pages/BlogSection';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/blog" element={<BlogSection />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer/>
    </Router>
  
  
   
    </>
  )
};

export default App;
