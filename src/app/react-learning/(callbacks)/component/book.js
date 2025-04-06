import React from 'react';

/*
  Book Component

  This component receives multiple props:
  - name: The title of the book
  - author: The author of the book (optional)
  - year: The publication year (optional)
  - onBookClick: A callback function to be called when the book is clicked

  The goal is to demonstrate how a child component can invoke a function
  passed down from its parent using props. This approach allows the parent
  to handle child-level events such as clicks, selections, form submissions, etc.

  This pattern follows React's unidirectional data flow principle - data flows down
  as props, and events flow back up through callbacks.
*/

function Book ( { name , author , year , onBookClick } ) {
    /*
      Event Handler: handleClick

      - This function is defined inside the child component.
      - It calls the `onBookClick` function received via props
        and passes the book name as an argument.
      - This creates a layer of abstraction that allows the component
        to perform additional logic before calling the parent's callback.
    */
    const handleClick = () => {
        // We could add additional logic here if needed
        onBookClick ( name );
    };

    return (
        <div
            className="cursor-pointer transition-all hover:bg-indigo-50 p-4 rounded-md"
            onClick={ handleClick }
        >
            {/* Render the book's information with consistent styling */ }
            <div className="flex items-center gap-3">
                <span className="text-2xl text-indigo-600">📘</span>
                <div>
                    <h2 className="font-semibold text-lg text-gray-800">{ name }</h2>
                    { author && <p className="text-gray-600 text-sm">{ author }</p> }
                    { year && <p className="text-gray-500 text-xs">{ year }</p> }
                </div>
            </div>
        </div>
    );
}

export default Book;