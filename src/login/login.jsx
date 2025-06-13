import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../../img/login.png";
import LienHe from "../trangchu/LienHe";


const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // Giả lập đăng nhập thành công
    onLoginSuccess({ name: username });
    navigate('/'); // Chuyển hướng về trang chủ khi đăng nhập thành công
  };

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          background: `url(${loginBg}) center top / cover no-repeat`,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          overflowX: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: 600,
            width: '100%',
            margin: '32px auto 0 auto',
            padding: 32,
            border: '1px solid #e0e0e0',
            borderRadius: 10,
            background: 'rgba(255,255,255,0.97)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            zIndex: 2,
            marginBottom: 48
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#23509e', marginBottom: 24 }}>
            Đăng nhập người hiến máu
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: 28 }}>
              {/* Tên đăng nhập */}
              <div>
                <label style={{ fontWeight: 600, color: '#23509e', display: 'block', marginBottom: 6, textAlign: 'left' }}>
                  Tên đăng nhập <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tên đăng nhập"
                  style={{
                    width: '100%',
                    padding: 14,
                    border: '1px solid #bfc9e0',
                    borderRadius: 8,
                    background: '#f7f9fc',
                    fontSize: 16,
                    fontStyle: 'italic',
                    color: '#8b98b8',
                    boxSizing: 'border-box'
                  }}
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              {/* Mật khẩu */}
              <div>
                <label style={{ fontWeight: 600, color: '#23509e', display: 'block', marginBottom: 6, textAlign: 'left' }}>
                  Mật khẩu <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  style={{
                    width: '100%',
                    padding: 14,
                    border: '1px solid #bfc9e0',
                    borderRadius: 8,
                    background: '#f7f9fc',
                    fontSize: 16,
                    fontStyle: 'italic',
                    color: '#8b98b8',
                    boxSizing: 'border-box'
                  }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {error && (
              <div style={{ color: 'red', margin: '16px 0', textAlign: 'center', fontWeight: 500 }}>{error}</div>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: 14,
                background: 'linear-gradient(90deg, #23509e 60%, #3b82f6 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 18,
                cursor: 'pointer',
                boxShadow: '0 2px 8px #bfc9e0',
                marginTop: 28
              }}
            >
              Đăng nhập
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: 18 }}>
            Chưa có tài khoản?{' '}
            <button
              style={{ color: '#23509e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => navigate('/register')}
              type="button"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <LienHe />
    </>
  );
};

export default Login;