import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// images
import img1 from "../../assets/images/slider/slide1.jpg";
import img2 from "../../assets/images/slider/slide2.jpg";
import img3 from "../../assets/images/slider/slide3.jpg";

const images = [img1, img2, img3];

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="gallerySlider">

        {/* MAIN SWIPER */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay, Pagination]}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          watchSlidesProgress={true}
          pagination={{
            el: ".customPagination",
            clickable: true,
          }}
          className="mainSwiper"
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <picture>
                {/* <source media="(min-width:650px)" srcset="img_pink_flowers.jpg" />
                <source media="(min-width:465px)" srcset="img_white_flower.jpg" /> */}
                <img src={img} className="mainImg" />
              </picture>              
            </SwiperSlide>
          ))}
        </Swiper>

        {/* THUMBS */}
        <div className="thumbsImg">
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            className="thumbSwiper"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`thumb-${i}`} className="thumbImg" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arrowsArea">
            <div className="aaw">
              <div className="arrows">
                <i className="prevBtn icon">&#xa037;</i>
                <i className="nextBtn icon">&#xa038;</i>
              </div>
            </div>
          </div>{/* arrowArea */}
        </div>{/* thumbsImg */}

        {/* ✅ PAGINATION */}
        <div className="paginationArea">
          <div className="paginations">
            <div className="customPagination"></div>
          </div>{/* paginations */}
        </div>{/* paginationArea */}

      </div>

      <ul className="colorsLine">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}