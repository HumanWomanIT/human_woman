import { Swiper, SwiperSlide } from "swiper/react";
import bgimage from "../../assets/upBg.png";
import './reviews.css';
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export const Reviews = () => {
    return (
        <section className="reviews">
            <img src={bgimage} />
            <h2>Clients Testimonial</h2>
            <div className="reviews_test container">
                <Swiper
                    rewind={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    slidesPerView={1} 
                    spaceBetween={0}
                >
                    <SwiperSlide>
                        <div className="slide_content">
                            <div className="slide_item">Testimonial 1</div>
                            <div className="slide_item">Testimonial 2</div>
                            <div className="slide_item">Testimonial 3</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide_content">
                            <div className="slide_item">Testimonial 4</div>
                            <div className="slide_item">Testimonial 5</div>
                            <div className="slide_item">Testimonial 6</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <img src={bgimage} alt="Background Image" className="background-image" />
        </section>
    );
};
