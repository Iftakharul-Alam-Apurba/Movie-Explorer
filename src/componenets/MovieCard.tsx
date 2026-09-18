import type { IShow } from "../types/type";


type MovieCardProps = {
  movie: IShow;
  onDetails: (show: IShow) => void;
};

function MovieCard({ movie, onDetails }: MovieCardProps) {
  const show = movie;
  const poster =
    show.image?.medium ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const releaseDate = show.premiered
    ? new Date(show.premiered).toLocaleDateString()
    : "Unknown";

  const rating = show.rating?.average ?? "N/A";

  return (
    <div className="card bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <figure className="h-80 overflow-hidden">
        <img
          src={poster}
          alt={show.name}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/300x450?text=No+Image";
          }}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title line-clamp-1">
          {show.name}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-sm text-base-content/60">
            {releaseDate}
          </span>

          <div className="badge badge-warning gap-1">
            ⭐ {rating}
          </div>
        </div>

        <div className="card-actions mt-3">
          <button
            onClick={() => onDetails(show)}
            className="btn btn-primary btn-sm w-full"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;