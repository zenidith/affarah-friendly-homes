import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-10 max-w-sm w-full text-center border border-gray-200">
        <img src="/assets/logo.png" alt="Affarah logo" className="mx-auto mb-4 w-16 h-16 rounded-full border-2 border-[#e0b300] bg-white" />
        <h1 className="text-5xl font-bold mb-2 text-[#e0b300]">404</h1>
        <p className="text-base text-gray-700 mb-6">Sorry, the page you’re looking for doesn’t exist.<br />Try heading back to our homepage or using the menu.</p>
        <a href="/en" className="inline-block bg-[#192a3e] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-150 hover:bg-[#e0b300] hover:text-[#192a3e]">
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
