import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
// Components

function Home (){ 

    useEffect(() => {
       fetchMovies();
    }, []);

    const[results,setResults] = useState([]);

    const fetchMovies = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c6350019bcda4c7330a0fdfa4d30f53d&language=en-US&page=1");
        const data = await res.json();
        console.log(data);
        
        setResults(data.results);
    }

    return (
       
        <div className="page-info">
            {results.map((item, i) => (
                <div className="popular-movies" key={i}>
                    {/* <Link to={`/single/${item.id}`}>
                        <h3 key={item.id}>{item.title}</h3>
                    </Link>     */}
                    <Link to={`/single/${item.id}`} >
                        <img src={"https://image.tmdb.org/t/p/w200" +item.poster_path} alt={item.title} />
                    </Link>
                    <p>Ratings: {item.vote_average}/10</p>
                    <p>Release Date: {item.release_date}</p>
                </div>   
         ))}
         </div>
    );
}

export default Home;