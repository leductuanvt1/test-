const router = require('express').Router();
const Appointment = require('../models/Appointment');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No authentication token, access denied' });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token verification failed, authorization denied' });
  }
};

// Create new appointment
router.post('/', auth, async (req, res) => {
  try {
    const {
      serviceType,
      date,
      time,
      notes,
      stylist,
      duration,
      price
    } = req.body;

    // Check if the time slot is available
    const existingAppointment = await Appointment.findOne({
      date,
      time,
      status: { $ne: 'cancelled' }
    });

    if (existingAppointment) {
      return res.status(400).json({ message: 'This time slot is already booked' });
    }

    const appointment = new Appointment({
      userId: req.user.userId,
      serviceType,
      date,
      time,
      notes,
      stylist,
      duration,
      price
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all appointments for a user
router.get('/my-appointments', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ userId: req.user.userId })
      .sort({ date: 1, time: 1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get appointment by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update appointment
router.put('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check if trying to change date/time
    if (req.body.date || req.body.time) {
      const existingAppointment = await Appointment.findOne({
        date: req.body.date || appointment.date,
        time: req.body.time || appointment.time,
        status: { $ne: 'cancelled' },
        _id: { $ne: appointment._id }
      });

      if (existingAppointment) {
        return res.status(400).json({ message: 'This time slot is already booked' });
      }
    }

    // Update appointment
    Object.assign(appointment, req.body);
    await appointment.save();

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Cancel appointment
router.delete('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    appointment.status = 'cancelled';
    await appointment.save();

    res.json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get available time slots for a date
router.get('/available-slots/:date', auth, async (req, res) => {
  try {
    const { date } = req.params;
    const bookedSlots = await Appointment.find({
      date,
      status: { $ne: 'cancelled' }
    }).select('time');

    // Define business hours (9 AM to 6 PM)
    const businessHours = [];
    for (let hour = 9; hour < 18; hour++) {
      for (let minute of ['00', '30']) {
        businessHours.push(`${hour.toString().padStart(2, '0')}:${minute}`);
      }
    }

    // Filter out booked slots
    const bookedTimes = bookedSlots.map(slot => slot.time);
    const availableSlots = businessHours.filter(time => !bookedTimes.includes(time));

    res.json(availableSlots);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router; 