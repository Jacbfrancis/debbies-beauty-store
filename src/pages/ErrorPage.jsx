import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Something went wrong
      </h1>

      {/* Message */}
      <p className="text-gray-500 mb-6 max-w-md">
        An error occurred while loading the page. Please try again or go back to
        the homepage.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition"
      >
        Go to Homepage
      </button>
    </div>
  );
}
