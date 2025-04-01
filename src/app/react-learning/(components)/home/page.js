import React from 'react'                           // Import React to use JSX and components features
import Header from "../components/Header"          // Import the reusable Header components with navigation
import Footer from "../components/Footer"          // Import the reusable Footer components
import Layout from "../components/Layout"          // Import the Layout components for consistent structure

/*
  Home Component - Route: '/react-learning/home'

  This components serves as the main landing page for the React learning module.
  It demonstrates components composition by including the Header and Footer components.
  The Header now has a fully designed navigation bar that links to other pages.
  The layout follows a simple UI structure that can be enhanced with additional styling.

  It now uses the Layout components for consistent page structure across the application.
  The content is wrapped in a main tag with consistent styling for the main content area.
*/

function Home () {
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
                <h2>Welcome to the React Learning Home Page</h2>
                <p>Explore our pages to learn more about React components, JSX, and modern UI development.</p>
            </main>

            {/* Render the Footer components at the bottom */}
            <Footer />
        </Layout>
    )
}

export default Home  // Export the Home components for use in routing