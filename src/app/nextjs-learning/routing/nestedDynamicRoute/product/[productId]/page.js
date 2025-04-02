import React from 'react';
import Link from 'next/link';

/*
  Product Details Component - Route: '/nextjs-learning/routing/dynamicRoute/product/[productId]'

  This component demonstrates how to use dynamic route parameters in Next.js 15.
  It receives the 'params' object containing route parameters (productId) extracted from the URL.

  This file would be located at app/routing/dynamicRoute/product/[productId]/page.js
  where [productId] represents the dynamic segment of the route.

  The params object is automatically passed to the page component by Next.js when
  the route contains dynamic segments, allowing access to URL parameters without
  manual parsing.
*/

function ProductDetails({ params }) {
    // Destructuring the productId from the params object
    // This is a cleaner way to access route parameters in Next.js 15
    const { productId } = params;

    // In a real application, you would fetch product details based on productId
    // For this example; we're creating mock data
    const productDetails = {
        id: productId,
        name: `Product ${productId}`,
        description: `This is a detailed description for product ${productId}.`,
        price: `$${parseInt(productId) * 10 + 9.99}`,
        stock: Math.floor(Math.random() * 100),
        reviewCount: Math.floor(Math.random() * 20 + 3) // Added review count for display
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
                Product Details
            </h1>

            <div style={{
                backgroundColor: '#e9ecef',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'monospace'
            }}>
                <p style={{ margin: '0', fontSize: '14px' }}>
                    Current URL: nextjs-learning/routing/dynamicRoute/product/{productId}
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
                    {productDetails.name}
                </h2>

                <div style={{ display: 'grid', gap: '12px' }}>
                    <p style={{
                        margin: '0',
                        color: '#343a40',
                        lineHeight: '1.6'
                    }}>
                        <strong>Description:</strong> {productDetails.description}
                    </p>

                    <p style={{
                        margin: '0',
                        color: '#343a40'
                    }}>
                        <strong>Price:</strong> {productDetails.price}
                    </p>

                    <p style={{
                        margin: '0',
                        color: '#343a40'
                    }}>
                        <strong>In Stock:</strong> {productDetails.stock} units
                    </p>

                    <p style={{
                        margin: '0',
                        color: '#343a40'
                    }}>
                        <strong>Product ID:</strong> {productDetails.id}
                    </p>

                    {/* Added review section with link to reviews page */}
                    <div style={{
                        marginTop: '8px',
                        padding: '12px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <p style={{
                            margin: '0',
                            color: '#343a40'
                        }}>
                            <strong>Customer Reviews:</strong> {productDetails.reviewCount} reviews
                        </p>
                        <Link href={`/nextjs-learning/routing/nestedDynamicRoute/product/${productId}/reviews`} style={{
                            backgroundColor: '#4361ee',
                            color: '#fff',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            View Reviews
                        </Link>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '16px' }}>
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

export default ProductDetails;