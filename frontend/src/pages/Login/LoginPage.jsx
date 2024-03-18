import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadToken } from "../../store/Actions/TokenAction";

import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const { email, password, rememberMe } = formData;
  const token = useSelector((state) => state.token.tokenTrue);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("email", rememberMe ? email : "");
    await dispatch(loadToken(email, password, navigate));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <main className="main bg-dark">
      <div className="sign-in-wrapper">
        <section className="sign-in-content">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {token === false && (
              <p className="error-message">Email or password invalid</p>
            )}
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
