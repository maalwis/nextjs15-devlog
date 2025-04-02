'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/*
  NotFound Component - Special 404 Page in Next.js
  This file is automatically used as the custom 404 error page in Next.js.
  When a user tries to access a route that does not exist, Next.js renders this component.
  This improves the user experience by providing a styled and informative error message.
*/

function NotFound() {
    // Get the current pathname
    const pathname = usePathname();

    // Split the pathname to get productId and reviewId
    const pathnameParts = pathname.split("/");

    // Assuming the URL structure is /product/{productId}/reviews/{reviewId}
    const productId = pathnameParts[pathnameParts.indexOf("product") + 1];
    const reviewId = pathnameParts[pathnameParts.indexOf("reviews") + 1];

    return (
        <div style={{
            textAlign: 'center',
            padding: '50px',
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{
                fontSize: '36px',
                color: '#d9534f',
                marginBottom: '10px'
            }}>
                404 - Page Not Found
            </h1>
            <p style={{
                fontSize: '18px',
                color: '#6c757d',
                marginBottom: '20px'
            }}>
                Sorry, we couldn't find the review you're looking for.
            </p>

            {/* Link back to the product details page using the productId */}
            <Link href={`/nextjs-learning/routing/nestedDynamicRoute/product/${productId}`} style={{
                color: '#4361ee',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
            }}>
                ← Back to Product Details
            </Link>
        </div>
    );
}

export default NotFound;
