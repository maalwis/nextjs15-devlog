// In this file, we define a nested layout that is specific to product details pages.
// Nested layouts in Next.js 15 empower you to create specialized UI scaffolds that wrap a subset
// of your routes (e.g., all pages related to product details) without altering the global layout.
// The key idea here is that a nested layout can provide components (such as a "Featured Products"
// section) that are only applied when viewing certain routes, while still inheriting from the root layout.
//
// The component accepts a `children` prop, which represents the content specific to a product detail
// page (for example, detailed information about the product). When a user navigates to a route like
// `/products/1`, Next.js first renders the root layout and then the nested product details layout,
// which wraps the product page content.
//
// This approach allows you to inject additional UI elements—in this case, an H2 heading signaling
// a "Featured Products" section—above or around the page content, creating a rich and dynamic experience.

import React from 'react';

// ==================================================================================================
// PRODUCT DETAILS LAYOUT
// This nested layout creates a specialized container for all product detail pages.
// It adds consistent UI elements like a featured products section and related items
// that appear across all product detail pages, while the specific product content changes.
//
// The layout uses a modern card-based design with subtle shadows and spacing to create
// visual hierarchy and improve the readability of product information.
// ==================================================================================================

export default function ProductDetailsLayout({ children }) {
    // Sample featured products - in a real app, these would come from a database or API
    const featuredProducts = [
        { id: 1, name: "Wireless Earbuds", price: "$129.99", image: "earbuds.jpg" },
        { id: 2, name: "Smart Watch", price: "$249.99", image: "watch.jpg" },
        { id: 3, name: "Bluetooth Speaker", price: "$89.99", image: "speaker.jpg" }
    ];

    // Styling for the layout components
    const styles = {
        container: {
            padding: '1.5rem',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            maxWidth: '1100px',
            margin: '0 auto',
        },
        featuredSection: {
            padding: '1.5rem',
            backgroundColor: '#e0f2fe',
            borderRadius: '8px',
            marginBottom: '2rem',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
        featuredTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#0369a1',
            marginTop: 0,
            marginBottom: '1rem',
            borderBottom: '2px solid #0ea5e9',
            paddingBottom: '0.5rem',
            display: 'inline-block'
        },
        productGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '1.5rem'
        },
        productCard: {
            backgroundColor: 'white',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer'
        },
        productImage: {
            backgroundColor: '#e5e7eb',  // Placeholder color for image
            height: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            fontWeight: '500'
        },
        productInfo: {
            padding: '1rem'
        },
        productName: {
            margin: '0 0 0.5rem 0',
            fontSize: '1rem',
            fontWeight: '500',
            color: '#111827'
        },
        productPrice: {
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#2563eb'
        },
        childrenContainer: {
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '0.5rem'
        }
    };

    return (
        <div style={styles.container}>
            {/*
                Here we are adding a specialized section for product details pages.
                The H2 element labeled "Featured Products" could be used, for instance, to render a carousel
                of featured items that is only relevant in this context. This is the key benefit of nested layouts:
                you can define and insert route-specific UI while keeping your global layout intact.
            */}
            <section style={styles.featuredSection}>
                <h2 style={styles.featuredTitle}>Featured Products</h2>
                <p>Discover our top picks selected just for you, based on our best-selling items and current trends.</p>

                {/* Grid of featured product cards */}
                <div style={styles.productGrid}>
                    {featuredProducts.map(product => (
                        <div key={product.id} style={styles.productCard}>
                            <div style={styles.productImage}>
                                {/* In a real app, this would be an actual image */}
                                Product Image
                            </div>
                            <div style={styles.productInfo}>
                                <h3 style={styles.productName}>{product.name}</h3>
                                <div style={styles.productPrice}>{product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*
                The `children` prop represents the unique content for each product detail page.
                As navigation occurs, Next.js populates this placeholder with the page's own component,
                while the surrounding layout (including the featured products section) remains unchanged.
            */}
            <div style={styles.childrenContainer}>
                {children}
            </div>

            {/*
                We could add additional sections below the product details, such as:
                - Customer reviews
                - Related products
                - Recently viewed items
                - Product recommendations

                These would all be part of the layout and remain consistent across different product pages.
            */}
        </div>
    );
}