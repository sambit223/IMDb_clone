import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("MyWatchList")) {
      setWatchList(JSON.parse(localStorage.getItem("MyWatchList")));
    }
  }, []);

  useEffect(() => {
    setLoader(true);
    async function getData(pageNo) {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/movie/day",
        params: { language: "en-US", page: pageNo },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDBlNGY4NWI5NTlkNWRiNDA3YmQ5ZDk0YTljMGQxMyIsInN1YiI6IjY2MTE5NmI4YzE2MDZhMDE3Y2VmNjgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEDq_3_sJu0Dv9GxquRXt-FEOJSY_hOQ30b5z0js2ck",
        },
      };
      const response = await axios.request(options);
      console.log(response);
      setMovies(response.data.results);
      setPage(pageNo);
    }
    getData(page);
    setLoader(false);
  }, [page]);

  const toggleWatchList = (movie) => {
    if (watchList?.includes(movie)) {
      setWatchList((prev) => {
        const filteredList = prev.filter((m) => m.id !== movie.id);
        localStorage.setItem("MyWatchList", JSON.stringify(filteredList));
        return filteredList;
      });
    } else {
      setWatchList((prev) => {
        const updatedList = [...prev, movie];
        localStorage.setItem("MyWatchList", JSON.stringify(updatedList));
        return updatedList;
      });
    }
  };

  const onClickNext = () => {
    setPage((prev) => prev + 1);
  };

  const onClickPrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="text-center text-white text-2xl m-4 ">
            Trending Movies
          </div>
          <div className="flex flex-wrap">
            {movies.map((elem) => {
              const isInWatchList = watchList.some(
                (item) => item.id === elem.id
              );
              return (
                <div
                  key={elem?.id}
                  className="w-[12rem] m-3 text-center text-wrap transition-transform duration-300 transform hover:scale-105"
                >
                  <div
                    className="relative w-[160px] h-[30vh] bg-slate-400 border border-black-200 cursor-pointer"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${elem.poster_path})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute top-1 right-1 bg-black h-[1.5rem] w-[1.5rem] flex justify-center text-center items-center">
                      {isInWatchList ? (
                        <FontAwesomeIcon
                          onClick={() => {
                            toggleWatchList(elem);
                          }}
                          style={{ color: "ff0000" }}
                          icon={faHeart}
                        />
                      ) : (
                        <FontAwesomeIcon
                          onClick={() => {
                            toggleWatchList(elem);
                          }}
                          className="text-white"
                          icon={faHeart}
                        />
                      )}
                    </div>
                  </div>
                  <div className="bg-white w-[160px] text-wrap text-black">
                    {elem?.original_title}
                    <div>
                      <FontAwesomeIcon
                        style={{ color: "FFD43B", marginRight: "8px" }}
                        icon={faStar}
                      ></FontAwesomeIcon>
                      Rating :{" "}
                      <strong className="text-xs">{elem?.vote_average}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination page={page} onPrev={onClickPrev} onNext={onClickNext} />
        </>
      )}
    </div>
  );
};
export default Movies;
