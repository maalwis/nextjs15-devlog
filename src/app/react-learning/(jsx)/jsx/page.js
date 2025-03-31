'use client'  // Enable client-side rendering for this component

import React from 'react'  // Import React library to use JSX and component features

/*
  This page illustrates the basics of JSX in React.
  JSX is a syntax extension that allows you to write HTML-like code inside JavaScript.
  It explains how to embed JavaScript expressions in JSX, how to apply inline styles, and how events are handled.
  Key concepts include:
    - Embedding expressions within curly braces {}
    - Using className instead of class for styling
    - Attaching event handlers
*/

function Page () {
    // Define a variable 'name' to be used in JSX expressions.
    const name = "React-learning";

    // Define a label for buttons.
    const buttonLabel = "button";

    // Define a URL for an image that will be rendered dynamically.
    const imageUrl = "https://placehold.co/400x400";

    // The return statement defines what UI is rendered.
    return (
        <div>
            {/* Render a heading with a CSS class 'center' */}
            <h1 className="center">HTML like code within javascript</h1> {/* Note: Use className for CSS classes in JSX */}

            {/* Render a greeting that embeds a JavaScript variable 'name' within the JSX */}
            <h1> hello, this, { name }</h1> {/* The expression {name} is evaluated to display the variable value */}

            {/* Render a button with inline styles defined as a JavaScript object */}
            <button style={ { background: "green", color: "wheat" } }>
                { buttonLabel }  {/* The button displays text stored in the buttonLabel variable */}
            </button>

            {/* Render a button that triggers an alert when clicked */}
            <button onClick={ () => alert("Hello jsx!") }>
                { buttonLabel }  {/* The onClick event uses an arrow function to call alert with a message */}
            </button>

            {/* Render an image element with dynamic source and alt text */}
            <img src={ imageUrl } alt={ 'Dynamic Image' }/>
        </div>
    )
}

export default Page  // Export the Page component as default so it can be imported in other parts of the app
