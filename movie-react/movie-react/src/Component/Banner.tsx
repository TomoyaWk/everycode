import axios from "../axios";
import  { requests }  from "../request";
import { useEffect, useState } from "react";
import "./Banner.scss";

type movieProps = {
  title?: string,
  name?: string,
  original_name?: string,
  backdrop_path?: string,
  overview?: string,
};


export const Banner = () => {
  const [ movies, setMovies ] = useState<movieProps>({});
  
  useEffect(() => {
    async function fetchData() {
        const req = await axios.get(requests.feachNetflixOriginals);
        console.log(req.data.results);

        setMovies(req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]);
        return req;
    }
    fetchData();
  }, [])

  console.log(movies);

  // descriptionの切り捨てよう関数
  function truncate(str: any, n: number) {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movies?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
};