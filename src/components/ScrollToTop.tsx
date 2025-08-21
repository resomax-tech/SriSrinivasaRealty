import React, { useState, useEffect } from "react";
import { ArrowUpToLineIcon } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-green-400 text-white rounded-full shadow-lg hover:bg-green-900 transition-all"
      >
        <ArrowUpToLineIcon className="h-5 w-5" />
      </button>
    )
  );
};

export default ScrollToTop;
