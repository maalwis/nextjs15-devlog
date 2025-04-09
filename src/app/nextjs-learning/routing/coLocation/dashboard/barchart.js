import React from 'react';

/**
 * Next.js routing relies on the presence of a default exported React component within the page files.
 *
 * This file demonstrates a component 'BarChart' exported as a named export rather than a default export.
 * If Next.js attempts to use this file as a page (for instance, if it were mistakenly interpreted as routable),
 * the absence of a default export would trigger an error. The framework expects a default exported React component
 * to render the page.
 *
 * By collocating this file inside the '/dashboard' folder, we can use it as a helper or supplementary component for
 * the main dashboard page, without worrying that it will unintentionally become a routable page.
 */

// Named export instead of default export.
// This component can be imported, but cannot be used directly as a routable page.
export function BarChart() {
    return <h1>Bar Chart</h1>;
}

// To use this component on the '/dashboard' route, it must be imported and used within the default exported component in page.js.
