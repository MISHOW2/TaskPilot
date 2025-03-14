
const users = [
  {
    userId: 1,
    fullname:"John Doe",
    email: "johndoe@example.com",
    password: "123456",  // Use plain text for now, hash later
  }
];


const tasks = {
  "user1@email.com": [
    { taskId: 1, userId: 1, title: "Complete React project", description: "Finish the dashboard UI", completed: false, dueDate: "2025-03-15" },
    { taskId: 2, userId: 1, title: "Write API documentation", description: "Document all endpoints", completed: true, dueDate: "2025-03-12" }
  ],
  "user2@email.com": [
    { taskId: 1, userId: 2, title: "Prepare for meeting", description: "Create presentation slides", completed: false, dueDate: "2025-03-18" },
    { taskId: 2, userId: 2, title: "Fix login bug", description: "Resolve authentication issue", completed: false, dueDate: "2025-03-16" }
  ]
};

// Function to simulate auto-increment ID
let userId = users.length + 1;

const addUser = (user) => {
  user.id = userId++;
  users.push(user);
  return user;
};

const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

const getUserById = (id) => {
  return users.find(user => user.id === id);
};

const getAllUsers = () => {
  return users;
};

module.exports = {
  tasks,
  users,
  addUser,
  getUserByEmail,
  getUserById,
  getAllUsers
};
