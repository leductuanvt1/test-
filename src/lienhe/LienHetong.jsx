import React, { useState } from 'react';
import LienHe from '../trangchu/LienHe'; // Thêm dòng này

const LienHeTong = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hiển thị thông báo đẹp hơn thay vì alert mặc định
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.25)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = 9999;

    const box = document.createElement('div');
    box.style.background = '#fff';
    box.style.borderRadius = '18px';
    box.style.padding = '32px 36px 24px 36px';
    box.style.boxShadow = '0 8px 32px rgba(57, 118, 219, 0.18)';
    box.style.display = 'flex';
    box.style.flexDirection = 'column';
    box.style.alignItems = 'center';
    box.style.minWidth = '320px';
    box.style.maxWidth = '90vw';

    const title = document.createElement('div');
    title.innerText = '🎉 Gửi thành công!';
    title.style.fontSize = '24px';
    title.style.fontWeight = '700';
    title.style.marginBottom = '12px';
    title.style.color = '#23509e';

    const msg = document.createElement('div');
    msg.innerText = 'Cảm ơn bạn đã gửi lời nhắn!';
    msg.style.fontSize = '18px';
    msg.style.marginBottom = '28px';
    msg.style.textAlign = 'center';

    const btn = document.createElement('button');
    btn.innerText = 'Đóng';
    btn.style.background = 'linear-gradient(90deg, #3976db 60%, #23509e 100%)';
    btn.style.color = '#fff';
    btn.style.fontWeight = '600';
    btn.style.fontSize = '17px';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.padding = '10px 32px';
    btn.style.cursor = 'pointer';
    btn.style.boxShadow = '0 2px 8px rgba(57, 118, 219, 0.10)';
    btn.onclick = () => document.body.removeChild(modal);

    box.appendChild(title);
    box.appendChild(msg);
    box.appendChild(btn);
    modal.appendChild(box);
    document.body.appendChild(modal);

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div style={{
        // minHeight: '100vh', // Bỏ dòng này hoặc giảm giá trị
        background: '#f7fafc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '24px 0' // Giảm padding từ 48px xuống 24px
      }}>
        <div style={{
          display: 'flex',
          gap: 64,
          maxWidth: 1100,
          width: '100%',
          justifyContent: 'center'
        }}>
          {/* Thông tin liên hệ */}
          <div style={{
            background: '#3976db',
            color: '#fff',
            borderRadius: '90px 90px 60px 60px',
            padding: '48px 48px 48px 48px',
            width: 400,
            minWidth: 320,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 32, alignSelf: 'center' }}>Liên hệ</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 32, marginRight: 16 }}>📧</span>
              <div>
                <div style={{ fontWeight: 500, fontSize: 20 }}>Email</div>
                <div style={{ fontSize: 18, marginTop: 2 }}>@gmail.com</div>
              </div>
            </div>
            <hr style={{ width: '100%', border: '0.5px solid #fff', opacity: 0.3, margin: '24px 0' }} />
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 32, marginRight: 16 }}>📞</span>
              <div>
                <div style={{ fontWeight: 500, fontSize: 20 }}>Hotline</div>
              </div>
            </div>
            <div style={{ fontSize: 17, marginBottom: 8 }}>
              - TT Hiến Máu Nhân Đạo:<br />
              <span style={{ fontWeight: 700, fontSize: 19, display: 'block', textAlign: 'left' }}>
                028 3868 5509<br />028 3868 5507
              </span>
            </div>
            <div style={{ fontSize: 17, marginBottom: 8 }}>
              - Bệnh viện BTH:<br />
              <span style={{ fontWeight: 700, fontSize: 19, display: 'block', textAlign: 'left' }}>
                028 39571342<br />028 39557858
              </span>
            </div>
            <div style={{ fontSize: 17 }}>
              - TT truyền máu Chợ Rẫy:<br />
              <span style={{ fontWeight: 700, fontSize: 19, display: 'block', textAlign: 'left' }}>
                028 39555885
              </span>
            </div>
          </div>
          {/* Form gửi lời nhắn */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <h2 style={{ color: '#23509e', fontSize: 36, fontWeight: 700, marginBottom: 12 }}>
              Gửi lời nhắn cho chúng tôi
            </h2>
            <div
              style={{
                fontSize: 18,
                marginBottom: 28,
                textAlign: 'left' // Thêm dòng này để sát lề trái
              }}
            >
              Nếu bạn có bất kỳ thắc mắc nào liên quan đến các hoạt động hiến máu tình nguyện, xin vui lòng liên hệ với chúng tôi qua địa chỉ email <a href="mailto:@gmail.com" style={{ color: '#23509e', fontWeight: 700, textDecoration: 'underline' }}>@gmail.com</a> hoặc gửi thông tin cho chúng tôi theo mẫu bên dưới:
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 500, fontSize: 18 }}>Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập họ và tên"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 8,
                    border: '1px solid #c7d6ee',
                    marginTop: 6,
                    fontSize: 17,
                    outline: 'none',
                    background: '#fafdff'
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 500, fontSize: 18 }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập email"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 8,
                    border: '1px solid #c7d6ee',
                    marginTop: 6,
                    fontSize: 17,
                    outline: 'none',
                    background: '#fafdff'
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontWeight: 500, fontSize: 18 }}>Lời nhắn</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập lời nhắn"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 8,
                    border: '1px solid #c7d6ee',
                    marginTop: 6,
                    fontSize: 17,
                    outline: 'none',
                    background: '#fafdff',
                    resize: 'vertical'
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  background: '#3976db',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 18,
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 32px',
                  cursor: 'pointer',
                  opacity: form.name && form.email && form.message ? 1 : 0.5
                }}
                disabled={!(form.name && form.email && form.message)}
              >
                Gửi lời nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
      <LienHe /> 
    </>
  );
};

export default LienHeTong;