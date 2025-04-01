// This file defines a route at '/nextjs-learning/routing/dynamicRoute/product'.
// It lists products and acts as a precursor to dynamic product detail pages.

// == 06. Concepts of Dynamic Routes in Next.js ==
// Dynamic routes enable parameterized URLs:
// - Using bracket notation '[param]', dynamic segments are captured from the URL.
// - Example: 'product/[productId]/Profile.js' matches '/product/1' or '/product/shoe', with 'productId' accessible via the 'params' prop.

import React from 'react'

function ProductList() {
    return (
        <div>
            <h1>Product List URL: nextjs-learning/routing/dynamicRoute/product</h1>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </div>
    )
}

export default ProductList