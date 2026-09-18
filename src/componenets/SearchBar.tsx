type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

function SearchBar({
  searchQuery,
  setSearchQuery,
}: SearchBarProps) {
  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="mx-auto mb-10 max-w-3xl">
      <div className="join w-full">
        <label className="input input-lg join-item flex flex-1 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for a show..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {searchQuery && (
            <button
              onClick={handleClear}
              className="btn btn-circle btn-ghost btn-sm"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </label>

        <button className="btn btn-primary btn-lg join-item">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;