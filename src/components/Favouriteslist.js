import React , { useState, useEffect } from 'react';
import { getStorage, setStorage, removeItemFromStorage  } from '../utilities/storageMaker';
//import image from '../images/moviedblogo.png';

const Favouriteslist = () => {

    useEffect(() => {
       const favsFromStorage = getStorage();
       setFavs(favsFromStorage); 
    }, []);

    const [favs, setFavs] = useState([]);

    const handleRemoveFromFavourites = (index) => {
        removeItemFromStorage(index);
        let favsCopy = [...favs];
        favsCopy.splice(index, 1);
        setFavs(favsCopy);
    }

    const displayMovies = (movies) => {
        return movies.map((movie, i) => {
            return (
                <div className="favourite-movies" key={i}>
                    {/* <h2>{movie.title}</h2> */}
                    <img src={"https://image.tmdb.org/t/p/w200"+ movie.poster_path} alt={movie.title}></img>
                    <p>Ratings: {movie.vote_average}/10</p>
                    <p>Release Date:{movie.release_date}</p>
                    {/* <p>{movie.overview}</p> */}
                    <button className="unfav-button" onClick={() => { handleRemoveFromFavourites(i) }}> - Remove From Favourites</button> 
                </div>
            );
        })
    }

    return (
        <main>
            <section>
                <div className="favourites-items">
                    <h2>&#9733; My Favourites &#9733;</h2>
                    {favs.length > 0 ? displayMovies(favs) : <p>No favourites to display...</p>}
                </div>
            </section>
        </main>
    )

}


export default Favouriteslist;