import React from 'react';
import Link from 'next/link';

/*
  Product List Component - Route: '/nextjs-learning/routing/dynamicRoute/product'
  
  This component displays a list of products and demonstrates linking to dynamic routes.
  Each product links to its corresponding product details page using dynamic routing.
  
  In Next.js 15, these links leverage the App Router's file-based routing system,
  where the URL structure is defined by the folder structure in the app directory.
*/

function ProductList() {
    // Sample product data - in a real app, this might come from an API or database
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" }
    ];

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
                Product List
            </h1>

            <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '15px 0'
            }}>
                URL: nextjs-learning/routing/nestedDynamicRoute/product
            </p>

            <div style={{
                marginTop: '20px'
            }}>
                {products.map(product => (
                    <div key={product.id} style={{
                        padding: '15px',
                        margin: '10px 0',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '4px',
                        borderLeft: '4px solid #3498db'
                    }}>
                        <h2 style={{
                            margin: '0 0 10px 0',
                            color: '#2c3e50'
                        }}>
                            {product.name}
                        </h2>
                        <Link href={`/nextjs-learning/routing/nestedDynamicRoute/product/${product.id}`} style={{
                            color: '#3498db',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}>
                            View Details →
                        </Link>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '30px'
            }}>
                <Link href="/nextjs-learning/routing/nestedDynamicRoute" style={{
                    color: '#7f8c8d',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center'
                }}>
                    ← Back to Dynamic Route Lesson
                </Link>
            </div>
        </div>
    );
}

export default ProductList;