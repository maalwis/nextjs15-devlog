import React from 'react';

/*
  Movie Component

  This component receives movie data and a callback function as props:
  - title: The title of the movie
  - director: The director's name
  - year: The release year
  - rating: The movie's rating (out of 10)
  - genres: An array of genre categories
  - onMovieSelect: A callback function triggered when the movie is selected

  The component demonstrates how to receive and handle props that were passed
  using the spread operator syntax. This approach simplifies the parent component's
  code but requires careful documentation in the child component about expected props.

  Best Practice: Even though props are spread from the parent, we still destructure
  them explicitly here for clarity and to document the component's API.
*/

function Movie({ title, director, year, rating, genres = [], onMovieSelect }) {
    /*
      Event Handler: handleSelect

      - Local event handler that wraps the received callback.
      - Provides an abstraction layer that could include additional logic.
      - Calls the parent-provided callback with the movie title.
      - This pattern allows the component to be self-contained while still
        communicating with its parent.
    */
    const handleSelect = () => {
        // We could add validation or additional logic before calling the callback
        onMovieSelect(title);
    };

    return (
        <div
            className="cursor-pointer transition-all hover:bg-teal-50 p-4 rounded-md border border-gray-100"
            onClick={handleSelect}
        >
            {/* Movie information with consistent styling */}
            <div className="flex items-start gap-3">
                <span className="text-2xl text-teal-600">🎬</span>
                <div className="flex-1">
                    <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
                    <p className="text-gray-600 text-sm">Director: {director}</p>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-500 text-sm">{year}</span>
                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
              {rating}/10
            </span>
                    </div>

                    {/* Conditional rendering for genres array */}
                    {genres.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                            {genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded"
                                >
                  {genre}
                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Movie;