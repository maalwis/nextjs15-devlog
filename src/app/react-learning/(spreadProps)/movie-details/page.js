'use client';

import React from 'react';
import Movie from "../component/movie";

/*
  MovieDetails Component - Route Entry Point

  This component demonstrates two important React concepts:
  1. Using spread syntax (...) to pass multiple props to child component
  2. Implementing callback functions between parent and child components

  The spread operator allows us to pass all properties of an object as
  individual props without having to list each one explicitly, making the
  code more maintainable as the object structure evolves.

  Next.js Route: This component serves as a page in the Next.js routing system.
*/

function MovieDetails () {
    // Simulated movie data (could come from an API or server component)
    const movie = {
        title : "Inception" ,
        director : "Christopher Nolan" ,
        year : 2010 ,
        rating : 8.8 ,
        genres : [ "Sci-Fi" , "Action" , "Thriller" ]
    };

    /*
      Callback Function: handleMovieSelect

      - This function is defined in the parent component.
      - It takes the movie title as a parameter and shows an alert.
      - When passed to the child component, it creates a communication channel
        that allows the child to trigger actions in the parent.
      - This demonstrates React's unidirectional data flow pattern.
    */
    const handleMovieSelect = ( movieTitle ) => {
        alert ( `You selected: ${ movieTitle }` );
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-teal-700">Movie Information</h1>
            <div className="bg-white rounded-lg shadow-md p-4 max-w-md">
                {/*
                Using the spread operator (...) to pass all properties of the movie object
                as individual props to the Movie component.

                This is equivalent to:
                <Movie
                    title={movie.title}
                    director={movie.director}
                    year={movie.year}
                    rating={movie.rating}
                    genres={movie.genres}
                    onMovieSelect={handleMovieSelect}
                />

                We're also passing the callback function separately since it's not part
                of the movie data object.
                */ }

                <Movie
                    { ...movie }
                    onMovieSelect={ handleMovieSelect }
                />
            </div>
        </div>
    );
}

export default MovieDetails;