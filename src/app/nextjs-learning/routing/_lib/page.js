// This file is placed inside a folder whose name begins with an underscore ('_lib'),
// marking it as a private folder. In Next.js 15, any folder that starts with an underscore
// is not included in the automatic routing system. This design decision reinforces the idea
// of safe collocation: you can keep internal logic, utilities, or non-route components separate
// from the public-facing routes.
//
// The concept here is twofold:
// 1. Internal Organization: It allows developers to group related modules, utilities, or components,
//    such as helper functions or UI fragments, without exposing them as pages in the URL space.

// 2. Naming Safety: It prevents any naming conflicts that might arise with future naming conventions
//    from Next.js by ensuring internal files are not accidentally exposed as routable endpoints.
//
// In practical terms, even though this file exports a React component, navigating to the URL that would
// correspond to the folder (e.g., '/lib') will result in a 404 error because Next.js automatically excludes
// files in private folders from being routed.
//
// A helpful tip mentioned in the theory is that if you intend to include an underscore in a URL, you should
// use its URL-encoded value (%5f) instead. This is because the underscore is interpreted as a special flag by the framework.
// Experimenting with this encoding in the browser can show you how Next.js differentiates actual URL paths from internal folder names.

import React from 'react';

// Define a simple React component that renders a message.
// Note: Although this component is fully functional, Next.js will not create a corresponding route for it,
// because the file is inside a private folder.
export default function PrivateRoutePage() {
    return (
        <h1>
            Private Route - This page is not accessible via Next.js routing due to its private folder location.
        </h1>
    );
}
