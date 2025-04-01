// This file defines a nested route at '/nextjs-learning/routing/nestedRoute/blog/first'.
// It represents an individual blog post within the blog section.

// == 05. Nested Routes (Continued) ==
// Each subdirectory can contain a 'Profile.js' file to define content for that route:
// - Here, 'first/Profile.js' creates '/blog/first' under the 'blog' segment.
// - Nesting can extend further (e.g., '/blog/category/post') by adding more subdirectories.

import React from 'react'

function Page() {
    return (
        <div>First Blog URL: nextjs-learning/routing/nestedRoute/blog/first</div>
    )
}

export default Page