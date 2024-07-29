import React, { useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Switch,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { assets } from "../../assets/asset";
import { SignUp } from "../../services/user-service";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
      setUsernameError("Please enter a valid email address.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 5) {
      setPasswordError("Password must be at least 5 characters long.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const userData = {
        username,
        password,
      };
      SignUp(userData)
        .then((response) => {
          console.log("Signup successful!");
          navigate("/homePage");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={assets.logo} alt="LaundryBox Logo" />
          <h1>
            <span className="hed1">GO</span>
            <span className="hed2">MART</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={handleUsernameChange}
              required
              error={Boolean(usernameError)}
              helperText={usernameError}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
              error={Boolean(passwordError)}
              helperText={passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="remember-me">
            <Switch
              id="remember"
              checked={rememberMe}
              onChange={handleRememberMeToggle}
              color="primary"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Button type="submit" variant="contained" className="login-button">
            Login
          </Button>
        </form>
        <footer>
          Powered by <span className="brand-name">CombatTeam</span>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
