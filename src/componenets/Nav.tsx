import { useState } from "react";
type NavbarProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const handlePageChange = (page: string) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/95 shadow-md backdrop-blur">
      <div className="navbar-start">
        <button
          onClick={() => handlePageChange("home")}
          className="btn btn-ghost text-xl font-bold text-primary sm:text-2xl"
        >
          🎬 Movie Explorer
        </button>
      </div>

      <div className="navbar-end">
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => handlePageChange("home")}
            className={`btn btn-ghost ${
              activePage === "home" ? "text-primary" : ""
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handlePageChange("listing")}
            className={`btn btn-ghost ${
              activePage === "listing" ? "text-primary" : ""
            }`}
          >
            Explore
          </button>

          <button
            onClick={() => handlePageChange("listing")}
            className="btn btn-primary"
          >
            Browse Shows
          </button>
        </div>
        <div className="dropdown dropdown-end md:hidden">
          <button
            tabIndex={0}
            className="btn btn-square btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <button onClick={() => handlePageChange("home")}>
                  Home
                </button>
              </li>

              <li>
                <button onClick={() => handlePageChange("listing")}>
                  Explore
                </button>
              </li>

              <li>
                <button onClick={() => handlePageChange("listing")}>
                  Browse Shows
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;