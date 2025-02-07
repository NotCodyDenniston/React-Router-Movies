import React from 'react';
import {Link} from 'react-router-dom'
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`}>
     <MovieCard title={title} director={director} metascore={metascore}/>
      </Link>
    </div>
  );
}
