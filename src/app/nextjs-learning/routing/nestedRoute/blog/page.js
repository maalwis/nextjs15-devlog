// This file defines a nested route at '/nextjs-learning/routing/nestedRoute/blog'.
// It acts as the index page for the blog section.

// == 05. Concepts of Nested Routes in Next.js ==
// Nested routes are created by organizing 'page.js' files within subdirectories:
// - Example: 'src/app/nextjs-learning/routing/nestedRoute/blog/page.js' maps to 'nextjs-learning/routing/nestedRoute/blog',
// while 'nextjs-learning/routing/blog/first/page.js' maps to 'nextjs-learning/routing/nestedRoute/blog/first'.
// - This structure organizes related routes hierarchically (e.g., a blog with multiple posts).

import React from 'react'

function Page() {
    return (
        <div className="container mx-auto p-6">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-blue-600">Blog Posts</h1>
                <p className="text-gray-600 mt-2">Explore our latest articles</p>
            </header>

            <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-lg">
                    Current URL: <span className="font-mono text-green-600">nextjs-learning/routing/nestedRoute/blog</span>
                </p>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Available Posts:</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="/nextjs-learning/routing/nestedRoute/blog/first" className="text-blue-500 hover:underline">
                                First Blog Post
                            </a>
                        </li>
                        <li>
                            <a href="/nextjs-learning/routing/nestedRoute/blog/second" className="text-blue-500 hover:underline">
                                Second Blog Post
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Page