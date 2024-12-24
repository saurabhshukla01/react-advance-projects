import { Routes, Route } from "react-router-dom";
import { MovieDetails, MovieList, PageNotFound, Search } from "../pages/index";

const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<MovieList title="movie/now_playing" pagetitle="Home" />} />
        <Route
          path="movie/popular"
          element={<MovieList title="movie/popular" pagetitle="Popular Movie" />}
        />
        <Route
          path="movie/toprated"
          element={<MovieList title="movie/top_rated" pagetitle="Top Rated Movie" />}
        />
        <Route
          path="movie/upcoming"
          element={<MovieList title="movie/upcoming" pagetitle="Upcoming Movie" />}
        />
        <Route path="movie/:id" element={<MovieDetails pagetitle="Movie Details" />} />
        <Route path="search/movie" element={<Search title="search/movie" pagetitle="Search Movies" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
