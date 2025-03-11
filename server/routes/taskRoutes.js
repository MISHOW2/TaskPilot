const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const { addTask, getAllTasks, getTaskById } = require('../controllers/taskControllers');

// Routes
router.post('/addtask', authenticateToken, addTask);
router.get('/all', getAllTasks);
router.get('/tasks/:id', authenticateToken, getTaskById);

module.exports = router;
