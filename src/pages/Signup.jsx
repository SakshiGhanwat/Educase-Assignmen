import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileContainer from "../components/MobileContainer";
import FormInput from "../components/FormInput";
import "../styles/signup.css";
import { motion } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const handleSignup = () => {
    if (!fullName || !email || !password) {
      alert("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Enter valid email");
      return;
    }

    const userData = {
      fullName,
      phone,
      email,
      password,
      company,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/profile");
  };

  return (
    <MobileContainer>
      <motion.div
        className="signup-page"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <FormInput
          label="Full Name*"
          type="text"
          placeholder="Marry Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <FormInput
          label="Phone number*"
          type="text"
          placeholder="Marry Doe"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <FormInput
          label="Email address*"
          type="email"
          placeholder="Marry Doe"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password*"
          type="password"
          placeholder="Marry Doe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormInput
          label="Company name"
          type="text"
          placeholder="Marry Doe"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <div className="radio-section">
          <p>Are you an Agency?*</p>

          <div className="radio-buttons">
            <label>
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>

            <label>
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>

        <button className="signup-btn" onClick={handleSignup}>
          Create Account
        </button>
      </motion.div>
    </MobileContainer>
  );
}

export default Signup;
