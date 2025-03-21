const { tasks } = require('../config/db');

// Add a new task
const addTask = (req, res) => {
  const { title, description, completed, dueDate } = req.body;
  const userId = req.user.userId;
  const userEmail = req.user.email;

  // Initialize user's task list if it doesn't exist
  if (!tasks[userEmail]) {
    tasks[userEmail] = [];
  }

  // Generate taskId based on the user's existing tasks
  const userTasks = tasks[userEmail];
  const taskId = userTasks.length ? userTasks[userTasks.length - 1].taskId + 1 : 1;

  const newTask = {
    taskId,
    userEmail,
    userId,
    title,
    description,
    completed: completed !== undefined ? completed : false,
    dueDate,
  };

  // Add the task to the user's list
  tasks[userEmail].push(newTask);

  res.status(201).json({ success: true, msg: 'Task created successfully!', task: newTask });
};

// Get all tasks
const getAllTasks = (req, res) => {
  const userEmail = req.query.userEmail;

  if (userEmail) {
    // Fetch tasks for a specific user
    if (tasks[userEmail]) {
      return res.json({ success: true, msg: 'Tasks fetched successfully', tasks: { [userEmail]: tasks[userEmail] } });
    } else {
      return res.status(404).json({ success: false, msg: 'No tasks found for this user' });
    }
  }

  // If no userEmail is provided, return all tasks
  if (Object.keys(tasks).length === 0) {
    return res.status(404).json({ success: false, msg: 'No tasks available' });
  }

  res.json({ success: true, msg: 'All tasks fetched successfully', tasks });
};

// Get a single task by ID
const getTaskById = (req, res) => {
  const { id } = req.params;  // Extract task ID from the URL
  const userEmail = req.user.email;

  // Log to check if ID is being passed correctly
  console.log('Task ID:', id);  // This should print the task ID

  if (!tasks[userEmail]) {
    return res.status(404).json({ success: false, msg: 'No tasks found for this user' });
  }

  const task = tasks[userEmail].find(task => task.taskId === parseInt(id));

  if (!task) {
    return res.status(404).json({ success: false, msg: 'Task not found' });
  }

  res.json({ success: true, msg: 'Task fetched successfully', task });
};



const updateTask = (req, res) => {
  const { id } = req.params;
  const userEmail = req.user.email;

  if (!tasks[userEmail]) {
    return res.status(404).json({ success: false, msg: 'No tasks found for this user' });
  }

  const task = tasks[userEmail].find(task => task.taskId === parseInt(id));

  if (!task) {
    return res.status(404).json({ success: false, msg: 'Task not found' });
  }

  res.json({ success: true, msg: 'Task fetched successfully', task });
};

const deleteTask = (req, res) => {
  const { id } = req.params;  // Task ID from URL
  const userEmail = req.user.email; // Get user email from token

  // Check if user has tasks
  if (!tasks[userEmail]) {
    return res.status(404).json({ success: false, msg: 'No tasks found for this user' });
  }

  // Find task index
  const taskIndex = tasks[userEmail].findIndex(task => task.taskId === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ success: false, msg: 'Task not found' });
  }

  // Remove task
  tasks[userEmail].splice(taskIndex, 1);

  res.json({ success: true, msg: 'Task deleted successfully' });
};


module.exports = { addTask, getAllTasks, getTaskById,updateTask,deleteTask };
