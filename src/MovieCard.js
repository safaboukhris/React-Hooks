import React from 'react'
import './movieCard.css';
import StarRating from './StarRating';

function MovieCard({movie})  {
            /* insert props in our card */
return (
    <div className='main'>
        <div className = "card">
            <img src={movie.poster} alt= "movie poster"/>
            <div className="card-content">
                <h1>
                    {movie.title} 
                    <StarRating  value = {movie.rating}  filtreRate={() => {}}/>
                </h1>
                <p>
                    {movie.description}<br/>
                </p>
            </div>
        </div>
    </div>
)
}

export default MovieCard
