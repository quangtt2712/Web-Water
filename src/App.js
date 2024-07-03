import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import Footer from './components/Footer/footer';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index) => {
      setCurrentSlide(index);
  };

  return (
    <div className="App">
      <Header currentSlide={currentSlide} />
      <main>
        <Routes>
          <Route path="/" element={<Home onSlideChange={handleSlideChange} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
