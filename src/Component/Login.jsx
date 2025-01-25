import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import SMITlogo from "../assets/SMITlogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap"; // Bootstrap Spinner

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/home");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25 w-50 border border-1 border-grey rounded-2">
        <img
          src={SMITlogo}
          alt="SMIT Logo"
          width={150}
          className="d-block mx-auto"
        />

        <h2 className="d-flex justify-content-center align-items-center mt-4">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-0"
            disabled={loading}
          >
            {loading ? (
              <Spinner animation="border" size="sm" /> // Bootstrap Spinner
            ) : (
              "Login"
            )}
          </button>
          <p>Don't have an account?</p>
          <Link
            to="/register"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Register
          </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
