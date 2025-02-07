import React from 'react';

export default function MovieCard (props) {
  const { title, director, metascore } = props
  return(
    <div>
       <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  ) 
}
