function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 p-10 text-base-content">
      <aside>
        <div className="text-2xl font-bold text-primary">
          🎬 Movie Explorer
        </div>

        <p>
          Explore amazing movies and TV shows with Movie Explorer.
        </p>

        <p>
          © {new Date().getFullYear()} Movie Explorer. All rights reserved.
        </p>

        <p className="text-sm text-base-content/60">
          Data provided by TVMaze.
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noreferrer"
            className="link link-hover"
          >
            TVMaze API
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="link link-hover"
          >
            GitHub
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;