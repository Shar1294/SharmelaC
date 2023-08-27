import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/global.css"
import Home from './pages/home-page.component';
import Navbar from './components/navbar.component';

function App() {
  return (
    <div className='theme'>
      <Router basename={process.env.PUBLIC_URL}>

  
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Navbar/>
      </Router>
  
    </div>
  );
}

export default App;
