import { useEffect, useState } from "react";
import SearchBar from "../componenets/SearchBar";
import MovieCard from "../componenets/MovieCard";
import type { IShow } from "../types/type";

type ListingPageProps = {
  onDetails: (show: IShow) => void;
};

function ListingPage({ onDetails }: ListingPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [shows, setShows] = useState<IShow[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchShows = async (query: string) => {
    setLoading(true);

    const url = query
      ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
      : "https://api.tvmaze.com/shows";

    const res = await fetch(url);
    const data = await res.json();

    if (query) {
      setShows(data.map((item: any) => item.show));
    } else {
      setShows(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchShows(searchQuery);
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-base-200 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold sm:text-5xl">
            Explore Shows
          </h1>

          <p className="mt-3 text-base-content/60">
            Search for your favorite movies and TV shows.
          </p>
        </div>

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : shows.length === 0 ? (
          <div className="alert mx-auto max-w-xl">
            <span>No shows found.</span>
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
      </div>
    </main>
  );
}

export default ListingPage;