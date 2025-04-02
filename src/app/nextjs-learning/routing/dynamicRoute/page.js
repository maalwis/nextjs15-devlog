import React from 'react';
import Link from 'next/link';

/*
  Dynamic Route Introduction Page - Route: '/nextjs-learning/routing/dynamicRoute'
  
  This component serves as the entry point for the dynamic routing demonstration.
  It explains the concept of dynamic routes in Next.js 15 and provides navigation
  to example pages that demonstrate these concepts.
  
  In Next.js 15, dynamic routes allow you to create pages with paths that aren't
  determined until runtime. This is useful for pages that display content based
  on dynamic data, such as user IDs, product IDs, or other variable parameters.
*/

function Page() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h1 style={{
                color: '#333',
                marginTop: '0',
                borderBottom: '2px solid #4361ee',
                paddingBottom: '10px'
            }}>
                Dynamic Route Lesson
            </h1>

            <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#444'
            }}>
                Welcome to the dynamic routing demonstration in Next.js 15. This example shows how to
                create and navigate between dynamically generated routes based on parameters.
            </p>

            <div style={{
                backgroundColor: '#e9ecef',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'monospace'
            }}>
                <p style={{ margin: '0', fontSize: '14px' }}>
                    Current URL: nextjs-learning/routing/dynamicRoute
                </p>
            </div>

            <div style={{ marginTop: '10px' }}>
                <h2 style={{ fontSize: '18px', color: '#555' }}>Key Concepts:</h2>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Dynamic segments are defined with square brackets in folder names: [id]</li>
                    <li>The params object is passed to page components, containing all route parameters</li>
                    <li>Nested dynamic routes allow for complex URL structures</li>
                </ul>
            </div>

            <div style={{ marginTop: '20px' }}>
                <Link href="/nextjs-learning/routing/dynamicRoute/product" style={{
                    display: 'inline-block',
                    background: '#4361ee',
                    color: 'white',
                    padding: '10px 16px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: '500'
                }}>
                    View Product List Example
                </Link>
            </div>
        </div>
    );
}

export default Page;