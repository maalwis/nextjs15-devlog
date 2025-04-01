// This file defines a nested route at '/nextjs-learning/routing/nestedRoute/blog'.
// It acts as the index page for the blog section.

// == 05. Concepts of Nested Routes in Next.js ==
// Nested routes are created by organizing 'Profile.js' files within subdirectories:
// - Example: 'blog/Profile.js' maps to '/blog', while 'blog/first/Profile.js' maps to '/blog/first'.
// - This structure organizes related routes hierarchically (e.g., a blog with multiple posts).
// - A 'layout.js' file in the parent directory (e.g., 'blog/layout.js') can provide shared UI for all nested routes under '/blog'.

import React from 'react'

function Page() {
    return (
        <div>Blogs Page URL: nextjs-learning/routing/nestedRoute/blog</div>
    )
}

export default Page