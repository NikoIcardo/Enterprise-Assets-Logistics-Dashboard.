import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-page-bg/80 backdrop-blur-md dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="" className="text-xl font-bold text-sky-400">
          AppLogo
        </Link>

        <div className="flex gap-6">
          <Link
            to=""
            className={`transition-colors ${location.pathname === "/" ? "text-sky-400 font-bold" : "text-slate-500 hover:text-sky-400 "}`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin"
            className={`transition-colors ${location.pathname === "/admin" ? "text-sky-400 font-bold" : "text-slate-500 hover:text-sky-400 "}`}
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
