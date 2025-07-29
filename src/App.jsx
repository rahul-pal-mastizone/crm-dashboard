import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/clients" element={<PrivateRoute><Clients /></PrivateRoute>} />
      <Route path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  );
}

export default App;
