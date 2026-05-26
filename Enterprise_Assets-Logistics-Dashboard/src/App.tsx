import "./index.css";
import { Outlet } from "react-router-dom";
import { useSystemContext } from "./context/ContextProvider";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { darkMode, user } = useSystemContext();

  return (
    <div
      className={`min-h-screen bg-page-bg text-page-text ${darkMode ? "dark" : ""}`}
    >
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-65px)] items-stretch justify-start">
        <main className="w-full mt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
