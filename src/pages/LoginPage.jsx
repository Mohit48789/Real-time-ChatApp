import React, { useState } from 'react';
import assets from '../assets/assets';

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDataSubmitted(true);

    console.log({
      fullName,
      email,
      password,
      bio,
      currState,
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center gap-8 sm:flex-row sm:justify-evenly backdrop-blur-2xl p-4">
      {/* --- Logo --- */}
      <img src={assets.logo_big} alt="Logo" className="w-[min(30vw,250px)]" />

      {/* --- Form --- */}
      <form
        onSubmit={handleSubmit}
        className="border-2 border-gray-500 bg-white/10 text-white p-6 flex flex-col gap-6 rounded-lg shadow-lg min-w-[280px]"
      >
        {/* Header with Toggle */}
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          <img
            src={assets.arrow_icon}
            alt="arrow"
            className="w-5 cursor-pointer"
            onClick={() => {
              setCurrState(currState === "Sign up" ? "Login" : "Sign up");
              setIsDataSubmitted(false);
            }}
          />
        </h2>

        {/* --- Input Fields --- */}
        {currState === "Sign up" && !isDataSubmitted && (
          <>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              required
              className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none"
            />
          </>
        )}

        {currState === "Login" && !isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none"
            />
          </>
        )}

        {isDataSubmitted && currState === "Sign up" && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className="p-2 border border-gray-500 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Provide a short bio..."
            required
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer hover:opacity-90"
        >
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
