import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {
  let movieId = props.match.params.movieId; // match.params로 값 넘겨받기
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    // console.log(props.match);

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });
  }, []);

  return (
    <div>
      {/* Header */}

      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      {/* Body */}

      {/* Movie Info */}
      <MovieInfo movie={Movie} />

      <br />
      {/* Actors Grid */}

      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
      ></div>
      <button>Toggle Actor View</button>
    </div>
  );
}
export default MovieDetail;
