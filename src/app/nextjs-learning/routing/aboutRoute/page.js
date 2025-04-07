// This file defines a static route at '/nextjs-learning/routing/aboutRoute', demonstrating deeper nesting in the App Router.
// It’s a Server Component, ideal for static content like an 'about' page, rendering efficiently on the server.

import React from 'react'

// Named 'AboutPage' for clarity and consistency with React conventions.
function AboutPage() {
    // Returns a simple layout with centered text, styled for a clean presentation.
    return (
        // This div provides a full-width container with padding and a light-gray background for contrast.
        <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#ecf0f1'
        }}>
            // Heading with a vibrant red color to make the page stand out.
            <h1 style={{ color: '#e74c3c' }}>About Route</h1>
            // Paragraph displaying the URL, with a subtle gray color and slightly larger font for readability.
            <p style={{ fontSize: '1.1rem', color: '#95a5a6' }}>
                URL: /nextjs-learning/routing/aboutRoute
            </p>
        </div>
    )
}

// Exported as default, mapping this home to its respective route in the Next.js application.
export default AboutPage