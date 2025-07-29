import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold">Welcome</h1>
      <div className="flex items-center gap-4 text-sm">
        {isLoggedIn && <span>Logged in as: <strong>Admin</strong></span>}

        {!isLoggedIn ? (
          <Link to="/login" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
