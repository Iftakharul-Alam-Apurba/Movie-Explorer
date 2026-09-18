import { useEffect, useState } from "react";
import Hero from "../componenets/Hero";
import MovieCard from "../componenets/MovieCard";
import type { IShow } from "../types/type";
type HomePageProps = {
  onExplore: () => void;
  onDetails: (show: IShow) => void;
};

function HomePage({ onExplore, onDetails }: HomePageProps) {
  const [shows, setShows] = useState<IShow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchShows = async () => {
    const res = await fetch("https://api.tvmaze.com/shows");
    const data = await res.json();

    setShows(data.slice(0, 8));
    setLoading(false);
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <>
      <Hero onExplore={onExplore} />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured Shows
          </h2>

          <p className="mt-3 text-base-content/60">
            Check out some popular shows from TVMaze.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                movie={show}
                onDetails={onDetails}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default HomePage;