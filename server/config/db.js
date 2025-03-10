
const users = [
  {
    userId: 1,
    fullname:"John Doe",
    email: "johndoe@example.com",
    password: "123456",  // Use plain text for now, hash later
  }
];

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
  users,
  addUser,
  getUserByEmail,
  getUserById,
  getAllUsers
};
