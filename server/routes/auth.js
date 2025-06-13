const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const {
      name,
      dob,
      gender,
      city,
      district,
      ward,
      address,
      username,
      password,
      email,
      phone,
      bloodType
    } = req.body;

    // Validate required fields
    if (!name || !dob || !gender || !city || !district || !ward || !address || 
        !username || !password || !email || !phone || !bloodType) {
      return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin!' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [
        { email },
        { username },
        { phone }
      ]
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: 'Email đã được sử dụng!' });
      }
      if (existingUser.username === username) {
        return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại!' });
      }
      if (existingUser.phone === phone) {
        return res.status(400).json({ message: 'Số điện thoại đã được sử dụng!' });
      }
    }

    // Check age eligibility
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    const isBirthdayPassed = m > 0 || (m === 0 && today.getDate() >= birthDate.getDate());
    const realAge = isBirthdayPassed ? age : age - 1;

    if (realAge < 18 || realAge > 60) {
      return res.status(400).json({ message: 'Độ tuổi phải từ 18 đến 60!' });
    }

    // Create new user
    const user = new User({
      name,
      dob,
      gender,
      city,
      district,
      ward,
      address,
      username,
      password,
      email,
      phone,
      bloodType
    });

    await user.save();

    // Create token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        bloodType: user.bloodType,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!' });
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        bloodType: user.bloodType,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get current user
router.get('/me', async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No authentication token, access denied' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(verified.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(401).json({ message: 'Token verification failed, authorization denied' });
  }
});

module.exports = router; 