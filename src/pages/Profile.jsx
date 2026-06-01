import MobileContainer from "../components/MobileContainer";
import "../styles/profile.css";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";

function Profile() {
  return (
    <MobileContainer>
      <motion.div
        className="profile-page"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="profile-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-content">
          <div className="profile-info">
            <div className="profile-image-wrapper">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="profile-image"
              />

              <div className="camera-icon">
                <FaCamera />
              </div>
            </div>

            <div>
              <h3>Marry Doe</h3>
              <p>Marry@gmail.com</p>
            </div>
          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam.
          </p>
        </div>
      </motion.div>
    </MobileContainer>
  );
}

export default Profile;
