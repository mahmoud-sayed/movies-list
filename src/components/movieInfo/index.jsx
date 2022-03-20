import React from 'react';
import './style.scss';

const MovieInfo = (props) => {

    return (
        <div className="movie-info">
            <div className="name">
                <h3>Movie Name</h3>
                <p>{props.moviesName}</p>
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>{props.moviesDescription}</p>
            </div>
        </div>
    );
}

export default MovieInfo;