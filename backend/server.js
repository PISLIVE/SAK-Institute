const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data
const courses = [
  {
    id: 1,
    title: 'B.A. (Bachelor of Arts)',
    desc: 'Explore humanities, social sciences, and liberal arts for a versatile career.',
    icon: '📚'
  },
  {
    id: 2,
    title: 'B.Com. (Bachelor of Commerce)',
    desc: 'Master accounting, finance, and business principles.',
    icon: '💼'
  },
  {
    id: 3,
    title: 'BBA (Business Administration)',
    desc: 'Develop entrepreneurial and management skills for the corporate world.',
    icon: '🏢'
  },
  {
    id: 4,
    title: 'BCA (Computer Applications)',
    desc: 'Dive into programming, software development, and modern IT.',
    icon: '💻'
  }
];

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'SAK Backend is running' });
});

app.get('/api/courses', (req, res) => {
  res.status(200).json(courses);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide all fields' });
  }

  // In a real app, this would save to DB or send an email
  console.log(`Received contact request from ${name} (${email}): ${message}`);
  
  res.status(200).json({ success: true, message: 'Message received successfully. We will get back to you shortly!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
