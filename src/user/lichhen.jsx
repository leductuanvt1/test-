import React from "react";

export default function LichHen() {
  // Lấy thông tin người dùng từ localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", padding: 24 }}>
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          padding: 24,
        }}
      >
        <h2 style={{ color: "#1976d2", fontWeight: 600, marginBottom: 24 }}>
          Thông tin đăng ký hiến máu
        </h2>
        <div style={{ display: "flex", gap: 24 }}>
          {/* Left: Thông tin cá nhân & liên hệ */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                background: "#f6fafd",
                borderRadius: 8,
                padding: 16,
                border: "1px solid #e3e8ee",
              }}
            >
              <div style={{ fontWeight: 600, color: "#1976d2", marginBottom: 12 }}>
                Thông tin cá nhân
              </div>
              <table style={{ width: "100%", fontSize: 15 }}>
                <tbody>
                  <tr>
                    <td style={{ color: "#888" }}>Họ và tên:</td>
                    <td style={{ fontWeight: 600 }}>{user.name || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Số CMND:</td>
                    <td>{user.cmnd || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Số CCCD:</td>
                    <td>{user.cccd || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Số hộ chiếu:</td>
                    <td>{user.passport || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Ngày sinh:</td>
                    <td style={{ fontWeight: 600 }}>{user.birthday || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Giới tính:</td>
                    <td>{user.gender || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Nghề nghiệp:</td>
                    <td>{user.job || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Đơn vị:</td>
                    <td>{user.unit || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Nhóm máu:</td>
                    <td>{user.blood || "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              style={{
                background: "#f6fafd",
                borderRadius: 8,
                padding: 16,
                border: "1px solid #e3e8ee",
              }}
            >
              <div style={{ fontWeight: 600, color: "#1976d2", marginBottom: 12 }}>
                Thông tin liên hệ
              </div>
              <table style={{ width: "100%", fontSize: 15 }}>
                <tbody>
                  <tr>
                    <td style={{ color: "#888" }}>Địa chỉ liên hệ:</td>
                    <td>{user.address || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Điện thoại di động:</td>
                    <td>{user.phone || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Điện thoại bàn:</td>
                    <td>{user.landline || "-"}</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#888" }}>Email:</td>
                    <td>{user.email || "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Right: Phiếu đăng ký */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                background: "#f6fafd",
                borderRadius: 8,
                padding: 16,
                border: "1px solid #e3e8ee",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 350,
              }}
            >
              <div style={{ fontWeight: 600, color: "#1976d2", marginBottom: 12 }}>
                Phiếu đăng ký hiến máu
              </div>
              <div style={{ textAlign: "center", marginTop: 32 }}>
                {/* SVG minh họa */}
                <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
                  <rect x="15" y="20" width="70" height="90" rx="8" fill="#fff" stroke="#d1d9e6" strokeWidth="2"/>
                  <rect x="30" y="10" width="40" height="18" rx="4" fill="#1976d2"/>
                  <rect x="38" y="18" width="24" height="8" rx="2" fill="#fff"/>
                  <rect x="30" y="40" width="40" height="6" rx="2" fill="#e3e8ee"/>
                  <rect x="30" y="52" width="40" height="6" rx="2" fill="#e3e8ee"/>
                  <rect x="30" y="64" width="25" height="6" rx="2" fill="#e3e8ee"/>
                  <circle cx="75" cy="90" r="10" fill="#e3f9e5"/>
                  <path d="M70 90l5 5 10-10" stroke="#4caf50" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
                <div style={{ color: "#888", marginTop: 16, fontSize: 16 }}>
                  Chưa có phiếu đăng ký hiến máu
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <div style={{ textAlign: "right", marginTop: 32 }}>
          <button
            style={{
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              padding: "10px 32px",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(25, 118, 210, 0.08)",
            }}
          >
            Đăng ký hiến máu
          </button>
        </div>
      </div>
    </div>
  );
}