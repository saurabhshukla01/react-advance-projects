import { useEffect, useState } from "react";
import { API_BASE_URL, API_TOKEN } from "../config";

const useFetch = (endpoint, query = "") => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}${endpoint}?query=${encodeURIComponent(query)}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [endpoint, query]);
  return { movies };
};

export default useFetch;
