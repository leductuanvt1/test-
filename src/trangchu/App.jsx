import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'; // Thay Link bằng NavLink
import './App.css';
import logo from '../../img/logo.png';
import chu from '../../img/chu.png';
import hinh1 from '../../img/hinh1.png';

import Tieuchuan from './TieuChuan';
import QuyenLoi from './QuyenLoi';
import LuuY from './LuuY'; 
import LoiKhuyen from './LoiKhuyen';
import HoatDong from './HoatDong';
import LienHe from './LienHe';
import HoiDap from '../hoidap/HoiDap';
import TuongThich from '../tuongthich/TuongThich';
import LienHeTong from '../lienhe/LienHetong';
import LichHen from '../user/lichhen';
import Login from '../login/login';
import Register from '../register/register';
import Information from '../information/information'; // hoặc đúng đường dẫn

const HomePage = () => (
  <>
   
    <div className="image-section" style={{ position: 'relative', textAlign: 'center', marginTop: 0, paddingTop: 0 }}>
      <img
        src={hinh1}
        alt="Hình 1"
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          borderRadius: 0, 
          display: 'block', 
          marginTop: 0, 
          paddingTop: 0 
        }}
      />
      {/* Lớp phủ mờ màu đen */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.22)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      {/* Overlay slogan */}
      <div
        style={{
          position: 'absolute',
          top: 150, 
          left: 0,
          right: 0,
          margin: '0 auto',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '2rem',
          textShadow: '0 2px 8px rgba(0,0,0,0.85), 0 0 12px #fff',
          width: '100%',
          maxWidth: 1200,
          padding: '12px 10px 0 10px',
          pointerEvents: 'none',
          whiteSpace: 'normal',
          textAlign: 'center',
          letterSpacing: '1px',
          lineHeight: 1.2,
          textTransform: 'uppercase',
          zIndex: 2,
          boxSizing: 'border-box',
        }}
      >
        <div>
          Hãy làm thế giới tốt đẹp hơn bằng{' '}
          <span style={{
            color: '#e53935',
            fontWeight: 900,
            textShadow: '0 2px 8px rgba(229,57,53,0.25), 0 0 12px #fff'
          }}>
            giọt máu
          </span> của bạn.
        </div>
        <div
          style={{
            fontSize: '1.05rem',
            fontWeight: 500,
            color: '#ffc107',
            textShadow: '0 2px 8px rgba(255,193,7,0.25), 0 0 12px #fff',
            marginTop: 8,
            textTransform: 'none',
            letterSpacing: 0,
          }}
        >
          Mỗi giọt máu cho đi là một cuộc đời ở lại. Hãy cùng chúng tôi đảm bảo nguồn máu ổn định cho những người cần.
        </div>
        {/* Nút đặt lịch hiến máu */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
          <button
            className="blink-button"
            onClick={() => alert('Chức năng đặt lịch sẽ sớm ra mắt!')}
          >
            ĐẶT LỊCH HIẾN MÁU
          </button>
        </div>
      </div>
    </div>
    <QuyenLoi />
    <Tieuchuan />
    <LuuY /> 
    <LoiKhuyen />
    <HoatDong />
    <LienHe />
  </>
);

const App = () => {
  // State lưu trữ ngày bắt đầu và kết thúc khi chọn lịch
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setUserInfo(userData);
  };

  return (
    <div className="blood-donation-form">
      {/* Thanh header trên cùng */}
      <div className="header-bar">
        {/* Chọn ngôn ngữ */}
        <div
          className="header-left"
          style={{
            gap: 4,
            marginLeft: 20, // Sích vào trong nhiều hơn
            display: 'flex',
            alignItems: 'center',
          }}
        >
     
        </div>
        {/* Logo trung tâm */}
        <div className="header-center">
          <img src={logo} alt="Logo hiến máu" className="logo-center" />
          <img src={chu} alt="Logo chữ" className="logo-chu" />
        </div>
        {/* Đăng nhập */}
        <div className="header-right" style={{ gap: 4, marginRight: 20, display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <div className="user-info-header">
              👤 {userInfo?.name || "Người dùng"}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="menu-link"
              style={{
                background: "#fff",
                color: "#23509e",
                fontWeight: 700,
                border: "1.5px solid #23509e",
                borderRadius: 8,
                padding: "6px 18px",
                fontSize: 16,
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span className="login-icon">👤</span>
              Đăng nhập
            </NavLink>
          )}
        </div>
      </div>

      {/* Thanh menu điều hướng */}
      <nav className="main-menu" style={{ marginTop: 0 }}>
        <NavLink to="/" end className="menu-link">
          TRANG CHỦ
        </NavLink>
        <NavLink to="/hoidap" className="menu-link">
          HỎI - ĐÁP
        </NavLink>
        <NavLink to="/tuongthich" className="menu-link">
          TƯƠNG THÍCH
        </NavLink>
        <NavLink to="/lienhe" className="menu-link">
          LIÊN HỆ
        </NavLink>
        <NavLink to="/lichhen" className="menu-link">
          LỊCH HẸN CỦA BẠN
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hoidap" element={<HoiDap />} />
        <Route path="/tuongthich" element={<TuongThich />} />
        <Route path="/lienhe" element={<LienHeTong />} /> 
        <Route path="/lichhen" element={<LichHen />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </div>
  );
};

export default App;
