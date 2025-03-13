import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

// Signup with email & password
export const signup = async (fullName, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      fullName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Signup Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.errors?.[0]?.msg || "Signup failed. Please try again.");
  }
};

// Login with email & password
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.errors?.[0]?.msg || "Login failed. Please check your credentials.");
  }
};

// Google Authentication
export const googleAuth = async () => {
  try {
    window.open(`${API_URL}/google`, "_self"); // Redirect to backend Google Auth route
  } catch (error) {
    console.error("Google Auth Error:", error.message);
    throw new Error("Google Authentication failed. Please try again.");
  }
};

// Logout
export const logout = async () => {
  try {
    await axios.get(`${API_URL}/logout`);
    window.location.href = "/"; // Redirect to homepage after logout
  } catch (error) {
    console.error("Logout Error:", error.message);
    throw new Error("Logout failed. Please try again.");
  }
};
