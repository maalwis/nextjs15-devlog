import React from 'react';
import Link from 'next/link';

/*
  Dynamic Route Page Component - Route: '/nextjs-learning/routing/nestedDynamicRoute'

  This component demonstrates the concept of dynamic routes in Next.js 15.
  Dynamic routes allow for creating pages with paths that aren't known at build time.

  For example, product pages with IDs in the URL would use dynamic routes.
  The page.js file in the app/route/[param] directory structure handles these routes.
*/

function Page() {
    return (
        <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{
                color: '#2c3e50',
                borderBottom: '2px solid #3498db',
                paddingBottom: '10px'
            }}>
                Dynamic Route Lesson
            </h2>

            <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#333',
                margin: '15px 0'
            }}>
                This page demonstrates dynamic routing in Next.js 15. The URL path for this page is:
            </p>

            <code style={{
                display: 'block',
                padding: '12px',
                backgroundColor: '#f1f1f1',
                borderRadius: '4px',
                fontFamily: 'monospace',
                marginBottom: '20px'
            }}>
                nextjs-learning/routing/nestedDynamicRoute
            </code>

            <div style={{
                marginTop: '30px'
            }}>
                <h3 style={{ color: '#2c3e50' }}>Navigation Examples:</h3>
                <ul style={{
                    listStyleType: 'none',
                    padding: '0'
                }}>
                    <li style={{ margin: '10px 0' }}>
                        <Link href="/nextjs-learning/routing/nestedDynamicRoute/product" style={{
                            color: '#3498db',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            border: '1px solid #3498db',
                            borderRadius: '4px',
                            display: 'inline-block'
                        }}>
                            View Product List
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Page;