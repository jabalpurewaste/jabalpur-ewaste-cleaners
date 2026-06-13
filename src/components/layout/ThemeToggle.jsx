import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="
      w-11
      h-11
      rounded-full
      flex
      items-center
      justify-center
      bg-white
      dark:bg-slate-700
      shadow-md
      border
      border-gray-200
      dark:border-slate-600
      hover:scale-110
      duration-300
      "
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-slate-700 text-lg" />
      )}
    </button>
  );
}

export default ThemeToggle;