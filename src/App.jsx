import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Routes>
      <div className="bg-blue-500 text-white p-6">
  <h1 className="text-2xl">Tailwind is working!</h1>
</div>

      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
