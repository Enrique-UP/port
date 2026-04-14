import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// images
import img1 from "../../assets/images/banners/slide1.jpg";
import img2 from "../../assets/images/banners/slide2.jpg";
import img3 from "../../assets/images/banners/slide3.jpg";
import img4 from "../../assets/images/banners/slide4.jpg";

const images = [img1, img2, img3, img4];

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallerySlider">

      {/* MAIN SWIPER (AUTOPLAY) */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        navigation
        spaceBetween={10}
        watchSlidesProgress={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mainSwiper"
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`slide-${i}`} className="mainImg" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMB SWIPER */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
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

    </div>
  );
}