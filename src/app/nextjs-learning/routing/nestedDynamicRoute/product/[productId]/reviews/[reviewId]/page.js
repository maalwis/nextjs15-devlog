import React from 'react';
import Link from 'next/link';
import { notFound } from "next/navigation";

/*
  Product Review Component - Route: '/nextjs-learning/routing/nestedDynamicRoute/product/[productId]/reviews/[reviewId]'

  This component demonstrates nested dynamic routes with multiple parameters ([productId] and [reviewId]).
  It also shows how to use the notFound() function from next/navigation to handle invalid routes.

  In Next.js 15, this handling of nested dynamic routes allows for deeply structured URLs
  while maintaining a clean component organization in the file system.
  The file structure app/routing/nestedDynamicRoute/product/[productId]/reviews/[reviewId]/page.js
  corresponds to this URL pattern.
*/

export default async function ProductReview({ params }) {
    // Destructuring multiple parameters from the params object
    // No need for `await` here since params is a simple object, not a promise
    const { productId, reviewId } = params;

    // Implementing a simple validation check using the notFound function
    // This redirects to the 404 page if the reviewId is greater than 1000
    if (parseInt(reviewId) > 1000) {
        notFound();
    }

    return (
        <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{
                color: '#2c3e50',
                borderBottom: '2px solid #3498db',
                paddingBottom: '10px'
            }}>
                Product Review
            </h1>

            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '15px',
                borderRadius: '4px',
                margin: '20px 0'
            }}>
                <h2 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>
                    Review {reviewId} for Product {productId}
                </h2>

                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#555',
                    margin: '10px 0'
                }}>
                    URL: nextjs-learning/routing/nestedDynamicRoute/product/{productId}/reviews/{reviewId}
                </p>

                <div style={{
                    backgroundColor: '#e9f7fe',
                    padding: '10px',
                    borderRadius: '4px',
                    marginTop: '15px',
                    borderLeft: '4px solid #3498db'
                }}>
                    <p style={{ margin: '0', fontSize: '14px' }}>
                        <strong>Note:</strong> If you try to access a review with ID greater than 1000,
                        the notFound() function will be triggered, redirecting to the 404 page.
                    </p>
                </div>
            </div>

            <div style={{
                marginTop: '30px'
            }}>
                <Link href={`/routing/nestedDynamicRoute/product/${productId}`} style={{
                    color: '#7f8c8d',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center'
                }}>
                    ← Back to Product Details
                </Link>
            </div>
        </div>
    );
}