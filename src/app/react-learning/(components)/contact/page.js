import React from 'react'  // Import React to enable JSX and components creation
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";  // Import the Layout components for consistent structure

/*
  Contact Component - Route: '/react-learning/contact'

  This components is intended to provide users with a way to contact the application owner.
  It is designed with a clean, centered layout.
  You can later expand this with a form and additional contact details.

  Updated to use the shared Layout components for consistent page structure.
  The main content area is styled consistently with other pages.
*/

function Contact () {
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
                {/* Title for the Contact page */}
                <h2>Contact Us</h2>
                {/* Placeholder text for contact information */}
                <p>You can reach us at contact@example.com.</p>
            </main>

            {/* Render the Footer components at the bottom */}
            <Footer />
        </Layout>
    )
}

export default Contact  // Export the Contact components for routing