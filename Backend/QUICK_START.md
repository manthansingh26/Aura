# Quick Start Guide

Get your Student Dashboard Backend up and running in 5 minutes!

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation Steps

### 1. Navigate to Backend Directory
```bash
cd Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
The `.env` file is already created with default values. You can modify it if needed:

```env
PORT=5000
NODE_ENV=development
API_VERSION=v1
CORS_ORIGIN=http://localhost:5173
```

### 4. Start the Server

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

### 5. Verify Server is Running

Open your browser or use curl:
```bash
curl http://localhost:5000/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2026-02-08T10:30:00.000Z",
  "uptime": 10.5,
  "environment": "development"
}
```

## Test the API

### Using Browser
Visit: `http://localhost:5000/api/v1/courses`

### Using curl
```bash
# Get all courses
curl http://localhost:5000/api/v1/courses

# Get student profile
curl http://localhost:5000/api/v1/student/profile

# Get today's schedule
curl http://localhost:5000/api/v1/schedule/today

# Get pending assignments
curl http://localhost:5000/api/v1/assignments/pending
```

### Using Postman
1. Import the API endpoints from `API_DOCUMENTATION.md`
2. Set base URL: `http://localhost:5000/api/v1`
3. Start making requests!

## Connect to Frontend

### Update Frontend API Configuration

Create a file `Frontend/src/config/api.js`:

```javascript
export const API_BASE_URL = 'http://localhost:5000/api/v1';

export const api = {
  // Student
  getProfile: () => `${API_BASE_URL}/student/profile`,
  updateProfile: () => `${API_BASE_URL}/student/profile`,
  getStats: () => `${API_BASE_URL}/student/stats`,
  
  // Courses
  getCourses: () => `${API_BASE_URL}/courses`,
  getCourse: (id) => `${API_BASE_URL}/courses/${id}`,
  
  // Schedule
  getWeeklySchedule: () => `${API_BASE_URL}/schedule/weekly`,
  getTodaySchedule: () => `${API_BASE_URL}/schedule/today`,
  getExams: () => `${API_BASE_URL}/schedule/exams`,
  
  // Assignments
  getAssignments: (params) => {
    const query = new URLSearchParams(params).toString();
    return `${API_BASE_URL}/assignments${query ? '?' + query : ''}`;
  },
  submitAssignment: (id) => `${API_BASE_URL}/assignments/${id}/submit`,
  
  // Grades
  getGrades: () => `${API_BASE_URL}/grades`,
  getRecentGrades: (limit = 5) => `${API_BASE_URL}/grades/recent?limit=${limit}`,
  getCurrentGPA: () => `${API_BASE_URL}/grades/gpa/current`,
  
  // Notifications
  getNotifications: () => `${API_BASE_URL}/notifications`,
  getUnreadCount: () => `${API_BASE_URL}/notifications/unread/count`,
  markAsRead: (id) => `${API_BASE_URL}/notifications/${id}/read`,
};
```

### Example: Fetch Courses in React

```javascript
import { useQuery } from '@tanstack/react-query';
import { api } from '@/config/api';

function CoursesPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const response = await fetch(api.getCourses());
      const result = await response.json();
      return result.data;
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.map(course => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  );
}
```

## Common Issues

### Port Already in Use
If port 5000 is already in use, change it in `.env`:
```env
PORT=3001
```

### CORS Errors
Make sure `CORS_ORIGIN` in `.env` matches your frontend URL:
```env
CORS_ORIGIN=http://localhost:5173
```

### Module Not Found
Make sure you ran `npm install` in the Backend directory.

## Next Steps

1. ✅ Server is running
2. 📖 Read [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API reference
3. 🔗 Connect your frontend using the examples above
4. 🗄️ (Optional) Replace mock data with a real database
5. 🔐 (Optional) Add authentication with JWT

## Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start

# Check for errors
npm run lint  # (if configured)

# Run tests
npm test  # (if configured)
```

## Project Structure

```
Backend/
├── src/
│   ├── server.js           # Entry point
│   ├── routes/             # API routes
│   ├── controllers/        # Request handlers
│   ├── services/           # Business logic
│   ├── middleware/         # Custom middleware
│   ├── data/              # Mock data
│   ├── config/            # Configuration
│   └── utils/             # Helper functions
├── .env                   # Environment variables
├── package.json
└── README.md
```

## Support

For detailed API documentation, see [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

For architecture details, see [README.md](./README.md)

---

Happy coding! 🚀
