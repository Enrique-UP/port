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
      function lazyLoadImage() {
          var scroll = document.documentElement.scrollTop;
          var windowBottom = scroll + window.innerHeight;      
          var lazy = document.querySelectorAll(".lazy");
          for(var i = 0; i < lazy.length; i++){
            var lazyBottom = lazy[i].offsetTop + lazy[i].offsetHeight;        
    
            if(scroll <= lazyBottom && lazy[i].offsetTop <= windowBottom){
              var dataSrc = lazy[i].getAttribute("data-src");
              var dataStyle = lazy[i].getAttribute("data-style");
              if(dataSrc){
                lazy[i].setAttribute("src", dataSrc);
                lazy[i].removeAttribute("data-src");
              }
              if(dataStyle){
                lazy[i].setAttribute("style", "background-image:url("+ dataStyle +")");
                lazy[i].removeAttribute("data-style");
              }
            }
          }
      }
      window.addEventListener("load", lazyLoadImage());
      window.addEventListener("scroll", lazyLoadImage);
      window.addEventListener("resize", lazyLoadImage);
    }
    // For masonry grid
    // {}
    // {}
    // {}
    // {}
    // {}
    // {}

  }, [location]);
  return null;
}

export default CommonScript;