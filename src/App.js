
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
