// This file implements the forgot password route for user authentication.
// Just like the previous routes, it is nested within the "(auth)" folder, which acts as a route group.
// Next.js's route groups allow us to keep authentication-related routes together logically,
// while keeping their URLs independent of the directory structure (i.e., the URL remains '/forgot-password').
//
// Advanced project organization strategies like route groups not only enhance code maintainability,
// but also promote efficient collaboration by establishing a clear, consistent organizational pattern
// across your entire project. It also facilitates sharing layouts between routes when needed,
// without the layout path affecting the public URL.

import React from 'react';

export default function ForgotPasswordPage() {
    return (
        <h1>
            Forgot Password Page - Organized within the authentication route group.
        </h1>
    );
}
