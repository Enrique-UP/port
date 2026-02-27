import { useEffect, useState } from "react";

const ScrollTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
		{showButton && (
			<button onClick={ScrollTop} className="scrollTop">&#8679;</button>
		)}
    </>
  );
};

export default ScrollTop;