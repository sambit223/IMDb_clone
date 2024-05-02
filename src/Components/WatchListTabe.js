import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const WatchListTabe = () => {
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("MyWatchList")) {
      const likedMovie = JSON.parse(localStorage.getItem("MyWatchList"));
      setFavMovies(likedMovie);
    }
  }, []);

  const deleteHandler = useCallback((movie) => {
    const updatedMovies = favMovies.filter((elem) => {
      return movie.id !== elem.id;
    });
    localStorage.setItem("MyWatchList", JSON.stringify(updatedMovies));
    setFavMovies(updatedMovies);
  } , [favMovies]);

  return (
    <div className="border border-gray-300 shadow-md m-5 rounded-md p-2 bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border border-black-500 mb-5">
          <tr>
            <th className="p-2 m-4">Name</th>
            <th className="p-2 m-4">Rating</th>
            <th className="p-2 m-4">Popularity</th>
            <th className="p-2 m-4">release date</th>
            <th className="p-2 m-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {favMovies.length > 0 &&
            favMovies?.map((movie) => {
              return (
                <tr>
                  <td className="flex items-center space-x-2">
                    <img
                      src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
                      alt=""
                      className="w-[7rem] h-[7rem]"
                    />
                    <div>{movie?.title}</div>
                  </td>
                  <td>{movie?.vote_average}</td>
                  <td>{movie?.popularity}</td>
                  <td>{movie?.release_date}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="cursor-pointer"
                      onClick={() => deleteHandler(movie)}
                    ></FontAwesomeIcon>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default WatchListTabe;
