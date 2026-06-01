import { useNavigate } from 'react-router-dom'
import MobileContainer from '../components/MobileContainer'
import FormInput from '../components/FormInput'
import '../styles/login.css'
import { motion } from "framer-motion"

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/profile')
  }

  return (
    <MobileContainer>
       
      <motion.div className='login-page'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <FormInput
          label='Email Address'
          type='email'
          placeholder='Enter email address'
        />

        <FormInput
          label='Password'
          type='password'
          placeholder='Enter password'
        />

        <button className='login-btn' onClick={handleLogin}>
          Login
        </button>
     

    </motion.div>
    </MobileContainer>
  )
}

export default Login