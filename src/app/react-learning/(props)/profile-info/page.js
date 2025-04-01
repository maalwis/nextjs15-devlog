import React from 'react'
import Profile from "../components/Profile";

/*
  ProfileInfo Component - Route: '/react-learning/(props)/profile-info'

  In React, props facilitate the flow of data from one component to another.
  The ProfileInfo component serves as the parent, passing data to the child Profile component,
  which further passes relevant data to the ProfileCard component. This pattern, known as props drilling,
  illustrates how data is propagated through the component hierarchy unidirectional.
*/

// ProfileInfo is the parent component that renders the Profile component, thereby providing it with the necessary data via props.

function ProfileInfo () {
    // This simulates data that might come from an API call, containing
    // user information such as name, profession, seniority level, tech stack, etc.
    const user = {
        name: "Abishek Alwis",
        profession: "Fullstack Developer",
        seniorityLevel: "New Graduate",
        techStack: ["React", "Next.js", "Node.js", "Spring Boot"],
        experience: 1,
        location: "Colombo",
        graduate: true

    };

    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px"
        }}>
            {/* Passing the user object as props to the Profile component */}
            <Profile user={user} />
        </div>
    )
}

export default ProfileInfo