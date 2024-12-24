import { useSearchParams } from "react-router-dom";
import { Cards } from "../components/index";
import { useFetch, useTitle } from "../hooks/main";
const Search = (props) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { movies } = useFetch(props.title, query);
  useTitle(props.pagetitle)
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No Result Found "${query}"`
            : `Result For "${query}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => {
            return <Cards key={movies.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Search;
