'use client'  // Enable client-side rendering for this component

import React from 'react'  // Import React library to enable JSX and component features

/*
  This page demonstrates how to use functions to dynamically generate and reuse JSX elements.
  It covers:
    - A function that returns a personalized greeting.
    - A function that returns a greeting based on the time of day.
    - A function to display an alert box conditionally.
  These examples show how encapsulating logic in functions can help to keep your JSX clean and modular.
*/

// A function that returns a personalized welcome message.
// The 'name' parameter is used to customize the greeting.
function welcomeMessage(name) {
    return (
        <h1> hello, { name } </h1>
    );
}

// A function that returns a greeting based on whether it is morning.
// The 'isMorning' parameter is a boolean.
function Greeting(isMorning) {
    if(isMorning) {
        return (
            <h1>Good Morning!</h1>
        );
    } else {
        return (
            <h1>Good Evening!</h1>
        );
    }
}

// A function that returns an alert box component displaying a message.
// It uses a div with a CSS class 'alert' for styling purposes.
function alertBox(message) {
    return (
        <div className='alert'>
            {message}
        </div>
    );
}

// A function that conditionally returns an alert box based on the provided condition.
// If the condition is true, it returns the alertBox component with the message; otherwise, it returns null.
function showAlert(condition, message) {
    if (condition) {
        return alertBox(message);
    } else {
        return null;
    }
}

function Page () {
    // Create a new Date instance to get the current time.
    const now = new Date();

    // Determine if it is morning (before 12:00 PM) based on the current hour.
    const isMorning = now.getHours() < 12;

    // Render the page with several greetings and dynamic components.
    return (
        <div>
            {/* Hard-coded greetings */}
            <h1> hello, alice</h1>
            <h1> hello, bob</h1>
            <h1> hello, john</h1>
            <h1> hello, doe</h1>

            {/* Using the welcomeMessage function to dynamically generate greetings */}
            {welcomeMessage("Tina")}
            {welcomeMessage("hayley")}
            {welcomeMessage("luke")}

            {/* Use the Greeting function to render a time-based greeting */}
            {Greeting(isMorning)}

            {/* Conditionally render an alert box if the condition is true */}
            {showAlert(true, "This is important")}
        </div>
    )
}

export default Page  // Export the Page component as default for use in the app
