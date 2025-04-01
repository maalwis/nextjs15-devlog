import React from 'react'

/*
  ProfileCard Component

  This component receives data via props from its parent (Profile component)
  and renders the professional details of the user in a styled card format.

  **Key Concepts:**
  - **Props:** Data is passed to this component through props, making it dynamic.
  - **Immutability: ** The props received here are read-only; the component should not modify them.

  -------------------------------------------------------------------------

  Passing Multiple Props and Destructuring in React

  In this component, we pass multiple props to the child component "ProfileCard".
  The props include "name", "profession", "seniorityLevel", and "graduate", which are extracted from the parent component.

  When props are passed from a parent component, they are received as a single object.
  You can access individual properties using dot notation, for example,
    - props.name
    - props.profession
    - props.seniorityLevel
    - props.graduate

  However, to simplify the code and enhance readability, we often use JavaScript destructuring
  to extract these properties directly. This technique unpacks the properties from the props object
  into individual variables, like so:
    const { name, profession, seniorityLevel, graduate } = props;

  This approach, known as "props destructuring," allows you to use the variables directly within the component,
  eliminating the need for repetitive dot notation. It makes the code more concise and easier to maintain.

  Moreover, props in React are immutable. Once the parent component passes data down via props,
  the child component can only use this data for rendering without modifying it. This ensures a unidirectional
  flow of data, where the parent retains control over the state while the child components remain purely
  presentational.

  Overall, passing multiple props using destructuring not only improves code clarity and conciseness
  but also aligns with best practices for managing data in React applications.
*/

function ProfileCard(props) {
    // Destructure the props for easier access
    const { name, profession, seniorityLevel, graduate } = props;

    return (
        <div style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textAlign: "center"
        }}>
            {/* Professional details card */}
            <h2 style={{
                color: "#444",
                marginBottom: "10px"
            }}>Professional Details</h2>

            {/* Display the professional information passed as props */}
            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "10px 0" }}>
                { name || "Name not provided" }
            </p>
            <p style={{ color: "#666", margin: "5px 0" }}>
                { profession || "Profession not provided" }
            </p>
            <p style={{
                display: "inline-block",
                background: "#e6f7ff",
                color: "#0066cc",
                padding: "5px 10px",
                borderRadius: "4px",
                marginTop: "10px"
            }}>
                { seniorityLevel || "Level not specified" }
            </p>
            <p style={{
                display: "inline-block",
                background: "#e6f7ff",
                color: "#0066cc",
                padding: "5px 10px",
                borderRadius: "4px",
                marginTop: "10px"
            }}>
                { graduate || "Graduate not specified" }
            </p>
        </div>
    )
}

export default ProfileCard
