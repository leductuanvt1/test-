import React, { useState, useEffect, useRef } from "react";

// Đúng đường dẫn ảnh (ảnh nằm trong thư mục img, không phải assets)
import hoatdong1 from "../../img/hoatdong1.png";
import hoatdong2 from "../../img/hoatdong2.png";

const images = [
  { src: hoatdong1, alt: "Hoạt động 1" },
  { src: hoatdong2, alt: "Hoạt động 2" },
];

function HoatDong() {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false); // Thêm state hiệu ứng mờ dần
  const intervalRef = useRef(null);

  // Tự động chuyển ảnh sau 5s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 800); // đổi từ 400 thành 800
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Chuyển sang trái
  const prevSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setIsFading(false);
    }, 800); // đổi từ 400 thành 800
    resetInterval();
  };

  // Chuyển sang phải
  const nextSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setIsFading(false);
    }, 800); // đổi từ 400 thành 800
    resetInterval();
  };

  // Reset lại interval khi bấm nút
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 800); // đổi từ 400 thành 800
    }, 5000);
  };

  return (
    <div
      style={{
        color: "#1565c0",
        // background: "#fff", 
        maxWidth: 1200,
        margin: "40px auto",
        textAlign: "center",
        fontSize: 40, // Tăng size chữ lên 40px
        fontWeight: 700,
        textTransform: "uppercase",
      }}
    >
      Các hoạt động hiến máu nhân đạo
      <div
        style={{
          position: "relative",
          marginTop: 24,
          // background: "#fff", 
        }}
      >
        <img
          src={images[current].src}
          alt={images[current].alt}
          style={{
            width: "70%",
            height: 280,
            objectFit: "cover",
            transition: "opacity 0.8s cubic-bezier(.4,2,.6,1)", // đổi từ 0.4s thành 0.8s
            opacity: isFading ? 0 : 1,
            margin: "0 auto",
            display: "block",
          }}
        />
        {/* Nút trái */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: 100,
            transform: "translateY(-50%)",
            background: "#555",
            border: "none",
            borderRadius: "10px",
            width: 32,
            height: 60,
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            cursor: "pointer",
            zIndex: 2,
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
            opacity: 0.95,
            padding: 0,
          }}
          aria-label="Sang trái"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <polyline points="15 6 9 12 15 18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Nút phải */}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: 100,
            transform: "translateY(-50%)",
            background: "#555",
            border: "none",
            borderRadius: "10px",
            width: 32,
            height: 60,
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            cursor: "pointer",
            zIndex: 2,
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
            opacity: 0.95,
            padding: 0,
          }}
          aria-label="Sang phải"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <polyline points="9 6 15 12 9 18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HoatDong;