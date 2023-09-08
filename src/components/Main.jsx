import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * 20)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((Response) => {
      setMovies(Response.data.results);
    });
  }, []);
  console.log(movie);
  
  const truncateString=(str,num)=>{
    if (str?.length>num){
      return str.slice(0,num) + "..."
    }
    else{
      return str
    }
  }
  return (
    <div className="mt-16 w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl text-bold"> {movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-white border-gray-300 mr-2 px-5 py-2 text-black">
              Play{" "}
            </button>
            <button className="border px-5 py-2 border-gray-300 text-white">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm"> Released : {movie?.release_date}</p>
          <p className="text-gray-200 w-full md:w-[70%] lg:w-[50%] xl:w-[35%]"> {truncateString(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
