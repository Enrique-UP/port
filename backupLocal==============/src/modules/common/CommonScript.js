import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CommonScript() {
  const location = useLocation();
  useEffect(() => {



    {
      const items = document.querySelectorAll(".colors data");
      const totalClasses = 10;
      let i = 1;
      items.forEach((li) => {
        if (i > totalClasses) i = 1;
        li.style.setProperty("--bk1", `var(--b${i})`);
        i++;
      });
    }
    {
      console.log(100);
    }
    {
      console.log(500);
    }


    
  }, [location]);
  return null;
}

export default CommonScript;