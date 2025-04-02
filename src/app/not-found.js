import React from 'react';
import Link from 'next/link';

/*
  NotFound Component - Special 404 Page in Next.js

  This file is automatically used as the custom 404 error page in Next.js 15.
  When a user tries to access a route that does not exist, Next.js renders this component.
  This improves the user experience by providing a styled and informative error message.
*/

function NotFound() {
    return (
        <div style={{
            textAlign: 'center', // Center-align the content
            padding: '50px', // Add padding for spacing
            backgroundColor: '#f8f9fa', // Light gray background
            minHeight: '100vh', // Make it take full viewport height
            display: 'flex', // Use flexbox for centering
            flexDirection: 'column', // Stack elements vertically
            justifyContent: 'center', // Center content vertically
            alignItems: 'center' // Center content horizontally
        }}>
            <h1 style={{
                fontSize: '36px', // Large heading size
                color: '#d9534f', // Red color for emphasis
                marginBottom: '10px' // Space below heading
            }}>
                404 - Page Not Found
            </h1>
            <p style={{
                fontSize: '18px', // Set font size
                color: '#6c757d', // Gray color for text
                marginBottom: '20px' // Space below paragraph
            }}>
                Sorry, we couldn't find the page you're looking for.
            </p>
            <Link href="/" style={{
                textDecoration: 'none', // Remove underline
                backgroundColor: '#007bff', // Blue button background
                color: 'white', // White text color
                padding: '10px 20px', // Padding for button-like effect
                borderRadius: '5px', // Rounded corners
                fontSize: '16px', // Set font size
                transition: 'background 0.3s ease', // Smooth hover effect
                display: 'inline-block', // Ensure proper spacing and alignment
                textAlign: 'center'
            }}>
                Go to Homepage
            </Link>
        </div>
    );
}

export default NotFound;
