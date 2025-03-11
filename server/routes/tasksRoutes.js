const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const { tasks, users } = require('../config/db');



router.use(authenticateToken)

// Create a task
router.post('/addtask', checkAuth, (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const userId = req.userId; // Get the logged-in user's ID from JWT

  const taskId = tasks.length + 1;
  const newTask = {
    taskId,
    userId,
    title,
    description,
    status: status || 'pending',
    dueDate,
  };

  tasks.push(newTask);
  res.status(201).json({ success: true, msg: 'Task created successfully!', task: newTask });
});


// Protected route to fetch tasks
router.get('/tasks', (req, res) => {
  // Your logic to fetch the user's tasks
  res.json({ success: true, msg: 'Tasks fetched successfully' });
});
module.exports = router;
