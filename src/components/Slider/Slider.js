import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';

import './Slider.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Slider({ onSlideChange }) {
    const [currentSlide, setCurrentSlide] = useState(0); // State lưu trạng thái slide hiện tại

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex); // Cập nhật state khi slide thay đổi
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000000, // Thời gian delay giữa các slide (milisecond)
                    disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
                }}
                loop={true} // Thêm thuộc tính loop để lặp lại từ đầu khi đến trang cuối
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => {
                    handleSlideChange(swiper);
                    onSlideChange && onSlideChange(swiper.realIndex);
                }}
            >
                <SwiperSlide>
                    <div className='slide-caption'>
                        <div className='slide-caption-content'>
                            <h3 className='title-1'>quyền năng của khoáng</h3>
                            <h4 className='title-2'>cho sức khỏe và vẻ đẹp</h4>
                            <div className='text'>
                                Từ rất lâu người Pháp đã biết rằng nước khoáng chính là bí mật của sức khỏe và vẻ đẹp tươi trẻ. Họ không ngừng tìm kiếm những nguồn khoáng tốt trên khắp thế giới. Và ngay dưới dãy Trường Sơn, họ đã tìm thấy một nguồn khoáng được chứng nhận có chất lượng ngang với nguồn khoáng Vichy của Pháp, đáp ứng tiêu chuẩn khắt khe của loại nước khoáng tốt mà họ gọi tên là Vichy Đông Dương, đó chính là Vĩnh Hảo.
                                <br />
                                <br />
                                Với thành phần khoáng dịu nhẹ thanh khiết, Vĩnh Hảo cho cơ thể luôn tươi trẻ rạng ngời từ trong ra ngoài.
                            </div>
                            <div className='btn-primary text'>
                                Câu chuyện Vĩnh Hảo
                            </div>
                        </div>
                    </div>
                    <img src={banner1} alt="Banner 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide-caption'>
                        <div className='slide-caption-content'>
                        <h3 className={`title-1 ${currentSlide === 1 ? 'white-text' : ''}`}>quyền năng của khoáng</h3>
                        <h4 className={`title-2 ${currentSlide === 1 ? 'white-text' : ''}`}>cho sức khỏe và vẻ đẹp</h4>
                            <div className='btn-primary text'>
                                Câu chuyện Vĩnh Hảo
                            </div>
                        </div>
                    </div>
                    <img src={banner2} alt="Banner 2" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
