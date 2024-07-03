import React from 'react';
import './Header.css';

const Header = ({ currentSlide }) => {
    return (
        <header>
            <div className='top-nav'>
                <div className='contact padding-header'>
                    <a href='/'>Liên hệ</a>
                </div>
                <div className='line'></div>
                <div className='hotline padding-header'>
                    <span>Hotline</span>
                    <a href='/'>18006068</a>
                </div>
                <div className='call'>
                    <span>Gọi nước bình 20 lít </span>
                    <img src='https://www.vinhhao.com.vn/bitrix/templates/vinhhao_140617/img/bottle_top.png' alt='logo-water' />
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li><a href='/' style={{ color: currentSlide === 1 ? 'white' : '' }}>Trang chủ</a></li>
                    <li><a href='/' style={{ color: currentSlide === 1 ? 'white' : '' }}>Câu chuyện vĩnh hảo</a></li>
                    <li><a href='/' style={{ color: currentSlide === 1 ? 'white' : '' }}>Sản phẩm</a></li>
                    <li className='logo'><a href='/'><img src='https://www.vinhhao.com.vn/bitrix/templates/vinhhao_140617/img/logo.png' alt='logo'></img></a></li>
                    <li><a href='/' style={{ color: currentSlide === 1 ? 'white' : '' }}>GIỚI THIỆU</a></li>
                    <li><a href='/' style={{ color: currentSlide === 1 ? 'white' : '' }}>TIN TỨC & SỰ KIỆN</a></li>
                    <li><a href='/' style={{ color: currentSlide === 1 ? 'white' : '' }}>THÔNG TIN</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
