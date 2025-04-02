import React from 'react';
import Link from 'next/link';

/*
  Catch-All Route Page Component - Route: '/nextjs-learning/routing/catchAllSegments/docs/[...slug]'

  This component demonstrates the concept of catch-all routes in Next.js 15.
  Catch-all routes allow handling multiple dynamic segments in the URL.
*/

function Page({ params }) {
    return (
        <div style={{
            backgroundColor: '#fff', // Set background color to white
            padding: '20px', // Add padding for spacing
            borderRadius: '6px', // Round the corners of the container
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)' // Apply a subtle box shadow
        }}>
            <h2 style={{
                color: '#2c3e50', // Dark blue-gray color for the heading
                borderBottom: '2px solid #3498db', // Add a bottom border in blue
                paddingBottom: '10px' // Add padding to a separate text from a border
            }}>
                Catch-All Route Lesson
            </h2>

            <p style={{
                fontSize: '16px', // Set font size for readability
                lineHeight: '1.6', // Increase line height for better spacing
                color: '#333', // Set text color to dark gray
                margin: '15px 0' // Add margin for spacing
            }}>
                This page demonstrates catch-all routing in Next.js 15. The current URL path segments are:
            </p>

            <code style={{
                display: 'block', // Display as a block element
                padding: '12px', // Add padding for readability
                backgroundColor: '#f1f1f1', // Light gray background for contrast
                borderRadius: '4px', // Round the corners
                fontFamily: 'monospace', // Use monospace font for code-like appearance
                marginBottom: '20px' // Add margin to separate elements
            }}>
                {params?.slug ? params.slug.join('/') : 'No dynamic segments'}
                {/* If 'params.slug' exists, join the segments with '/' else show 'No dynamic segments' */}
            </code>

            <div style={{
                marginTop: '30px' // Add top margin for spacing
            }}>
                <h3 style={{ color: '#2c3e50' }}>Navigation Examples:</h3>
                <ul style={{
                    listStyleType: 'none', // Remove default list bullet points
                    padding: '0' // Remove default padding
                }}>
                    <li style={{ margin: '10px 0' }}>
                        <Link href="/nextjs-learning/routing/catchAllSegments/docs/feature" style={{
                            color: '#3498db', // Set link color to blue
                            textDecoration: 'none', // Remove underline
                            padding: '8px 12px', // Add padding for button-like appearance
                            border: '1px solid #3498db', // Add a blue border
                            borderRadius: '4px', // Round the corners
                            display: 'inline-block' // Ensure proper spacing and alignment
                        }}>
                            Docs Page
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Page; // Export the Page component as default