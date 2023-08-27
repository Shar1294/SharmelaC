import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/global.css"
import Home from './pages/home-page.component';
import Navbar from './components/navbar.component';
import Projects from './pages/projects-page.component';
import ProjectDetail from './pages/project-detail-page.component';

function App() {
  return (
    <div className='theme'>
      <Router basename={process.env.PUBLIC_URL}>

  
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Navbar/>
      </Router>
  
    </div>
  );
}

export default App;
