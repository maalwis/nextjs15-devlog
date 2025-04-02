import React from 'react';
import Link from 'next/link';

/*
  Product List Component - Route: '/nextjs-learning/routing/dynamicRoute/product'

  This component displays a list of products with links to their individual detail pages.
  It demonstrates how to set up navigation to dynamic routes where the URL contains
  variable parameters (in this case, productId).

  In Next.js 15, the Link component handles client-side navigation between routes,
  preserving state and providing a smooth user experience without full-page reloads.
*/

function ProductList() {
    // Sample product data that would typically come from an API or database
    const products = [
        { id: 1, name: "Product 1", description: "Description for product 1" },
        { id: 2, name: "Product 2", description: "Description for product 2" },
        { id: 3, name: "Product 3", description: "Description for product 3" }
    ];

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
                Product List
            </h1>

            <div style={{
                backgroundColor: '#e9ecef',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'monospace'
            }}>
                <p style={{ margin: '0', fontSize: '14px' }}>
                    Current URL: nextjs-learning/routing/dynamicRoute/product
                </p>
            </div>

            <div style={{ marginTop: '10px' }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        border: '1px solid #dee2e6',
                        borderRadius: '6px',
                        padding: '16px',
                        marginBottom: '16px',
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                        <h2 style={{
                            margin: '0 0 8px 0',
                            fontSize: '20px',
                            color: '#212529'
                        }}>
                            {product.name}
                        </h2>
                        <p style={{
                            margin: '0 0 16px 0',
                            color: '#6c757d'
                        }}>
                            {product.description}
                        </p>
                        <Link href={`/nextjs-learning/routing/dynamicRoute/product/${product.id}`} style={{
                            display: 'inline-block',
                            background: '#4361ee',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            View Details
                        </Link>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '16px' }}>
                <Link href="/nextjs-learning/routing/dynamicRoute" style={{
                    color: '#4361ee',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    ← Back to Dynamic Route Lesson
                </Link>
            </div>
        </div>
    );
}

export default ProductList;