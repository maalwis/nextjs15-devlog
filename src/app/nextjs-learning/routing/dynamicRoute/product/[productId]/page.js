// This file defines a dynamic route at '/nextjs-learning/routing/dynamicRoute/product/[productId]'.
// It displays details for a specific product based on the 'productId' parameter.

// == 06. Dynamic Route Parameters (Continued) ==
// - The '[productId]' directory denotes a dynamic segment.
// - The 'params' prop provides the dynamic value (e.g., { productId: '123' }) as a plain object.
// - Note: In Next.js App Router, 'params' is not a promise, so no 'async' or 'await' is needed.

import React from 'react'

// Component receives 'params' with the dynamic 'productId'.
function ProductDetails({ params }) {
    const { productId } = params; // Destructuring the parameter directly.
    return (
        <div>
            Product Details {productId}
            URL: nextjs-learning/routing/dynamicRoute/product/{productId}
        </div>
    )
}

export default ProductDetails