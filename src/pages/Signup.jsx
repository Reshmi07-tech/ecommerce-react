import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [usernameError, setUsernameError] = useState("");
const [emailError, setEmailError] = useState("");
const [phoneError, setPhoneError] = useState("");
const [addressError, setAddressError] = useState("");
const [cityError, setCityError] = useState("");
const [stateError, setStateError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

  return (
    <div className="signup-page">
      <div className="signup-box">

        <h1>Create Account</h1>
        <p>Sign up to continue to ShopEase</p>

       <form onSubmit={(e) => {
  e.preventDefault();

  if (
    username &&
    email &&
    phone &&
    address &&
    city &&
    state &&
    password &&
    confirmPassword &&
    !usernameError &&
    !emailError &&
    !phoneError &&
    !addressError &&
    !cityError &&
    !stateError &&
    !passwordError &&
    !confirmPasswordError
  ) {
    alert("Account created successfully! 🎉");
  }
}}>

        <div className="form-group">

  <label>Username</label>

  <input
    type="text"
    value={username}
    onChange={(e) => {
      const value = e.target.value;
      setUsername(value);

      if (value.trim() === "") {
        setUsernameError("Username is required");
      } else if (value.trim().length < 3) {
        setUsernameError("Username must be at least 3 characters");
      } else {
        setUsernameError("");
      }
    }}
    placeholder="Enter your username"
  />

  {usernameError && (
    <small className="error-message">{usernameError}</small>
  )}

  {username && !usernameError && (
    <span className="success-message">✓ Valid username</span>
  )}

</div>  

         
          <div className="form-group">
  <label>Email</label>

  <input
    type="email"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (e.target.value.trim() === "") {
        setEmailError("Email is required");
      } else if (!emailPattern.test(e.target.value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }}
    placeholder="Enter your email"
  />

  {emailError && (
    <small className="error-message">{emailError}</small>
  )}
  {email && !emailError && (
  <span className="success-message">✓ Valid email</span>
)}
</div>
   <div className="form-group">
  <label>Phone Number</label>

  <input
    type="tel"
    value={phone}
    onChange={(e) => {
      const value = e.target.value;
      setPhone(value);

      const phonePattern = /^[0-9]{10}$/;

      if (value.trim() === "") {
        setPhoneError("Phone number is required");
      } else if (!phonePattern.test(value)) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else {
        setPhoneError("");
      }
    }}
    placeholder="Enter your 10-digit phone number"
  />

  {phoneError && (
    <small className="error-message">{phoneError}</small>
  )}
  {phone && !phoneError && (
  <span className="success-message">✓ Valid phone number</span>
)}
</div>      
<div className="form-group">
  <label>Address</label>

  <textarea
    value={address}
    onChange={(e) => {
      const value = e.target.value;
      setAddress(value);

      if (value.trim() === "") {
        setAddressError("Address is required");
      } else if (value.trim().length < 10) {
        setAddressError("Please enter a complete address");
      } else {
        setAddressError("");
      }
    }}
    placeholder="Enter your full address"
    rows="3"
  ></textarea>

  {addressError && (
    <small className="error-message">{addressError}</small>
  )}
  {address && !addressError && (
  <span className="success-message">✓ Valid address</span>
)}
</div>
<div className="form-group">
  <label>City</label>

  <input
    type="text"
    value={city}
    onChange={(e) => {
      const value = e.target.value;
      setCity(value);

      if (value.trim() === "") {
        setCityError("City is required");
      } else if (value.trim().length < 2) {
        setCityError("Please enter a valid city");
      } else {
        setCityError("");
      }
    }}
    placeholder="Enter your city"
  />

  {cityError && (
    <small className="error-message">{cityError}</small>
  )}

  {city && !cityError && (
    <span className="success-message">✓ Valid city</span>
  )}
</div>

<div className="form-group">
  <label>State</label>

  <input
    type="text"
    value={state}
    onChange={(e) => {
      const value = e.target.value;
      setState(value);

      if (value.trim() === "") {
        setStateError("State is required");
      } else if (value.trim().length < 2) {
        setStateError("Please enter a valid state");
      } else {
        setStateError("");
      }
    }}
    placeholder="Enter your state"
  />

  {stateError && (
    <small className="error-message">{stateError}</small>
  )}

  {state && !stateError && (
    <span className="success-message">✓ Valid state</span>
  )}
</div>

       
<div className="form-group">

  <label>Password</label>

  <input
    type="password"
    value={password}
    onChange={(e) => {
      const value = e.target.value;
      setPassword(value);

      if (value.trim() === "") {
        setPasswordError("Password is required");
      } else if (
        value.length >= 8 &&
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(value)
      ) {
        setPasswordError("");
      } else {
        setPasswordError("Password does not meet all requirements");
      }
    }}
    placeholder="Enter your password"
  />

  <div className="password-checklist">

    <small className={password.length >= 8 ? "valid-check" : "invalid-check"}>
      {password.length >= 8 ? "✓" : "✗"} At least 8 characters
    </small>

    <small className={/[A-Z]/.test(password) ? "valid-check" : "invalid-check"}>
      {/[A-Z]/.test(password) ? "✓" : "✗"} One uppercase letter
    </small>

    <small className={/[a-z]/.test(password) ? "valid-check" : "invalid-check"}>
      {/[a-z]/.test(password) ? "✓" : "✗"} One lowercase letter
    </small>

    <small className={/[0-9]/.test(password) ? "valid-check" : "invalid-check"}>
      {/[0-9]/.test(password) ? "✓" : "✗"} One number
    </small>

    <small className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid-check" : "invalid-check"}>
      {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "✓" : "✗"} One special character
    </small>

  </div>

  {password && !passwordError && (
    <span className="success-message">✓ Strong password</span>
  )}

</div>
  
     <div className="form-group">

  <label>Confirm Password</label>

  <input
    type="password"
    value={confirmPassword}
    onChange={(e) => {
      const value = e.target.value;
      setConfirmPassword(value);

      if (value.trim() === "") {
        setConfirmPasswordError("Please confirm your password");
      } else if (value !== password) {
        setConfirmPasswordError("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }}
    placeholder="Confirm your password"
  />

  {confirmPasswordError && (
    <small className="error-message">{confirmPasswordError}</small>
  )}

  {confirmPassword && !confirmPasswordError && (
    <span className="success-message">✓ Passwords match</span>
  )}

</div>     

          <button type="submit">
            Create Account
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;