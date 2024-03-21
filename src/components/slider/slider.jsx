import { image1, image2, image3, image4 } from "./sliderImages";
import "./slider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="slider">
      <Swiper
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={13}
        effect="coverflow"
        grabCursor={true}
        loop={true}
        pagination={{
          dynamicMainBullets: true,
          // type: "bullets"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slider-img" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={image4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
