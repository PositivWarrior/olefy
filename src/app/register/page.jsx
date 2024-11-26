"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful!", data);
        router.push("/login"); // Redirect to login page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-brass">Create an Account</h1>
        <p className="text-sm text-gray-400 text-center">
          Join Olefy and start your music journey.
        </p>

        {/* Show error message if there is one */}
        {error && (
          <div className="text-red-500 text-center text-sm">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-brass text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-brass hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
