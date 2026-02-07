// Mock user database (in production, use a real database)
export const users = [
  {
    id: '1',
    email: 'alex.rivera@university.edu',
    password: '$2a$10$YourHashedPasswordHere', // Will be replaced with actual hash
    name: 'Alex Rivera',
    studentId: 'STU-2024-0847',
    major: 'Computer Science',
    year: 'Junior',
    avatar: '',
    createdAt: '2024-01-15T00:00:00.000Z',
  },
  {
    id: '2',
    email: 'demo@student.edu',
    password: '$2a$10$YourHashedPasswordHere', // Will be replaced with actual hash
    name: 'Demo Student',
    studentId: 'STU-2024-0001',
    major: 'Engineering',
    year: 'Sophomore',
    avatar: '',
    createdAt: '2024-01-10T00:00:00.000Z',
  },
];

// Helper to find user by email
export const findUserByEmail = (email) => {
  return users.find(user => user.email.toLowerCase() === email.toLowerCase());
};

// Helper to find user by ID
export const findUserById = (id) => {
  return users.find(user => user.id === id);
};

// Helper to create new user
export const createUser = (userData) => {
  const newUser = {
    id: String(users.length + 1),
    ...userData,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  return newUser;
};
