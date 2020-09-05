import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getStorage, setStorage, isItemInStorage, removeItemFromStorage  } from '../utilities/storageMaker';


const Single = (props) => {

    const id = props.match.params.id;
    const[result, setResult] = useState(null);
    const [favIndexNumber, setFavIndexNumber] = useState(-1);

    useEffect(() => {
        const fetchItem = async () => {

            const fetchItem = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9df7fbded8e0f04fceec116a134b328f&language=en-US`
            );
            const item = await fetchItem.json();
            setResult(item);
            setFavIndexNumber(isItemInStorage(item));
        };

        fetchItem();
    },[id]);

    const handleAddToFavourites = () => {
        
        let favsFromStorage = getStorage();
        favsFromStorage.push(result);
        setStorage(favsFromStorage);
        setFavIndexNumber(favsFromStorage.length - 1);

    }

    const handleRemoveFromFavourites = () => {
        removeItemFromStorage(favIndexNumber);
        setFavIndexNumber(-1); 
    }

    return (
        
        <div className="single-content"> 

           {result === null ? <p>Fetching data...</p> : 
           
            <div className="single-movie">
                <div className="single-poster-left">
                    <h2>{result.title}</h2>
                    <img src={"https://image.tmdb.org/t/p/w200"+ result.poster_path} alt="movie poster"></img>
                    <p>Ratings: {result.vote_average}/10</p>
                    <p>Release Date:{result.release_date}</p>
                </div> 
                <div className="single-overview-right">   
                    <div className="single-overview">
                        <h3>Overview:</h3>
                        <p>{result.overview}</p>
                    </div>    
                    <div className="buttons">
                        {favIndexNumber >= 0 ? 
                            <button className="unfav-button" onClick={handleRemoveFromFavourites}> - Remove From Favourites</button> :
                            <button className="fav-button" onClick={handleAddToFavourites}> + Add to Favourites</button>}
                    </div>    
                    <div className="back-home">
                        <Link to="/">Home</Link>
                    </div>
                </div>    
            </div>
           
           }
                     
        </div>
      );

 } // End Single





export default Single;