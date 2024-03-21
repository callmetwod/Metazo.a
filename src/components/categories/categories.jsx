import './categories.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Container from './containers/container';

export default function Categories() {
  return (
    <div className="slider" id="category-slider">
      <Swiper
        // centeredSlides={true}
        slidesPerView={10}
        spaceBetween={13}
        effect="coverflow"
        grabCursor={true}
        // pagination={{
        // //   dynamicMainBullets: true,
        //   // type: "bullets"
        // }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
        <SwiperSlide><Container/></SwiperSlide>
      </Swiper>
    </div>
  );
}