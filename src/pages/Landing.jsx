import { useNavigate } from 'react-router-dom'
import MobileContainer from '../components/MobileContainer'
import '../styles/landing.css'
import { motion } from "framer-motion"

function Landing() {
  const navigate = useNavigate()

  return (
    <MobileContainer>

    
      
      <motion.div className='landing-page'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='bottom-content'>
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <button
            className='primary-btn'
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>

          <button
            className='secondary-btn'
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </motion.div>
    </MobileContainer>
  )
}

export default Landing