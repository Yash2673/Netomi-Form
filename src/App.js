import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Form from './pages/Form';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
