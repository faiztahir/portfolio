import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi ratione id magni a sapiente delectus error voluptatibus ullam repudiandae veritatis incidunt placeat hic obcaecati vitae at, sint est. Ipsam.",
  },
  {
    avatar: AVTR2,
    name: "Shatte Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi ratione id magni a sapiente delectus error voluptatibus ullam repudiandae veritatis incidunt placeat hic obcaecati vitae at, sint est. Ipsam.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi ratione id magni a sapiente delectus error voluptatibus ullam repudiandae veritatis incidunt placeat hic obcaecati vitae at, sint est. Ipsam.",
  },
  {
    avatar: AVTR4,
    name: "Nana Ana Mcbrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi ratione id magni a sapiente delectus error voluptatibus ullam repudiandae veritatis incidunt placeat hic obcaecati vitae at, sint est. Ipsam.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>
      <h5>Currently these are bot reviews I'II upload real soon</h5>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
