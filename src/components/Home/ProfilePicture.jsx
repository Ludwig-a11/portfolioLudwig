

const ProfilePicture = ({ image }) => {
  return (
    <div className="homeProfile">
        <img className="profilePic" src={image} alt="profilePic" />
    </div>
  )
}

export default ProfilePicture