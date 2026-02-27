import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
function RenderTop({ children }) {
  const { pathname } = useLocation();
 
  useEffect(() => {
    //if (pathname != "/contact") window.scrollTo(0, 0);
    if (pathname){
      window.scrollTo(0, 0);
      document.body.classList.remove("back");
      document.querySelector("header").classList.remove("active");
    }
  }, [pathname]);
 
  return children;
}
 
export default RenderTop;