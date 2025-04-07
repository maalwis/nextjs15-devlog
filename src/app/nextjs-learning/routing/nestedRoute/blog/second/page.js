// This file defines a nested route at '/nextjs-learning/routing/nestedRoute/blog/second'.
// It represents an individual blog post within the blog section.

// == 05. Nested Routes (Continued) ==
// Each subdirectory can contain a 'Profile.js' file to define content for that route:
// - Here, 'src/app/nextjs-learning/routing/nestedRoute/blog/second/page.js' creates '/nextjs-learning/routing/nestedRoute/blog/second' under the 'blog' segment.
// - Nesting can extend further (e.g., '.../blog/category/post') by adding more subdirectories.

import React from 'react'

function Page() {
    return (
        <div className="container mx-auto p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-blue-600">Second Blog Post</h1>
                <p className="text-gray-600 mt-2">Published on April 5, 2025</p>
            </header>

            <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-lg mb-4">
                    Current URL: <span className="font-mono text-green-600">nextjs-learning/routing/nestedRoute/blog/second</span>
                </p>

                {/* Blog content section */}
                <article className="prose lg:prose-lg mt-6">
                    <p>
                        This is the content of the second blog post. In a real application, this would contain the actual blog content.
                    </p>

                    <p className="mt-4">
                        Suspendisse potenti. Sed auctor, nisl eget ultricies lacinia, nisl nisl aliquet
                        nisl, eget aliquet nisl nisl eget nisl. Donec euismod, nisl eget ultricies.
                    </p>
                </article>

                {/* Navigation back to the main blog page */}
                <div className="mt-8 pt-4 border-t border-gray-200">
                    <a href="/nextjs-learning/routing/nestedRoute/blog" className="text-blue-500 hover:underline">
                        ← Back to all posts
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Page