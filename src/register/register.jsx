import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginBg from '../../img/login.png';
import LienHe from '../trangchu/LienHe';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import axios from 'axios';

const animatedComponents = makeAnimated();

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    gender: '',
    city: '',
    district: '',
    ward: '',
    address: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    bloodType: ''
  });
  const [error, setError] = useState('');
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [wardOptions, setWardOptions] = useState([]);
  const navigate = useNavigate();

  // Lấy danh sách tỉnh/thành khi load trang
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/p/')
      .then(res => res.json())
      .then(data => setProvinceOptions(data.map(p => ({ value: p.code, label: p.name }))));
  }, []);

  // Lấy danh sách quận/huyện khi chọn tỉnh/thành
  useEffect(() => {
    if (form.city) {
      fetch(`https://provinces.open-api.vn/api/p/${form.city}?depth=2`)
        .then(res => res.json())
        .then(data => setDistrictOptions(data.districts.map(d => ({ value: d.code, label: d.name }))));
    } else {
      setDistrictOptions([]);
      setWardOptions([]);
    }
  }, [form.city]);

  // Lấy danh sách phường/xã khi chọn quận/huyện
  useEffect(() => {
    if (form.district) {
      fetch(`https://provinces.open-api.vn/api/d/${form.district}?depth=2`)
        .then(res => res.json())
        .then(data => setWardOptions(data.wards.map(w => ({ value: w.code, label: w.name }))));
    } else {
      setWardOptions([]);
    }
  }, [form.district]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Kiểm tra tuổi ngay khi nhập ngày sinh
    if (name === "dob") {
      if (value) {
        const today = new Date();
        const dob = new Date(value);
        const age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        const isBirthdayPassed = m > 0 || (m === 0 && today.getDate() >= dob.getDate());
        const realAge = isBirthdayPassed ? age : age - 1;
        if (realAge < 18 || realAge > 60) {
          setError("Độ tuổi phải từ 18 đến 60!");
        } else {
          setError("");
        }
      } else {
        setError("");
      }
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Validate form
      if (!form.name || !form.dob || !form.gender || !form.city || !form.district || 
          !form.ward || !form.address || !form.username || !form.password || 
          !form.email || !form.phone || !form.bloodType) {
        setError('Vui lòng nhập đầy đủ thông tin!');
        return;
      }

      // Check age
      const today = new Date();
      const dob = new Date(form.dob);
      const age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      const isBirthdayPassed = m > 0 || (m === 0 && today.getDate() >= dob.getDate());
      const realAge = isBirthdayPassed ? age : age - 1;

      if (realAge < 18 || realAge > 60) {
        setError('Độ tuổi phải từ 18 đến 60!');
        return;
      }

      // Register user
      const response = await axios.post('http://localhost:4000/api/auth/register', form);
      
      // Save token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Show success message and redirect
      setError('Đăng ký thành công! Vui lòng nhập thông tin bổ sung.');
      setTimeout(() => navigate('/information'), 1000);
    } catch (error) {
      setError(error.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.');
    }
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
            marginBottom: 48,
            textAlign: 'left'
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#23509e', marginBottom: 24 }}>
            Đăng ký người hiến máu
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Họ và tên */}
            <label style={{ fontWeight: 600, marginBottom: 6, display: 'block', textAlign: 'left' }}>
              Họ và tên <span style={{ color: 'red' }}>*</span>
            </label>
            <div style={{ background: '#2563eb', color: '#fff', borderRadius: 6, padding: '8px 12px', marginBottom: 4, fontSize: 15, textAlign: 'left' }}>
              Nhập họ và tên đầy đủ
              <div style={{ color: '#e3eafc', fontSize: 13, marginTop: 2, textAlign: 'left' }}>VD: Nguyễn Văn A</div>
            </div>
            <input
              type="text"
              placeholder="Họ và tên"
              value={form.name}
              onChange={handleChange}
              name="name"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 16,
                boxSizing: 'border-box'
              }}
            />

            {/* Ngày sinh */}
            <label style={{ fontWeight: 600, marginBottom: 6, display: 'block', textAlign: 'left' }}>
              Ngày sinh <span style={{ color: 'red' }}>*</span>
            </label>
            <div style={{ background: '#2563eb', color: '#fff', borderRadius: 6, padding: '8px 12px', marginBottom: 4, fontSize: 15, textAlign: 'left' }}>
              Chọn hoặc nhập ngày tháng năm sinh theo định dạng: Ngày/Tháng/Năm<br />
              <div style={{ color: '#e3eafc', fontSize: 13, marginTop: 2, textAlign: 'left' }}>VD: 01/01/2000</div>
            </div>
            <input
              type="date"
              placeholder="Ngày sinh"
              value={form.dob}
              onChange={handleChange}
              name="dob"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 8,
                boxSizing: 'border-box'
              }}
            />
            {/* Thông báo lỗi độ tuổi dưới khung ngày sinh */}
            {error === "Độ tuổi phải từ 18 đến 60!" && (
              <div style={{ color: 'red', marginBottom: 8, fontWeight: 500, textAlign: 'left' }}>
                {error}
              </div>
            )}

            {/* Giới tính */}
            <label style={{ fontWeight: 600, marginBottom: 6, display: 'block', textAlign: 'left' }}>
              Giới tính <span style={{ color: 'red' }}>*</span>
            </label>
            <div style={{ background: '#2563eb', color: '#fff', borderRadius: 6, padding: '8px 12px', marginBottom: 4, fontSize: 15, textAlign: 'left' }}>
              Chọn giới tính đăng ký
            </div>
            <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  checked={form.gender === 'Nam'}
                  onChange={handleChange}
                  required
                /> Nam
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  checked={form.gender === 'Nữ'}
                  onChange={handleChange}
                  required
                /> Nữ
              </label>
            </div>

            {/* Địa chỉ liên hệ */}
            <label style={{ fontWeight: 600, marginBottom: 6, display: 'block', textAlign: 'left' }}>
              Địa chỉ liên hệ <span style={{ color: 'red' }}>*</span>
            </label>
            <div style={{ background: '#2563eb', color: '#fff', borderRadius: 6, padding: '8px 12px', marginBottom: 4, fontSize: 15, textAlign: 'left' }}>
              Địa chỉ của nơi bạn đang sinh sống. Vui điền đầy đủ thông tin bên dưới
            </div>
            <Select
              options={provinceOptions}
              components={animatedComponents}
              value={provinceOptions.find(opt => opt.value === form.city) || null}
              onChange={option => setForm({ ...form, city: option.value, district: '', ward: '' })}
              placeholder="Chọn tỉnh/thành phố"
              styles={{
                control: (base) => ({
                  ...base,
                  marginBottom: 16,
                  border: '1px solid #bfc9e0',
                  boxShadow: 'none',
                  '&:hover': { border: '1px solid #3b82f6' }
                }),
                placeholder: (base) => ({
                  ...base,
                  color: '#a0aec0',
                  fontSize: 16,
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#2d3748',
                  fontSize: 16,
                }),
              }}
            />
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <Select
                  options={districtOptions}
                  components={animatedComponents}
                  value={districtOptions.find(opt => opt.value === form.district) || null}
                  onChange={option => setForm({ ...form, district: option.value, ward: '' })}
                  placeholder="Chọn quận/huyện"
                  isDisabled={!form.city}
                  styles={{
                    control: (base) => ({
                      ...base,
                      marginBottom: 0,
                      border: '1px solid #bfc9e0',
                      boxShadow: 'none',
                      '&:hover': { border: '1px solid #3b82f6' }
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: '#a0aec0',
                      fontSize: 16,
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: '#2d3748',
                      fontSize: 16,
                    }),
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <Select
                  options={wardOptions}
                  components={animatedComponents}
                  value={wardOptions.find(opt => opt.value === form.ward) || null}
                  onChange={option => setForm({ ...form, ward: option.value })}
                  placeholder="Chọn phường/xã"
                  isDisabled={!form.district}
                  styles={{
                    control: (base) => ({
                      ...base,
                      marginBottom: 0,
                      border: '1px solid #bfc9e0',
                      boxShadow: 'none',
                      '&:hover': { border: '1px solid #3b82f6' }
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: '#a0aec0',
                      fontSize: 16,
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: '#2d3748',
                      fontSize: 16,
                    }),
                  }}
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Số nhà, tên đường"
              value={form.address}
              onChange={handleChange}
              name="address"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 16,
                boxSizing: 'border-box'
              }}
            />

            {/* Thông tin đăng nhập */}
            <label style={{ fontWeight: 600, marginBottom: 6, display: 'block', textAlign: 'left' }}>
              Thông tin đăng nhập <span style={{ color: 'red' }}>*</span>
            </label>
            <div style={{ background: '#2563eb', color: '#fff', borderRadius: 6, padding: '8px 12px', marginBottom: 4, fontSize: 15, textAlign: 'left' }}>
              Nhập thông tin để tạo tài khoản
            </div>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={form.username}
              onChange={handleChange}
              name="username"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 16,
                boxSizing: 'border-box'
              }}
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={form.password}
              onChange={handleChange}
              name="password"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 16,
                boxSizing: 'border-box'
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              name="email"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 16,
                boxSizing: 'border-box'
              }}
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
              name="phone"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 16,
                boxSizing: 'border-box'
              }}
            />

            {/* Nhóm máu */}
            <label style={{ fontWeight: 600, marginBottom: 6, display: 'block', textAlign: 'left' }}>
              Nhóm máu <span style={{ color: 'red' }}>*</span>
            </label>
            <div style={{ background: '#2563eb', color: '#fff', borderRadius: 6, padding: '8px 12px', marginBottom: 4, fontSize: 15, textAlign: 'left' }}>
              Chọn nhóm máu của bạn
            </div>
            <select
              value={form.bloodType}
              onChange={handleChange}
              name="bloodType"
              required
              style={{
                width: '100%',
                padding: 14,
                border: '1px solid #bfc9e0',
                borderRadius: 8,
                background: '#f7f9fc',
                fontSize: 16,
                marginBottom: 16,
                boxSizing: 'border-box'
              }}
            >
              <option value="">Chọn nhóm máu</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            {error && (
              <div style={{ color: error.includes('thành công') ? 'green' : 'red', margin: '16px 0', textAlign: 'center', fontWeight: 500 }}>
                {error}
              </div>
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
                boxShadow: '0 2px 8px #bfc9e0'
              }}
            >
              Đăng ký
            </button>
            <div style={{ textAlign: 'center', marginTop: 18 }}>
              Đã có tài khoản?{' '}
              <button
                style={{ color: '#23509e', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => navigate('/login')}
                type="button"
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
      <LienHe />
    </>
  );
};

export default Register;