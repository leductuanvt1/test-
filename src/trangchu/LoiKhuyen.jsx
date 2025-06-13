import React from "react";

const adviceList = [
  {
    title: "Nên:",
    color: "#00BCD4",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#00BCD4" strokeWidth="4" fill="none"/>
        <path d="M14 25.5L21.5 33L34 17" stroke="#00BCD4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: [
      "Ăn nhẹ và uống nhiều nước (300-500ml) trước khi hiến máu.",
      "Đè chặt miếng bông gòn cầm máu nơi kim chích 10 phút, giữ băng keo cá nhân trong 4-6 giờ.",
      "Nằm và ngồi nghỉ tại chỗ 10 phút sau khi hiến máu.",
      "Nằm nghi đầu thấp, kê chân cao nếu thấy chóng mặt, mệt, buồn nôn.",
      "Chườm lạnh (túi chườm chuyên dụng hoặc cho đá vào khăn) chườm vết chích nếu bị sưng, bầm tím.",
    ],
    doctor: true,
    fontSize: 18,
    titleFontSize: 24,
  },
  {
    title: "Không nên:",
    color: "#e53935",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="#e53935" strokeWidth="4" fill="none"/>
        <path d="M14 14L30 30M30 14L14 30" stroke="#e53935" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
    items: [
      "Uống sữa, rượu bia trước khi hiến máu.",
      "Lái xe đi xa, khuân vác, làm việc nặng hoặc luyện tập thể thao gắng sức trong ngày lấy máu.",
    ],
    doctor: true,
    fontSize: 17,
    titleFontSize: 22,
  },
  {
    title: "Lưu ý:",
    color: "#ff9800",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="#ff9800" strokeWidth="4" fill="none"/>
        <path d="M22 13V25" stroke="#ff9800" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="22" cy="31" r="2.5" fill="#ff9800"/>
      </svg>
    ),
    items: [
      "Nếu phát hiện chảy máu tại chỗ chích:",
      " Giơ tay cao.",
      " Lấy tay kia ấn nhẹ vào miếng bông hoặc băng dính.",
      " Liên hệ nhân viên y tế để được hỗ trợ khi cần thiết.",
    ],
    doctor: true,
    fontSize: 17,
    titleFontSize: 22,
  },
];

const LoiKhuyen = () => {
  return (
    <div
      style={{
        background: "#1565c0", 
        padding: "32px 0",
        minHeight: 500,
      }}
    >
      <div
        style={{
          maxWidth: 1200, // tăng maxWidth cho cân đối 2 bên
          margin: "0 auto",
          padding: "0 8px",
        }}
      >
        {/* Tiêu đề */}
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 18,
            justifyContent: "center",
            alignItems: "stretch", // Thêm dòng này để các khung cao bằng nhau
            // overflowX: "auto",  // <-- XÓA hoặc comment dòng này
          }}
        >
          {/* Cột trái: Ô Nên */}
          <div style={{ flex: "1.5 1 400px", maxWidth: 420, minWidth: 220, height: "100%" }} data-name="box-should-do">
            <div
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: "20px 16px 16px 16px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                borderTop: `6px solid ${adviceList[0].color}`,      // Sử dụng màu chữ Nên
                borderBottom: `6px solid ${adviceList[0].color}`,   // Sử dụng màu chữ Nên
                marginBottom: 0,
                transition: "transform 0.2s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              data-name="content-should-do"
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                {adviceList[0].icon}
                <span
                  style={{
                    color: adviceList[0].color,
                    fontWeight: 700,
                    fontSize: 24, // tăng tiêu đề
                    marginLeft: 10,
                  }}
                >
                  {adviceList[0].title}
                </span>
              </div>
              <div
                style={{
                  height: 4,
                  background: adviceList[0].color,
                  borderRadius: 2,
                  marginBottom: 16,
                  marginLeft: 0,
                  marginRight: 0,
                  width: "100%",
                }}
              />
              <div style={{ flex: 1, fontSize: 18, color: "#222", lineHeight: 1.7, textAlign: "left" }}>
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {adviceList[0].items.map((item, i) => (
                    <li key={i} style={{ marginBottom: 12 }}>{item}</li>
                  ))}
                </ul>
              </div>
              {adviceList[0].doctor && (
                <div style={{ marginTop: 18, fontWeight: 700, fontSize: 15, color: "#444", textAlign: "right" }}>
                  Bác sĩ Ngô Văn Tân<br />
                  <span style={{ fontWeight: 400 }}>
                    Trưởng khoa Tiếp nhận hiến máu<br />
                    Bệnh viện Truyền máu Huyết học
                  </span>
                </div>
              )}
            </div>
          </div>
          {/* Cột phải: Tiêu đề + 2 ô Không nên & Lưu ý cùng hàng */}
          <div
            style={{
              flex: "1 1 600px",
              minWidth: 440,
              maxWidth: 720,
              display: "flex",
              flexDirection: "column",
              gap: 18,
              alignItems: "stretch"
            }}
            data-name="right-column"
          >
            {/* Tiêu đề nằm trên hai khung bên phải */}
            <h2
              style={{
                color: "#FFC107",
                fontSize: 38.5,
                fontWeight: 600,
                marginBottom: 16,
                marginTop: 0,
                textAlign: "left",
                lineHeight: 1.2,
                letterSpacing: "-1px",
                paddingLeft: 8,
                maxWidth: "100%", // thêm dòng này nếu muốn kéo dài hết cột
                whiteSpace: "normal", // đảm bảo không bị giới hạn dòng
                textTransform: "uppercase", // thêm dòng này để in hoa
              }}
              data-name="main-title"
            >
              Những lời khuyên trước và sau khi hiến máu
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 18,
                alignItems: "flex-start",
              }}
              data-name="row-shouldnt-do-note"
            >
              {/* Ô Không nên */}
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 16px 16px 16px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  borderTop: `4px solid ${adviceList[1].color}`,
                  borderBottom: `5px solid ${adviceList[1].color}`, // Thêm dòng này
                  marginBottom: 0,
                  transition: "transform 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "100%",
                }}
                data-name="box-should-not-do"
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                  {adviceList[1].icon}
                  <span
                    style={{
                      color: adviceList[1].color,
                      fontWeight: 700,
                      fontSize: 24,
                      marginLeft: 10,
                    }}
                  >
                    {adviceList[1].title}
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: adviceList[1].color,
                    borderRadius: 2,
                    marginBottom: 16,
                    marginLeft: 0,
                    marginRight: 0,
                    width: "100%",
                  }}
                />
                <div style={{ flex: 1, fontSize: 18, color: "#222", lineHeight: 1.7, textAlign: "left" }}>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {adviceList[1].items.map((item, i) => (
                      <li key={i} style={{ marginBottom: 12 }}>{item}</li>
                    ))}
                  </ul>
                </div>
                {adviceList[1].doctor && (
                  <div style={{ marginTop: 18, fontWeight: 700, fontSize: 15, color: "#444", textAlign: "right" }}>
                    Bác sĩ Ngô Văn Tân<br />
                    <span style={{ fontWeight: 400 }}>
                      Trưởng khoa Tiếp nhận hiến máu<br />
                      Bệnh viện Truyền máu Huyết học
                    </span>
                  </div>
                )}
              </div>
              {/* Ô Lưu ý */}
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: 12,
                  padding: "20px 16px 16px 16px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  borderTop: `4px solid ${adviceList[2].color}`,
                  borderBottom: `5px solid ${adviceList[2].color}`, // Thêm dòng này
                  marginBottom: 0,
                  transition: "transform 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "100%",
                }}
                data-name="box-note"
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                  {adviceList[2].icon}
                  <span
                    style={{
                      color: adviceList[2].color,
                      fontWeight: 700,
                      fontSize: 24,
                      marginLeft: 10,
                    }}
                  >
                    {adviceList[2].title}
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: adviceList[2].color,
                    borderRadius: 2,
                    marginBottom: 16,
                    marginLeft: 0,
                    marginRight: 0,
                    width: "100%",
                  }}
                />
                <div style={{ flex: 1, fontSize: 18, color: "#222", lineHeight: 1.7, textAlign: "left" }}>
                  <ul style={{ paddingLeft: 18, margin: 0 }}>
                    {adviceList[2].items.map((item, i) => (
                      <li key={i} style={{ marginBottom: 12 }}>{item}</li>
                    ))}
                  </ul>
                </div>
                {adviceList[2].doctor && (
                  <div style={{ marginTop: 18, fontWeight: 700, fontSize: 15, color: "#444", textAlign: "right" }}>
                    Bác sĩ Ngô Văn Tân<br />
                    <span style={{ fontWeight: 400 }}>
                      Trưởng khoa Tiếp nhận hiến máu<br />
                      Bệnh viện Truyền máu Huyết học
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoiKhuyen;