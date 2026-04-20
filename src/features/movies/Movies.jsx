import React from "react";
import { useGetMoviesQuery } from "../../services/moviesAPI";

function Movies() {
  var { isLoading, data } = useGetMoviesQuery();
  return (
    <div>
      <h1>Movies</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        data?.map((movie, i) => {
          return (
            <div key={i}>
              <h3>{movie.title}</h3>
              <p>{movie.plot}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Movies;
