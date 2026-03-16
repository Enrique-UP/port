import {Helmet} from "react-helmet";
import { useEffect } from "react";
import CounterNum from './common/CounterNum';
import Banner from "./common/Banner";
import HomeBanner from "../images/banners/home.jpg";
import LifeStyleHome from "./LifeStyle/LifeStyleHome";
import { Counter } from "yet-another-react-lightbox/plugins";
import Childhood from "./AboutUs/Childhood";



function Home() {
  useEffect(() => {
    function marquee(){
      var id = document.querySelectorAll(".marquee");
      var disWidth = document.querySelector(".disclaimer .fw>span").offsetWidth;
      var tid = 0;
      for(var j = 0; j < id.length; j++){
        tid = id[j].offsetWidth - (2 * disWidth);
        id[j].style.width = tid + "px";    
        id[j].style.setProperty("--x", -tid + "px");
        var time = (tid/100) * 2;
        id[j].style.animationDuration = time + "s";
      }
    }
    window.addEventListener("resize", marquee);
    window.addEventListener("load", marquee);

    (function(){
      const text = document.querySelector(".disclaimer .fw>span").innerText;
      document.querySelector(".disclaimer .marqueePopup .head span").innerText = text;

      const ul = document.querySelector(".disclaimer .marquee").innerHTML;
      document.querySelector(".disclaimer .marqueePopup .fwidth>ul").innerHTML = ul;

      document.querySelector(".disclaimer .fw>i").addEventListener("click", function(){
        document.querySelector(".disclaimer .marqueePopup").style.display = "block";
        setTimeout(function(){
          document.querySelector(".disclaimer .marqueePopup").querySelector(".fwidth").classList.add("active");
        }, 300);
      });
      document.querySelector(".disclaimer .marqueePopup .head .icon").addEventListener("click", function(){
        document.querySelector(".disclaimer .marqueePopup").querySelector(".fwidth").classList.remove("active");
        setTimeout(function(){
          document.querySelector(".disclaimer .marqueePopup").style.display = "none";
        }, 300);
      });
    })();
  }, []);
  return (
    <>
      <Helmet>
          <title>Home</title>
      </Helmet>
      <Banner
        pageName="Welcome to our website" 
        pageText="Home page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
        otherImg={HomeBanner}
        showBreadcrumbs={false}
      />
      <section className="welcome">
        <div className="container">
          <div className="fw">
            <p className="head">
              Loremip
              <span>Lm Ip Dolorst</span>
            </p>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maiores quis iste architecto asperiores enim tenetur, sit, quos voluptate id repudiandae ab veritatis hic perferendis porro! Voluptatum recusandae delectus vero iusto nisi laboriosam iste praesentium officia commodi ratione doloremque pariatur impedit minus, quaerat a ut perspiciatis, saepe est eaque id cumque modi maxime fugiat dolores. Assumenda illo architecto, natus unde ullam provident, repellat exercitationem voluptas officia fuga reiciendis dignissimos at mollitia aliquam perspiciatis temporibus eum consequuntur iste!</p>
          </div>{/* fw */}
        </div>{/* container */}
      </section>
      <section class="disclaimer">
        <div class="container">
          <div class="fw">
            <span>Disclaimer:-</span>
            <ul class="marquee">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque, iste molestiae delectus 1.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque, iste molestiae delectus 2.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus atque, iste molestiae delectus 3.</li>
            </ul>
            <i>Read More</i>
          </div>{/* fw */}
        </div>{/* container */}
        <div class="container marqueePopup">
          <div class="fwidth">
            <p class="head"><span></span><i class="icon">&#xa018;</i></p>
            <ul class="unlist"></ul>
          </div>{/* fwidth */}
        </div>{/* container */}
      </section>
      <LifeStyleHome />
      <Childhood />
      {/* <CounterNum /> */}
    </>
  );
}

export default Home;
