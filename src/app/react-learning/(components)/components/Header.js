import React from 'react';
import Link from 'next/link';

/*
  Header Component

  This components displays a navigation bar with links to different sections of the application.
  The <Link> components is used for client-side routing in Next.js.
  The latest Next.js version does not require an <a> tag inside <Link>.

  The styling has been adjusted to ensure consistent appearance across all pages.
  The header now sticks to the top of the page for better navigation experience.
*/

function Header () {
    const name = 'Abishek Alwis';
    const profession = "Fullstack Developer";

    const headerStyle = {
        background: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        width: "100%"
    };

    const navStyle = {
        listStyleType: "none",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px"
    };

    const navItemStyle = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
        transition: "color 0.3s"
    };

    // Add hover style for navigation items
    const navItemHoverStyle = {
        ...navItemStyle,
        ":hover": {
            color: "#4CAF50"
        }
    };

    return (
        <header style={headerStyle}>
            <h1>{name}</h1>
            <p>{profession}</p>
            <nav>
                <ul style={navStyle}>
                    <li>
                        <Link href="/react-learning/home" style={navItemStyle}>Home</Link>
                    </li>
                    <li>
                        <Link href="/react-learning/about" style={navItemStyle}>About</Link>
                    </li>
                    <li>
                        <Link href="/react-learning/profile" style={navItemStyle}>Profile</Link>
                    </li>
                    <li>
                        <Link href="/react-learning/contact" style={navItemStyle}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;