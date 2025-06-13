import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Resister from './login/resister';

function App() {
  const [accounts, setAccounts] = useState([]);

  // Hàm xử lý đăng ký
  const handleRegister = (newAccount) => {
    if (accounts.find(acc => acc.email === newAccount.email)) {
      return { success: false, message: 'Email đã được đăng ký!' };
    }
    setAccounts([...accounts, newAccount]);
    return { success: true };
  };

  // Hàm xử lý đăng nhập
  const handleLoginSuccess = (user) => {
    // Xử lý sau khi đăng nhập thành công (ví dụ: lưu user, chuyển trang, ...)
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <Login accounts={accounts} onLoginSuccess={handleLoginSuccess} />
        } />
        <Route path="/resister" element={
          <Resister onRegister={handleRegister} />
        } />
        {/* Các route khác */}
      </Routes>
    </Router>
  );
}

export default App;