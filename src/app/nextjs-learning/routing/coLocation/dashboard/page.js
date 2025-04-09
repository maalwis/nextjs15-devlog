import React from 'react';
import LineChart from './line-chart';
// import { BarChart } from './barchart'; // Uncomment this line if you want to render the BarChart component as well.

/**
 * In Next.js 15, routes are defined based on the file system structure.
 * A folder inside the 'app' directory represents a route segment, and the route only becomes
 * accessible when a file named 'page.js' (or 'page.tsx') exists within that folder.
 *
 * This file is the primary entry point for the '/dashboard' route. Only the React component that is
 * default exported from this file will be rendered when a user navigates to '/dashboard'.
 *
 * File colocation allows you to keep related components (like LineChart and BarChart) together with the page component.
 * This organization ensures that auxiliary components are kept near where they are used, making the project more maintainable.
 *
 * Note: Even though the 'BarChart' component exists in this folder, it is not used here unless explicitly imported.
 */


export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <LineChart />
            {/*
        The 'Dashboard' component imports and renders 'LineChart', showing how auxiliary components that are
        collocated in the same folder do not automatically become routable.
        It emphasizes that Next.js will only render the component defined and exported by this file.
      */}
        </div>
    );
}
