import React from 'react';
import {Link, NavLink} from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = props => {
    return (
        <div className="movie-list">
            {props.movies.map(movie => (
                <Link key={movie.id} to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color:"black"}}>{/*//prevent the gross purple, and remove underline*/}
                    <MovieDetails key={movie.id} movie={movie}/>
                </Link>
            ))}
        </div>
    );
}

function MovieDetails({movie}) {
    const {title, director, metascore, stars} = movie;
    return (
        <MovieCard movie={movie}/>
    );
}

export default MovieList;
