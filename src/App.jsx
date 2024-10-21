import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';

const TitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Set the title based on the current route
    if (location.pathname === '/') {
      document.title = 'Home - Sneha Patil'; // Title for Home page
    } else if (location.pathname === '/experience') {
      document.title = 'Experience - Sneha Patil'; // Title for Experience page
    } else {
      document.title = 'Sneha Patil'; // Default title
    }
  }, [location]);

  return null; // No additional rendering needed
};

const App = () => {
  return (
    <BrowserRouter>
      <TitleHandler /> {/* Add the TitleHandler here */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
