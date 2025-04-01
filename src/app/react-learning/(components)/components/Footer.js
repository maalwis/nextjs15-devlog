import React from 'react'  // Import React to enable JSX and components creation

/*
  Footer Component

  This reusable components renders the footer of the application.
  It provides supplemental information and maintains consistency across pages.

  The styling has been updated to ensure it sticks to the bottom of every page.
  It maintains visual consistency with the header through complementary styling.
*/

function Footer () {
    // Inline styles for the footer container
    const footerStyle = {
        background: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        width: "100%"
    };

    return (
        <footer style={footerStyle}>
            {/* Display a simple footer text */}
            <p>&copy; {new Date().getFullYear()} Abishek Alwis. All rights reserved.</p>
        </footer>
    )
}

export default Footer  // Export the Footer components for reuse in other pages