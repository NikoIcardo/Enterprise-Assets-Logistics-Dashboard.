import "./index.css";
import { Outlet, Link } from "react-router-dom";
import { useSystemContext } from "./context/ContextProvider";

function App() {
  const { darkMode, user } = useSystemContext();

  return (
    <div
      className={`min-h-screen bg-page-bg text-page-text ${darkMode ? "dark" : ""}`}
    >
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-page-bg/80 backdrop-blur-md dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link to="/" className="text-xl font-bold text-sky-400">
            AppLogo
          </Link>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-sky-400 transition-colors">
              Home
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-sky-400 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={`flex min-h-[calc(100vh-65px)] items-center justify-center`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-sky-400">Tailwind Test</h1>
          <p className="mt-2 text-slate-400">
            If this text is gray and centered on a dark background, it works!
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
