"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful!", data);
        // Save token (e.g., localStorage or cookies)
        localStorage.setItem("token", data.token);
        router.push("/"); // Redirect to home or another page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error("Login error:", error);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-brass">Login</h1>
        <p className="text-sm text-gray-400 text-center">
          Welcome back! Please login to your account.
        </p>
        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-brass text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px w-1/3 bg-gray-700"></span>
          <span className="text-sm text-gray-400">OR</span>
          <span className="h-px w-1/3 bg-gray-700"></span>
        </div>
        {/* Register Link */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
          {"Don't have an account? "}
            <Link href="/register" className="text-brass hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
