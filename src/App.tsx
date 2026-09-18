import { useState } from "react";
import HomePage from "./pages/HomePage";
import ListingPage from "./pages/ListingPage";
import Navbar from "./componenets/Nav";
import Footer from "./componenets/Footer";
import MovieModal from "./componenets/MovieModal";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const handleExplore = () => {
    setActivePage("listing");
    window.scrollTo(0, 0);
  };

  const handleDetails = (movie: any) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {activePage === "home" ? (
        <HomePage
          onExplore={handleExplore}
          onDetails={handleDetails}
        />
      ) : (
        <ListingPage onDetails={handleDetails} />
      )}

      <Footer />

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}

export default App;