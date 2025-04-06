'use client';

import React from 'react';
import Book from "../component/book";

/*
  BookInfo Component - Route Entry Point

  This component demonstrates the concept of callbacks in React, by passing
  a function (`handleBookClick`) from the parent (BookInfo) to a child component (Book)
  via props. When the user interacts with the Book component, the callback is triggered
  and performs an action defined by the parent (here, it shows an alert).

  This simulates a real-world use case where a parent handles an event triggered
  in a child component, such as selecting a book from a list.

  Next.js Route: This component serves as a page in the Next.js routing system.
*/

function BookInfo () {
    // Simulated book data (could come from an API or server component)
    const book = {
        name : "The Great Gatsby" ,
        author : "F. Scott Fitzgerald" ,
        year : 1925 ,
    };

    /*
      Callback Function: handleBookClick

      - This function is defined in the parent component.
      - It takes a `book` name as a parameter and shows an alert.
      - It will be triggered from the child component (Book) when the book is clicked.
      - In a real application, this might update state, navigate to a detail page, etc.
    */
    const handleBookClick = ( bookName ) => {
        alert ( `Book clicked: ${ bookName }` );
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-indigo-700">Book Information</h1>
            <div className="bg-white rounded-lg shadow-md p-4 max-w-md">
                {/*
          Passing props to the Book component:
          - book: The complete book object
          - onBookClick: The callback function to handle click events
        */ }
                <Book
                    name={ book.name }
                    author={ book.author }
                    year={ book.year }
                    onBookClick={ handleBookClick }
                />
            </div>
        </div>
    );
}

export default BookInfo;