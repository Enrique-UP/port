import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/images/lifeStyle/home1.jpg";
import img2 from "../../assets/images/lifeStyle/home2.jpg";
import img3 from "../../assets/images/lifeStyle/home3.jpg";
import img4 from "../../assets/images/lifeStyle/home4.jpg";
import img5 from "../../assets/images/lifeStyle/home5.jpg";

import ReviewData from "./ReviewData";

function ReviewsTag({ img, name, place, icons, text }) {
  return (
    <div className="reviewArea">
      <figure>
        <img src={img} />
        <figcaption>
          <b>{name}</b>
          <span>{place}</span>
          <i className="icon" dangerouslySetInnerHTML={{ __html: icons }}></i>
        </figcaption>
      </figure>
      <p>{text}</p>
    </div>
  );
}
const images = [img1, img2, img3, img4, img5];
export default function ReviewsHome() {
  const swiperRef = useRef(null);

  return (
    <section className="section reviewsSec b1">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <hgroup>
              <h3>Customer's <span>Reviews</span></h3>
              <p>My Satisfy Clients</p>
            </hgroup>
          </div>

          <div className="col-12">
            <div className="outlineBox">
              Among my clients there are many renowned industries.
            </div>
          </div>

          <div className="col-12">
            <div className="back">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  autoHeight={false}

                  breakpoints={{
                      0: { slidesPerView: 1 },
                      992: { slidesPerView: 2 },
                  }}

                  navigation={true}
                  //   pagination={{ clickable: true }}

                  autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                  }}

                  loop={true}
                  speed={800}
                  grabCursor={true}

                  onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                  }}

                  onSlideChange={(swiper) => {
                      // FIX: ensure autoplay continues after manual interaction
                      if (swiper.autoplay && !swiper.autoplay.running) {
                      swiper.autoplay.start();
                      }
                  }}
                  >
                  {ReviewData.slice(0, 4).map((val, ind) => (
                    <SwiperSlide key={ind}>
                      <ReviewsTag {...val} img={images[ind]} />
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>{/* back */}

          </div>
          <div className="col-12">
            <div className="btns center">
              <Link to="/reviews">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}