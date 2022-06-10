
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';

import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects';
import Services from './Pages/Home/Services';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='about' element={<About />}>About</Route>
        <Route path='service' element={<Services />}>Services</Route>
        <Route path='projects' element={<Projects />}>Services</Route>
        <Route path='contact-me' element={<Contact />}>Services</Route>
      </Routes>


    </div>
  );
}

export default App;
