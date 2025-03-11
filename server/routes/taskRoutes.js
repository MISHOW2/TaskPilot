const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const { tasks } = require('../config/db');

// Apply authentication middleware to all routes

// Create a task
router.post('/addtask', authenticateToken, (req, res) => {
  const { title, description, completed, dueDate } = req.body;
  const userId = req.user.userId; // Extract user ID from token
  const userEmail = req.user.email;
  
  // Generate a unique task ID
  const taskId = tasks.length ? tasks[tasks.length - 1].taskId + 1 : 1;
  const newTask = {
    taskId,
    userEmail,
    userId,
    title,
    description,
    completed: completed !== undefined ? completed : false,
    dueDate,
  };

  // Add the new task under the user's email
  if (!tasks[userEmail]) {
    tasks[userEmail] = [];  // Initialize empty array if no tasks for this user yet
  }
  tasks[userEmail].push(newTask);

  res.status(201).json({ success: true, msg: 'Task created successfully!', task: newTask });
});

// Get tasks for a specific user (admin can pass userEmail)
router.get('/all', (req, res) => {
  const userEmail = req.query.userEmail; // Get the userEmail from query parameter
  
  if (userEmail) {
    // If userEmail is provided, fetch tasks for that specific user
    if (tasks[userEmail]) {
      res.json({ success: true, msg: 'Tasks fetched successfully', tasks: tasks[userEmail] });
    } else {
      res.status(404).json({ success: false, msg: 'No tasks found for this user' });
    }
  } else {
    // If no userEmail is provided, return all tasks (admin view)
    const allTasks = Object.values(tasks).flat();  // Flatten all tasks into a single array
    res.json({ success: true, msg: 'Tasks fetched successfully', tasks: allTasks });
  }
});

module.exports = router;
