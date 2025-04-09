// In this file, we define the registration route using the page.js file.
// The file is placed in a folder structure wrapped in parentheses (i.e. (auth)).
// This tells Next.js to treat the folder as a route group, solely for organizational purposes,
// meaning that the folder itself does not become part of the URL path.
//
// Route groups allow us to neatly group related routes—in this case, authentication routes—
// without impacting the URL. For example, despite being located under "(auth)",
// the route for this page will still be accessible at '/register' rather than '/auth/register'.
// This is particularly useful when you want to share layouts or state across multiple pages
// without altering the public URL structure.
//
// Below, we export a simple React component representing the registration page.


export default function RegisterPage() {
    return (
        <h1>
            Register Page - Organized within a route group for authentication.
        </h1>
    );
}
