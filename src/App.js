import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import Footer from './components/Footer/footer';
import Prolist from './pages/Prolist';
import Section1Story from './components/Section/Section1Story';
import New from './pages/New';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Header currentSlide={currentSlide} />
      <main>
        <Routes>
          <Route path="/" element={<Home onSlideChange={handleSlideChange} />} />
          <Route path="/san-pham" element={<Prolist />} />
          <Route path='/cau-chuyen-truyen-doi' element={<Section1Story />} />
          <Route path='/tintuc-sukien' element={<New />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
