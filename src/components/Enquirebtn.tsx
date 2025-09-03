import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const EnquireButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      // current scroll position from top
      const scrollY = window.scrollY;
      // height of the viewport
      const windowHeight = window.innerHeight;
      // distance from top to footer
      const footerTop = footer.offsetTop;

      // calculate "hide after" position
      const hideAfter = footerTop - windowHeight;

      // show between 300px and just before footer
      if (scrollY > 300 && scrollY < hideAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.open("tel:+917729922244")}
      className={`fixed -right-12 bottom-40  
        btn-fixed-custom shadow-lg flex items-center space-x-2
        px-2 py-1 text-xs rounded-full
        -rotate-90 md:hidden
        transition-all duration-500 ease-in-out
        z-10
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
      `}
    >
      <Phone className="h-3 w-3 md:h-4 md:w-4" />
      <span>Enquire Now</span>
    </button>
  );
};

export default EnquireButton;
