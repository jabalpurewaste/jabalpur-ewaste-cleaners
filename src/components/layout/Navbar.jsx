import { useState } from "react";
import { navigation } from "../../data/navigationData";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

import {
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaSignInAlt
} from "react-icons/fa";

function Navbar({
  darkMode,
  toggleTheme,
  user,
  onLogout,
  onLogin
}) {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-white/80
      dark:bg-slate-900/80
      border-b
      border-green-100
      dark:border-slate-700
      shadow-sm
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        py-4
        flex
        justify-between
        items-center
        "
      >

        {/* Logo */}

        <a href="#home">

          <Logo />

        </a>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          {navigation.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className="
              relative
              text-gray-700
              dark:text-gray-100
              font-medium
              transition-all
              duration-300
              hover:text-green-700
              dark:hover:text-green-400
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-green-700
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              {item.title}
            </a>

          ))}

          {/* User Logged In */}

          {user ? (

            <div
              className="
              flex
              items-center
              gap-3
              "
            >

              <div
                className="
                px-4
                py-2
                rounded-full
                bg-green-100
                dark:bg-green-900/40
                text-green-700
                dark:text-green-300
                font-medium
                border
                border-green-200
                dark:border-green-700
                "
              >
                👋 {user.name.split(" ")[0]}
              </div>

              <button
                onClick={onLogout}
                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-red-200
                dark:border-red-700
                text-red-600
                dark:text-red-400
                hover:bg-red-50
                dark:hover:bg-red-900/20
                transition-all
                duration-300
                "
              >
                <FaSignOutAlt />
                Logout
              </button>

            </div>

          ) : (

            <button
              onClick={onLogin}
              className="
              flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-green-700
              hover:bg-green-800
              text-white
              font-medium
              transition-all
              duration-300
              hover:shadow-lg
              "
            >
              <FaSignInAlt />
              Login
            </button>

          )}

          <ThemeToggle
            darkMode={darkMode}
            toggleTheme={toggleTheme}
          />

        </div>

        {/* Mobile Header */}

        <div
          className="
          md:hidden
          flex
          items-center
          gap-3
          "
        >

          <ThemeToggle
            darkMode={darkMode}
            toggleTheme={toggleTheme}
          />

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
            text-slate-700
            dark:text-white
            "
          >

            {menuOpen
              ? <FaTimes size={22} />
              : <FaBars size={22} />
            }

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div
          className="
          md:hidden
          bg-white
          dark:bg-slate-900
          border-t
          border-green-100
          dark:border-slate-700
          px-6
          py-5
          flex
          flex-col
          gap-5
          shadow-xl
          "
        >

          {navigation.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() =>
                setMenuOpen(false)
              }
              className="
              text-gray-700
              dark:text-gray-100
              hover:text-green-700
              dark:hover:text-green-400
              font-medium
              "
            >
              {item.title}
            </a>

          ))}

          {/* Mobile User Section */}

          {user ? (

            <>

              <div
                className="
                px-4
                py-3
                rounded-xl
                bg-green-100
                dark:bg-green-900/30
                text-green-700
                dark:text-green-300
                font-medium
                "
              >
                👋 {user.name}
              </div>

              <button
                onClick={() => {

                  setMenuOpen(false);

                  onLogout();

                }}
                className="
                py-3
                rounded-xl
                border
                border-red-200
                dark:border-red-700
                text-red-600
                dark:text-red-400
                font-medium
                "
              >
                Logout
              </button>

            </>

          ) : (

            <button
              onClick={() => {

                setMenuOpen(false);

                onLogin();

              }}
              className="
              py-3
              rounded-xl
              bg-green-700
              hover:bg-green-800
              text-white
              font-medium
              "
            >
              Login
            </button>

          )}

        </div>

      )}

    </nav>

  );
}

export default Navbar;