import React from 'react'
import PropTypes from 'prop-types';

import ProfileCard from "./ProfileCard"

/*
  Profile Component - Route: '/react-learning/profile'

  This component demonstrates the following key concepts:

  1. **Props:**
     - Props (short for properties) allow you to pass data from a parent component to a child component.
     - They make components dynamic and reusable.

  2. **API Calls at the Page Level:**
     - In Next.js 15, it is recommended to perform API calls in the page-level component (page.js or page.tsx) rather than inside smaller components.
     - This approach leverages server-side rendering and data fetching optimizations, and it keeps presentation components clean and focused solely on displaying data.

  3. **Immutability of Props:**
     - Props are immutable, meaning once they are passed from a parent, the child component cannot modify them.
     - The parent component maintains control of the data, ensuring a unidirectional data flow.
*/

function Profile(props) {
    // Destructure the user object from props for easier access
    const { user } = props;

    return (
        <div style={{
            background: "#f5f5f5",         // Light gray background for a soft look
            borderRadius: "8px",           // Rounded corners for a modern card feel
            padding: "20px",               // Consistent padding around the content
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)" // Subtle shadow for depth
        }}>
            {/* Display general user information */}
            <h1 style={{
                color: "#333",             // Dark text color for readability
                marginBottom: "20px"       // Space below the header
            }}>User Profile</h1>

            <div style={{
                marginBottom: "20px" // Space before the card
            }}>
                <p><strong>Location:</strong> {user?.location}</p>
                <p><strong>Experience:</strong> {user?.experience} years</p>

                {/*
                  Passing and Rendering Arrays via Props in React

                  Arrays are a common data structure used in React to represent lists of related items, such as a tech stack,
                  a list of users, or a set of tasks. When passed as props from a parent to a child component, arrays enable
                  dynamic rendering of multiple values using iteration methods like `.map()`.

                  ------------------------------------------------------

                  Why use Arrays in Props?

                  1. **Dynamic Rendering:**
                     - Arrays allow components to render an arbitrary number of items based on the data provided.
                     - For example, a tech stack array allows us to display all technologies a user is familiar with,
                       regardless of how many there are.

                  2. **Reusable and Scalable Components: **
                     - Passing arrays as props makes components highly reusable.
                     - Instead of hardcoding items, the component adapts to whatever data it receives.

                  3. **Functional Rendering using `.map()`:**
                     - The `.map()` function is often used inside JSX to iterate over the array and return
                       a React element for each item.
                     - This keeps the code clean and declarative.

                  ------------------------------------------------------

                  In this example:
                  - The `techStack` prop is an array containing strings like ["React", "Next.js", "Node.js"].
                  - We use `.map()` to loop through the array and render each technology.
                  - A conditional check ensures that commas are added between items, but not after the last item.
                  - Each rendered element is wrapped in a `<span>` with a unique `key` for optimal React list rendering.

                  Arrays in props provide flexibility and are essential for rendering variable-length data efficiently in UI.
                */}

                <p><strong>Tech Stack:</strong> {
                    user?.techStack?.map((tech, index) => (
                        <span key={index}>
                            {tech}{index < user.techStack.length - 1 ? ', ' : ''}
                        </span>
                    ))
                }</p>
            </div>

            {/*
              Passing multiple props to the ProfileCard component:

              - Name: Represents the user's name.
              - profession: Represents the user's professional role.
              - seniorityLevel: Indicates the user's level of seniority.

              This approach exemplifies how a parent component can supply several distinct pieces of data to a child component,
              thus enabling the child component to render a comprehensive, dynamic view based on the provided props.
              Note that these props are immutable; the ProfileCard component is responsible for rendering the data without modifying it.
            */}
            <ProfileCard
                name={user?.name}
                profession={user?.profession}
                seniorityLevel={user?.seniorityLevel}
                graduate={user?.graduate}
            />
        </div>
    )
}

export default Profile;
