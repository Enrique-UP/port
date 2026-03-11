import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CommonScript() {
  const location = useLocation();
  useEffect(() => {

    // For colors
    {
      const items = document.querySelectorAll(".colors data");
      const totalClasses = 10;
      let i = 1;
      items.forEach((li) => {
        if (i > totalClasses) i = 1;
        li.style.setProperty("--c2", `var(--cb${i})`);
        i++;
      });
    }

    
    // For image lazy load
    {
      if (!!window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const realSrc = img.getAttribute("data-src");
              if (realSrc) img.src = realSrc;
              img.removeAttribute("data-src");
              observer.unobserve(img);
            }
          });
        }, { rootMargin: "0px 0px -100px 0px" });
        document.querySelectorAll('img[data-src]').forEach(img => { 
          observer.observe(img);
        });
      }
      else alert("This API is not supported by your browser, so you can't see the effect.");
    }


    // For masonry grid
    {
      function resizeImage(){
        document.querySelectorAll(".partition data").forEach(function(e){
          const h = e.querySelector("figure").getBoundingClientRect().height;
          const style = window.getComputedStyle(e);
          const marginBottom = parseFloat(style.marginBottom);
          e.style.setProperty("--num", parseInt(h + marginBottom));
        });
      }
      window.addEventListener("load", resizeImage);
      window.addEventListener("resize", resizeImage);
      document.querySelectorAll(".partition img").forEach(img => img.addEventListener("load", resizeImage));
    }


    // {}
    // {}
    // {}
    // {}
    // {}

  }, [location]);
  return null;
}

export default CommonScript;