import './App.css'; 
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';  
import Button from './Button'; 
import Mouse from './Mouse'; 

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
            <Link to="/mouse">Mouse</Link> {/* Correct link */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<Button />} />
        <Route path="/mouse" element={<Mouse />} /> 
      </Routes>
    </div>
  );
}

export default App;
