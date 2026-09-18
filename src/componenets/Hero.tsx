type HeroProps = {
  onExplore: () => void;
};

function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-150 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/30" />

      <div className="relative mx-auto flex min-h-150 max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl text-white">
          <div className="badge badge-primary mb-5 px-4 py-3">
            Discover your next favorite show
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-6xl">
            Explore Amazing
            <span className="block text-primary">Movies & Shows</span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Search through thousands of TV shows, discover new favorites, and
            explore detailed information about the shows you love.
          </p>

          <button onClick={onExplore} className="btn btn-primary btn-lg">
            Explore Now →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;