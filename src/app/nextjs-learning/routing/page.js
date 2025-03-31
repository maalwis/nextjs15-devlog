// This file defines the main landing page for the Next.js routing lecture application at the route '/nextjs-learning'.
// It serves as an entry point to understand the overall structure and core concepts of the application.

// == 01. How the Application Works ==
// The application is built using Next.js 15, leveraging React and its ecosystem:
// - **package.json**: Contains project metadata, including dependencies (e.g., 'next', 'react', 'react-dom') and scripts like 'dev' (development), 'build' (production build), and 'start' (run the built app).
// - **npm run dev**: Starts the Next.js development server with hot reloading, allowing real-time updates as you edit code.
// - **src/app folder**: In Next.js 15, the 'app' directory uses the App Router, where routes are defined by the file system. Each 'page.js' file maps to a route based on its path.
// - **layout.js**: A file (typically in 'app/' or subdirectories) that defines shared UI (e.g., navigation, footer) wrapping page content.
// - **RootLayout component**: Usually in 'app/layout.js', this top-level layout wraps all pages, ensuring a consistent structure across the app.

// == 02. React Server Components in Next.js 15 ==
// Next.js 15 adopts React Server Components (RSC):
// - RSC are rendered on the server, reducing client-side JavaScript for better performance and faster load times.
// - By default, components in the 'app/' directory are Server Components unless marked with 'use client' for client-side interactivity.
// - They enable server-side data fetching (e.g., from APIs or databases) directly within components, improving security and efficiency.

// == 03. Server Components vs. Client Components ==
// From the React Server Components architecture:
// - **Server Components**: Handle server-side tasks like fetching data and rendering static or dynamic HTML. They lack access to browser APIs or hooks (e.g., 'useState', 'useEffect').
// - **Client Components**: Manage client-side interactivity (e.g., state, event handlers) and can use browser APIs. They require the 'use client' directive at the file’s top.

// == 04. Next.js File-System Based Routing ==
// Next.js uses a file-system-based routing system with these conventions:
// - A 'page.js' file in a directory defines the page for that route (e.g., 'app/about/page.js' → '/about').
// - Nested folders create nested routes (e.g., 'blog/first/page.js' → '/blog/first').
// - Dynamic routes use brackets like '[param]' to capture URL segments (e.g., '[productId]' for '/product/123').
// - Special files like 'layout.js' (shared UI), 'error.js' (error handling), or 'loading.js' (loading states) enhance route functionality.

import React from 'react'

// Main page component for the route '/nextjs-learning'.
function Page() {
    return (
        <h1>Next.js Route Lecture Page URL: nextjs-learning</h1>
    )
}

export default Page