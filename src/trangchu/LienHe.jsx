import React from "react";

const LienHe = () => {
 return (
    <div style={{ background: "#1565c0", color: "#fff", padding: "10px 0 16px 0", minHeight: "7vh" }}>
      

      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto", 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "flex-start", 
        justifyContent: "center",
        padding: "0 20px", // giảm padding trên/dưới
        gap: 48
      }}>
        {/* Cột trái: LIÊN HỆ */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          flex: "1 1 0", 
          gap: 32, 
          minWidth: 500, 
          maxWidth: 700, 
          alignItems: "center" 
        }}>
          {/* LIÊN HỆ */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 32,
            width: "100%",
            background: "transparent"
          }}>
            <h3 style={{
              borderBottom: "2px solid #fff",
              display: "inline-block",
              paddingBottom: 4,
              marginBottom: 24,
              fontSize: 22,
              letterSpacing: 2,
              textAlign: "center"
            }}>
              LIÊN HỆ
            </h3>
            <div style={{ 
              width: "100%", 
              display: "flex", 
              flexDirection: "row", 
              justifyContent: "center", 
              gap: 40,
              alignItems: "flex-start"
            }}>
              {/* TT Hiến Máu Nhân Đạo */}
              <div style={{ minWidth: 200, maxWidth: 260, textAlign: "left" }}>
                <div style={{ fontWeight: "bold", marginBottom: 4, fontSize: 16 }}>TT Hiến Máu Nhân Đạo</div>
                <div style={{ color: "#ffd6e0", marginBottom: 2, fontSize: 15 }}>📍 466 Nguyễn Thị Minh Khai, Phường 2, Quận 3, Thành phố Hồ Chí Minh</div>
                <div style={{ color: "#ffd6e0", marginBottom: 2, fontSize: 15 }}>📍 106 Thiên Phước, Phường 9, Tân Bình, Thành phố Hồ Chí Minh</div>
                <div style={{ color: "#ff6666", marginBottom: 2, fontSize: 15 }}>📞 Liên hệ giờ hành chính</div>
                <div style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>028 3868 5509</div>
                <div style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>028 3868 5507</div>
              </div>
              {/* Bệnh viện BTH */}
              <div style={{ minWidth: 200, maxWidth: 260, textAlign: "left" }}>
                <div style={{ fontWeight: "bold", marginBottom: 4, fontSize: 16 }}>Bệnh viện BTH</div>
                <div style={{ color: "#ffd6e0", marginBottom: 2, fontSize: 15 }}>📍 118 Đ. Hồng Bàng, Phường 12, Quận 5, Thành phố Hồ Chí Minh</div>
                <div style={{ color: "#ffd6e0", marginBottom: 2, fontSize: 15 }}>📍 24 Nguyễn Thị Diệu, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh</div>
                <div style={{ color: "#ff6666", marginBottom: 2, fontSize: 15 }}>📞 Liên hệ giờ hành chính</div>
                <div style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>028 39571342</div>
                <div style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>028 39557858</div>
              </div>
              {/* TT truyền máu Chợ Rẫy */}
              <div style={{ minWidth: 200, maxWidth: 260, textAlign: "left" }}>
                <div style={{ fontWeight: "bold", marginBottom: 4, fontSize: 16 }}>TT truyền máu Chợ Rẫy</div>
                <div style={{ color: "#ffd6e0", marginBottom: 2, fontSize: 15 }}>📍 56 Phạm Hữu Chí, Phường 12, Quận 5, Thành phố Hồ Chí Minh</div>
                <div style={{ color: "#ff6666", marginBottom: 2, fontSize: 15 }}>📞 Liên hệ giờ hành chính</div>
                <div style={{ fontWeight: "bold", fontSize: 15, color: "#fff" }}>028 39555885</div>
              </div>
            </div>
          </div>
        </div>
        {/* Cột phải: HỖ TRỢ + App Download */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          flex: "0 1 480px",
          minWidth: 420,
          maxWidth: 700,
          height: "100%",
   
        }}>
          {/* HỖ TRỢ */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 32,
            minWidth: 300,
            maxWidth: 400,
            background: "transparent"
          }}>
            <h3 style={{
              borderBottom: "2px solid #fff",
              display: "inline-block",
              paddingBottom: 4,
              marginBottom: 24,
              fontSize: 22,
              letterSpacing: 2,
              textAlign: "center"
            }}>
              HỖ TRỢ
            </h3>
            <a href="#" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold", fontSize: 16 }}>
              Điều khoản sử dụng
            </a>
          </div>
          {/* App Download */}
          <div style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
            border: "1.5px solid #fff",
            padding: "32px 24px",
            minWidth: 320, 
            maxWidth: 400, 
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <div style={{ fontSize: 20, marginBottom: 24, color: "#222", fontWeight: 400, textAlign: "center" }}>
              Ứng dụng “<span style={{ color: "red" }}>Giọt Hồng REDA</span>” đã có mặt trên:
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  style={{ height: 50 }}
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  style={{ height: 50 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LienHe;