import React from 'react'  // Import React to enable JSX and components creation
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";  // Import the Layout components for consistent structure

/*
  About Component - Route: '/react-learning/about'

  This components provides information about the application or developer.
  It is styled for readability and a pleasant user experience.
  You can expand this section with more detailed content later.

  Now uses the Layout components to maintain consistent page structure.
  The main content area styling matches other pages in the application.
*/

function About () {
    return (
        <Layout>
            {/* Render the Header components with navigation */}
            <Header />

            {/* Main content area with consistent styling */}
            <main style={{
                flex: "1",
                padding: "40px 20px",
                textAlign: "center",
                maxWidth: "1200px",
                margin: "0 auto",
                width: "100%"
            }}>
                {/* Title for the About page */}
                <h2>About Us</h2>
                {/* Placeholder description text */}
                <p>This page contains information about the application and its creator.</p>
            </main>

            {/* Render the Footer components at the bottom */}
            <Footer />
        </Layout>
    )
}

export default About  // Export the About components for routing