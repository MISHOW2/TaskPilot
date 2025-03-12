const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const { addTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskControllers');

// Routes
router.post('/addtask', authenticateToken, addTask);
router.get('/all', getAllTasks);
router.get('/tasks/:id', authenticateToken, getTaskById);
router.put('/update/:id', authenticateToken, updateTask);
router.delete('/deleteTask/:id', authenticateToken, deleteTask); // Fixed route

module.exports = router;
