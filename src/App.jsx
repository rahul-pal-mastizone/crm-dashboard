import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="clients" element={<Clients />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
