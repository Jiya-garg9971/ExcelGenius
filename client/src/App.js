import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Category from './Pages/Category';
import Assignment from './Pages/Assignment';
import CategoryProvider from './Context/CategoryContext';

function App() {
  return (
    <Router>
      <CategoryProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category/>}/>
        <Route path="/assignment" element={<Assignment/>}/>
      </Routes>
      </CategoryProvider>
    </Router>
  );
}

export default App;