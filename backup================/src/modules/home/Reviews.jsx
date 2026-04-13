import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/images/lifeStyle/home1.jpg";
import img2 from "../../assets/images/lifeStyle/home2.jpg";
import img3 from "../../assets/images/lifeStyle/home3.jpg";
import img4 from "../../assets/images/lifeStyle/home4.jpg";

const ReviewsData = [
  {
    img: img1,
    name: "Name1",
    place: "India",
    text: "Lorem1 ipsum dolor sit amet consectetur adipisicing elit officia enim expedita esse omnis vero quidem cupiditate autem harum reiciendis magnam at nulla deleniti minus laudantium sapiente ipsa dolores explicabo non repudiandae autem nobis rerum eius unde quae inventore."    
  },
  {
    img: img2,
    name: "Name2",
    place: "USA",
    text: "Lorem2 ipsum dolor sit amet consectetur adipisicing elit officia enim expedita esse omnis vero quidem cupiditate autem harum reiciendis magnam."
  },
  {
    img: img3,
    name: "Name3",
    place: "Australia",
    text: "Lorem3 ipsum dolor sit amet consectetur adipisicing elit officia enim expedita esse omnis vero quidem cupiditate autem harum reiciendis magnam at nulla deleniti minus laudantium sapiente ipsa dolores explicabo non repudiandae autem nobis rerum eius unde quae inventore animi nihil excepturi hic culpa impedit quos molestiae nihil voluptate necessitatibus dolores." },
  {
    img: img4,
    name: "Name4",
    place: "UK",
    text: "Lorem4 ipsum dolor sit amet consectetur adipisicing elit officia enim expedita esse omnis vero quidem cupiditate autem harum reiciendis magnam at nulla deleniti minus laudantium sapiente ipsa dolores explicabo non repudiandae autem nobis rerum eius unde quae inventore animi." },
];

function ReviewsTag({ img, name, place, text }) {
  return (
    <div className="reviewArea">
      <figure>
        <img src={img} alt="review" />
        <figcaption>
          <b>{name}</b>
          <span>{place}</span>
          <i className="icon">&#xa047;&#xa047;&#xa047;&#xa047;&#xa048;</i>
        </figcaption>
      </figure>
      <p>{text}</p>
    </div>
  );
}

export default function Reviews() {
  const swiperRef = useRef(null);

  return (
    <section className="section reviews b1">
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
                    1400: { slidesPerView: 3 },
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
                {ReviewsData.map((val, ind) => (
                    <SwiperSlide key={ind}>
                    <ReviewsTag {...val} />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>{/* back */}

          </div>
          <div className="col-12">
            <div className="btns center">
              <a href="#">View More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}