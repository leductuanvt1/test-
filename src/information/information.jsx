import React from "react";
import { useNavigate } from "react-router-dom"; // Thêm dòng này

const Information = () => {
  const navigate = useNavigate(); // Thêm dòng này

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px #e0e0e0",
        padding: 32,
      }}
    >
      <h2 style={{ color: "#23509e", marginBottom: 16 }}>
        Hồ sơ người hiến máu
      </h2>
      <p style={{ marginBottom: 32, fontSize: 16 }}>
        Vui lòng nhập thông tin người hiến máu để hoàn thành hồ sơ người hiến máu.
      </p>
      <form className="info-form">
        {/* Điện thoại di động */}
        <div style={{ marginBottom: 32 }}>
          <label style={{ fontWeight: 600, fontSize: 18 }}>
            Điện thoại di động <span style={{ color: "red" }}>(*)</span>
          </label>
          <div
            style={{
              background: "#3973d6",
              color: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              margin: "12px 0 0 0",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: 8, fontSize: 20 }}>ℹ️</span>
            Số điện thoại của bạn hoặc bất kỳ số nào mà chúng tôi có thể liên lạc.
            Số điện thoại di động gồm 10 chữ số
          </div>
          <input
            type="tel"
            placeholder="VD: 0909090909"
            style={{
              width: "100%",
              marginTop: 8,
              padding: "12px 16px",
              borderRadius: 8,
              border: "1px solid #cfd8dc",
              fontSize: 16,
              color: "#b0b0b0",
              fontStyle: "italic",
              outline: "none",
            }}
          />
        </div>

        {/* Email */}
        <div style={{ marginBottom: 32 }}>
          <label style={{ fontWeight: 600, fontSize: 18 }}>
            Email <span style={{ color: "red" }}>(*)</span>
          </label>
          <div
            style={{
              background: "#3973d6",
              color: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              margin: "12px 0 0 0",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: 8, fontSize: 20 }}>ℹ️</span>
            Vui lòng cung cấp địa chỉ email để xác thực tài khoản và nhận kết quả
            máu. Email phải đúng theo định dạng:
            emailnguoihienmau@gmail.com
          </div>
          <input
            type="email"
            placeholder="Vui lòng nhập email"
            style={{
              width: "100%",
              marginTop: 8,
              padding: "12px 16px",
              borderRadius: 8,
              border: "1px solid #cfd8dc",
              fontSize: 16,
              color: "#b0b0b0",
              fontStyle: "italic",
              outline: "none",
            }}
          />
        </div>

        {/* Nghề nghiệp */}
        <div style={{ marginBottom: 32 }}>
          <label style={{ fontWeight: 600, fontSize: 18 }}>
            Nghề nghiệp <span style={{ color: "red" }}>(*)</span>
          </label>
          <select
            style={{
              width: "100%",
              marginTop: 8,
              padding: "12px 16px",
              borderRadius: 8,
              border: "1px solid #cfd8dc",
              fontSize: 16,
              color: "#b0b0b0",
              fontStyle: "italic",
              outline: "none",
              background: "#fff",
              appearance: "none",
            }}
            defaultValue=""
          >
            <option
              value=""
              disabled
              style={{
                color: "#b0b0b0",
                fontStyle: "italic",
              }}
            >
              Vui lòng chọn thông tin nghề nghiệp
            </option>
            <option
              value="student"
              style={{ color: "#222", fontStyle: "normal" }}
            >
              Học sinh/Sinh viên
            </option>
            <option
              value="office"
              style={{ color: "#222", fontStyle: "normal" }}
            >
              Nhân viên văn phòng
            </option>
            <option
              value="freelancer"
              style={{ color: "#222", fontStyle: "normal" }}
            >
              Freelancer
            </option>
            <option
              value="other"
              style={{ color: "#222", fontStyle: "normal" }}
            >
              Khác
            </option>
          </select>
        </div>
        {/* Nút điều hướng */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 40 }}>
          <button
            type="button"
            onClick={() => navigate("/register")} // Thêm dòng này
            style={{
              padding: "10px 32px",
              border: "1px solid #3973d6",
              borderRadius: 6,
              background: "#fff",
              color: "#3973d6",
              fontWeight: 500,
              fontSize: 18,
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Quay về
          </button>
          <button
            type="submit"
            style={{
              padding: "10px 32px",
              border: "none",
              borderRadius: 6,
              background: "#e3ecfa",
              color: "#b0b0b0",
              fontWeight: 500,
              fontSize: 18,
              cursor: "not-allowed",
            }}
            disabled
          >
            Tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
};

export default Information;