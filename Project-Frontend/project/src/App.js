import './App.css';
import Home from './components/Home.jsx';
import Hotels from './components/Hotels.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
