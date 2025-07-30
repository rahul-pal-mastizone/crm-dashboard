import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Dashboard from './components/Dashboard'; // layout wrapper
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Protected dashboard routes with layout */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="clients" element={<Clients />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
