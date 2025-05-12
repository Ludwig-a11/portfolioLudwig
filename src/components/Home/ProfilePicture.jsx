import { motion } from "framer-motion";

const ProfilePicture = ({ image }) => {
  return (
    <div className="homeProfile">
      <motion.div
      initial={{ opacity: 0, scale: 1.2}}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        x: { type: "spring", stiffness: 10 },
        duration: 2,
        delay: 1,
        ease: "linear",
      }}
      >
        <img className="profilePic" src={image} alt="profilePic" />
      </motion.div>
    </div>
  )
}

export default ProfilePicture