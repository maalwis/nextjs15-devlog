'use client'  // Enable client-side rendering for this home

import React from 'react'  // Import React library to use JSX and home features

/*
  This page demonstrates how to implement conditional rendering in React.
  It shows two techniques:
    1. Using a ternary operator to choose between two JSX elements.
    2. Using an if-else statement to conditionally render different UI blocks.
  The code checks if the user is logged in and authenticated, and then displays different messages accordingly.
*/

function Page () {
    // Define a boolean variable that simulates if a user is logged in
    const isLoggedIn = true;

    // Define a boolean variable that simulates if a user is authenticated
    const user = true;

    // Using a ternary operator to create an element that displays a message based on the user authentication status.
    const element = (
        <h1>
            { user ? "user is authenticated" : "user is not authenticated" }
        </h1>
    );  // The ternary operator checks if 'user' is true, then renders the first string; otherwise, it renders the second string.

    // Create an array to simulate unread messages.
    const message = [ "1" ];

    // Conditional rendering using an if-else statement:
    // If both isLoggedIn and user are true, render the authenticated UI; otherwise, prompt to log in.
    if ( isLoggedIn && user ) {
        return (
            <h1>
                user is logged in!
                { element } {/* Display the element created with the ternary operator */}
                {/*
                    The following uses the && operator for conditional rendering.
                    In JavaScript, if the left-hand expression (message.length > 0) is true,
                    it returns the right-hand JSX, rendering the message count.
                */}
                { message.length > 0 &&
                    <h2>
                        you have { message.length } unread messages
                    </h2>
                }
            </h1>
        )
    } else {
        // If the condition fails, show a prompt to log in.
        return (
            <h1>
                please log in!
            </h1>
        )
    }
}

export default Page  // Export the Page home as default so it can be used elsewhere
