import { useEffect } from "react";

type MovieModalProps = {
  movie: any;
  onClose: () => void;
};

function MovieModal({ movie, onClose }: MovieModalProps) {
  useEffect(() => {
    if (!movie) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const poster =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/600x900?text=No+Image";

  const releaseDate = movie.premiered
    ? new Date(movie.premiered).toLocaleDateString()
    : "Unknown";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <div
      className="modal modal-open"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-box max-w-4xl p-0">
        <button
          onClick={onClose}
          className="btn btn-circle btn-sm absolute right-3 top-3 z-10"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">
          <div className="max-h-150">
            <img
              src={poster}
              alt={movie.name}
              className="h-full max-h-150 w-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              {movie.name}
            </h2>

            <div className="mb-5 flex flex-wrap gap-2">
              <div className="badge badge-warning">
                ⭐ {movie.rating?.average ?? "N/A"}
              </div>

              <div className="badge badge-outline">
                {releaseDate}
              </div>

              {movie.status && (
                <div className="badge badge-outline">
                  {movie.status}
                </div>
              )}
            </div>

            <p className="mb-6 leading-7 text-base-content/70">
              {summary}
            </p>

            {movie.genres?.length > 0 && (
              <div className="mb-5">
                <h3 className="mb-2 font-semibold">Genres</h3>

                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre: string) => (
                    <span key={genre} className="badge badge-primary">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2 text-sm">
              {movie.language && (
                <p>
                  <strong>Language:</strong> {movie.language}
                </p>
              )}

              {movie.runtime && (
                <p>
                  <strong>Runtime:</strong> {movie.runtime} minutes
                </p>
              )}

              {movie.network?.name && (
                <p>
                  <strong>Network:</strong> {movie.network.name}
                </p>
              )}
            </div>

            <div className="modal-action">
              <button onClick={onClose} className="btn">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;