import { Link } from "react-router-dom";
import pageNotFound from "../assets/images/pagenotfound.png";
import { Button } from "../components";
import { useTitle } from "../hooks/main"
const PageNotFound = (props) => {
  useTitle(props.pagetitle)
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray font-bold my-10 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={pageNotFound} alt="pagenotfound" />
          </div>
        </div>
        <div>
          <div className="flex justify-center my-4">
            <Link to="/">
              <Button>Back To Cinematic</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
