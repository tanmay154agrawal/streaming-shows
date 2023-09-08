import axios from "axios";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL,rowId }) => {
  const [movies, setMovies] = useState([]);

  const slideLeft= ()=>{
    var slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft-500
  }
  const slideRight= ()=>{
    var slider=document.getElementById('slider'+rowId)
    slider.scrollLeft=slider.scrollLeft+500
  }

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    }, fetchURL);
    // console.log(movies)
  });
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="flex relative items-center group">
        <MdChevronLeft onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block"
        />

        <div
          id={'slider'+rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide  scroll-smooth relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
