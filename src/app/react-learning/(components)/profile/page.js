import React from 'react'  // Import React to enable JSX and components creation
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";  // Import the Layout components for consistent structure

/*
  Profile Component - Route: '/react-learning/components'

  This components is designed to display user components information.
  It uses a clean UI layout with centered content. Future enhancements can include dynamic data.

  Now restructured to use the shared Layout components for consistent styling.
  The main content area follows the same pattern as other pages for visual consistency.
*/

function Profile () {
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
                {/* Header or title for the Profile page */}
                <h2>User Profile</h2>
                {/* Placeholder content that can be replaced with dynamic components data */}
                <p>This page will display user profile information.</p>
            </main>

            {/* Render the Footer components at the bottom */}
            <Footer />
        </Layout>
    )
}

export default Profile  // Export the Profile components for routing