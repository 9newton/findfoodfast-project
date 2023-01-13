import React, { useEffect, useState } from "react";
import "./BackToTopButton.css";
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";

function BackToTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 680,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top">
      {BackToTopButton && (
        <button className="btn-to-top" onClick={scrollUp}>
          <FaAngleUp className="fa-angle mb-2" />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
