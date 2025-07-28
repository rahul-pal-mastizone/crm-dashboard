const Navbar = () => {
  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold">Welcome</h1>
      <div className="text-sm">
        Logged in as: <strong>Admin</strong>
      </div>
    </header>
  );
};

export default Navbar;
