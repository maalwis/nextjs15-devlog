import React from 'react';

/*
  Layout Component

  This is a reusable layout wrapper components that maintains consistent page structure.
  It receives children components and wraps them with the Header and Footer.
  This ensures consistent styling and structure across all pages.
  The layout uses a flex container to keep the footer at the bottom of the page.
*/

function Layout({ children }) {
    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            {/* The Header and Footer components are handled by the parent Layout */}
            {children}
        </div>
    );
}

export default Layout;