import React from 'react'


const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgray", padding: "15px", borderRadius: "8px", color: "black"
  }
  return (
    <div style={styles}>
        <h2>John Doe</h2>
        <p>Software Engineer</p>
        
    </div>
  )
}

export default ProfileCard