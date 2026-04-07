import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4">
      
      {/* 404 Text */}
      <h1 className="text-9xl font-extrabold drop-shadow-lg">404</h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found
      </h2>

      <p className="mt-2 text-center max-w-md text-gray-200">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Go Back Home
        </button>
      </Link>

      {/* Optional Illustration */}
      <div className="mt-10 text-6xl animate-bounce">
        🚫
      </div>

    </div>
  );
};

export default ErrorPage;