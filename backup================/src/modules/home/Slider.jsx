import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// images
import img1 from "../../assets/images/lifeStyle/home1.jpg";
import img2 from "../../assets/images/lifeStyle/home2.jpg";
import img3 from "../../assets/images/lifeStyle/home3.jpg";
import img4 from "../../assets/images/lifeStyle/home4.jpg";

const images = [img1, img2, img3, img4];

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallerySlider">

      {/* ✅ MAIN SLIDER */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="mainSwiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" className="mainImg" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ THUMBNAIL SLIDER */}
      <Swiper
        modules={[Thumbs, FreeMode]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumbSwiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="" className="thumbImg" />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}