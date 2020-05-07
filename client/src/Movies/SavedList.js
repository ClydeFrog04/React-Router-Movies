import React from 'react';
import {Link, NavLink} from "react-router-dom";

const SavedList = props => (
    <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
            <NavLink to={`/movies/${movie.id}`}
                     style={{textDecoration: 'none', color: "green", border: "1px solid black", borderRadius: "4px"}}>
                <span className="saved-movie">{movie.title}</span>
            </NavLink>
        ))}
        <Link to={"/"}
              style={{textDecoration: 'none', color: "black"}}>{/*//prevent the gross purple, and remove underline*/}
            <div className="home-button">Home</div>
        </Link>
    </div>
);

export default SavedList;
