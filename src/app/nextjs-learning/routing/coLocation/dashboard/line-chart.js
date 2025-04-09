/**
 * In Next.js, file colocation allows you to keep related components together in the same folder
 * as the route they belong to. This approach helps maintain organization and encapsulation within your project.
 *
 * In this file, we define a simple 'LineChart' component. Although this component is collocated within the
 * '/dashboard' route folder, it does not automatically become a routable page. Instead, it serves as an auxiliary
 * component that can be imported and used by the main page component defined in page.js.
 *
 * The separation of responsibilities here means that only the default exported component in page.js determines the
 * content for a specific route. Other components like this one are simply supporting pieces, making it easier to manage
 * and evolve the codebase over time.
 */
import React from 'react';

function LineChart() {
    return <h1>Line Chart</h1>;
}

export default LineChart;
