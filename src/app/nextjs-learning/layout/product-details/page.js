import React from 'react';

// ==================================================================================================
// PRODUCT PAGE COMPONENT
// This file defines the core product display page that appears within the product details layout.
//
// In a real application, this component would typically:
// 1. Fetch product data from an API or data source
// 2. Display comprehensive product information (images, price, specifications, etc.)
// 3. Include interactive elements like "Add to Cart" buttons and quantity selectors
// 4. Show related products, reviews, and other contextual information
//
// For now, we're implementing a simple but elegant product display that can be expanded later.
// ==================================================================================================

function Product() {
    // Example product data - in a real app, this would come from an API or props
    const product = {
        name: "Premium Wireless Headphones",
        price: "$299.99",
        rating: 4.8,
        description: "Experience studio-quality sound with our premium wireless headphones. Featuring active noise cancellation, 40-hour battery life, and premium materials for all-day comfort.",
        features: [
            "Active Noise Cancellation",
            "40-hour battery life",
            "Premium comfort materials",
            "Studio-quality sound",
            "Voice assistant compatible"
        ]
    };

    // Styling for the product page components
    const styles = {
        container: {
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '1.5rem',
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: '1rem'
        },
        title: {
            margin: '0 0 0.5rem 0',
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#111827'
        },
        price: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#2563eb'
        },
        rating: {
            display: 'flex',
            alignItems: 'center',
            color: '#f59e0b',
            fontSize: '0.875rem',
            marginBottom: '1rem'
        },
        description: {
            lineHeight: '1.6',
            color: '#4b5563',
            marginBottom: '1.5rem'
        },
        featuresList: {
            listStyleType: 'none',
            padding: 0,
            margin: '1rem 0'
        },
        featureItem: {
            padding: '0.5rem 0',
            display: 'flex',
            alignItems: 'center'
        },
        checkmark: {
            color: '#10b981',
            marginRight: '0.5rem'
        },
        button: {
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: '500',
            cursor: 'pointer',
            marginTop: '1rem',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
        }
    };

    return (
        <div style={styles.container}>
            {/* Product Header - Contains the product name, price and rating */}
            <div style={styles.header}>
                <div>
                    <h1 style={styles.title}>{product.name}</h1>
                    <div style={styles.rating}>
                        {/* Star rating display */}
                        {"★".repeat(Math.floor(product.rating))}
                        {product.rating % 1 !== 0 ? "☆" : ""}
                        {"☆".repeat(5 - Math.ceil(product.rating))}
                        <span style={{ marginLeft: '0.5rem', color: '#6b7280' }}>
                            {product.rating} / 5
                        </span>
                    </div>
                </div>
                <div style={styles.price}>{product.price}</div>
            </div>

            {/* Product Description - Provides detailed information about the product */}
            <p style={styles.description}>{product.description}</p>

            {/* Product Features - Lists the key features of the product */}
            <div>
                <h3>Key Features</h3>
                <ul style={styles.featuresList}>
                    {product.features.map((feature, index) => (
                        <li key={index} style={styles.featureItem}>
                            <span style={styles.checkmark}>✓</span> {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Call to Action - Button to add the product to cart */}
            <button style={styles.button}>Add to Cart</button>
        </div>
    );
}

export default Product;