import React from 'react';
import Link from 'next/link';

/*
  Product Reviews Component - Route: '/nextjs-learning/routing/dynamicRoute/product/[productId]/reviews'

  This component demonstrates nested dynamic routes in Next.js 15.
  It displays reviews for a specific product identified by the productId parameter.

  This file would be located at app/routing/dynamicRoute/product/[productId]/reviews/page.js

  The component receives the same params object as the parent dynamic route,
  allowing access to the productId without additional configuration.
*/

function ProductReviews({ params }) {
    // Extracting the productId from the params object
    const { productId } = params;

    // Mock data for product reviews
    // In a real application, you would fetch this data based on the productId
    const reviews = [
        {
            id: 1,
            userName: "Alex Johnson",
            rating: 5,
            date: "March 15, 2025",
            comment: "Absolutely love this product! Exceeded all my expectations."
        },
        {
            id: 2,
            userName: "Sam Taylor",
            rating: 4,
            date: "March 10, 2025",
            comment: "Great value for the price. Would definitely recommend."
        },
        {
            id: 3,
            userName: "Jamie Rivera",
            rating: 3,
            date: "February 28, 2025",
            comment: "Decent product but had some minor issues with the setup."
        }
    ];

    // Function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} style={{
                    color: i <= rating ? '#ffc107' : '#e4e5e9',
                    fontSize: '18px'
                }}>
                    ★
                </span>
            );
        }
        return stars;
    };

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
                Reviews for Product {productId}
            </h1>

            <div style={{
                backgroundColor: '#e9ecef',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'monospace'
            }}>
                <p style={{ margin: '0', fontSize: '14px' }}>
                    Current URL: nextjs-learning/routing/nestedDynamicRoute/product/{productId}/reviews
                </p>
            </div>

            <div style={{
                border: '1px solid #dee2e6',
                borderRadius: '6px',
                padding: '20px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
                <h2 style={{
                    margin: '0 0 16px 0',
                    color: '#212529',
                    fontSize: '24px'
                }}>
                    Customer Reviews
                </h2>

                {reviews.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {reviews.map(review => (
                            <div key={review.id} style={{
                                borderBottom: '1px solid #eee',
                                paddingBottom: '16px',
                                marginBottom: '8px',
                                lastChild: { borderBottom: 'none' }
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '8px'
                                }}>
                                    <div style={{ fontWeight: 'bold' }}>{review.userName}</div>
                                    <div style={{ color: '#6c757d', fontSize: '14px' }}>{review.date}</div>
                                </div>

                                <div style={{ marginBottom: '8px' }}>
                                    {renderStars(review.rating)}
                                </div>

                                <p style={{
                                    margin: '8px 0 0 0',
                                    color: '#343a40',
                                    lineHeight: '1.6'
                                }}>
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p style={{ color: '#6c757d' }}>No reviews yet for this product.</p>
                )}
            </div>

            <div style={{
                border: '1px solid #dee2e6',
                borderRadius: '6px',
                padding: '20px',
                backgroundColor: '#f8f9fa'
            }}>
                <h3 style={{ margin: '0 0 16px 0', color: '#212529' }}>
                    Leave a Review
                </h3>
                <p style={{ color: '#6c757d', fontSize: '14px' }}>
                    Review functionality would be implemented here in a real application.
                </p>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
                <Link href={`/nextjs-learning/routing/nestedDynamicRoute/product/${productId}`} style={{
                    color: '#4361ee',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    ← Back to Product Details
                </Link>

                <Link href="/nextjs-learning/routing/nestedDynamicRoute/product" style={{
                    color: '#4361ee',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    ← Back to Product List
                </Link>
            </div>
        </div>
    );
}

export default ProductReviews;