# Student Dashboard Backend API

A production-ready RESTful API backend for the Student Dashboard application built with Node.js and Express following MVC architecture.

## 🏗️ Architecture

```
Backend/
├── src/
│   ├── server.js              # Application entry point
│   ├── config/
│   │   └── constants.js       # Application constants
│   ├── controllers/           # Request handlers
│   │   ├── student.controller.js
│   │   ├── course.controller.js
│   │   ├── schedule.controller.js
│   │   ├── assignment.controller.js
│   │   ├── grade.controller.js
│   │   └── notification.controller.js
│   ├── services/              # Business logic layer
│   │   ├── student.service.js
│   │   ├── course.service.js
│   │   ├── schedule.service.js
│   │   ├── assignment.service.js
│   │   ├── grade.service.js
│   │   └── notification.service.js
│   ├── routes/                # API routes
│   │   ├── index.js
│   │   ├── student.routes.js
│   │   ├── course.routes.js
│   │   ├── schedule.routes.js
│   │   ├── assignment.routes.js
│   │   ├── grade.routes.js
│   │   └── notification.routes.js
│   ├── middleware/            # Custom middleware
│   │   ├── errorHandler.js
│   │   ├── logger.js
│   │   └── validator.js
│   ├── data/                  # Mock database
│   │   └── mockData.js
│   └── utils/                 # Helper functions
│       └── helpers.js
├── .env                       # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## ✨ Features

- **MVC Architecture** - Clean separation of concerns
- **Error Handling** - Centralized error handling with custom error classes
- **Validation** - Input validation using express-validator
- **Security** - Helmet.js for security headers
- **Logging** - Request logging with Morgan
- **CORS** - Configurable CORS support
- **Compression** - Response compression
- **Async/Await** - Modern async error handling

## 🚀 Installation

```bash
cd Backend
npm install
```

## 🏃 Running the Server

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

The server will run on `http://localhost:5000`

## 📡 API Endpoints

Base URL: `http://localhost:5000/api/v1`

### Student Profile
- `GET /student/profile` - Get student profile
- `PUT /student/profile` - Update student profile (with validation)
- `GET /student/stats` - Get dashboard statistics

### Courses
- `GET /courses` - Get all courses
- `GET /courses/:id` - Get course by ID
- `GET /courses/code/:code` - Get course by code

### Schedule
- `GET /schedule/weekly` - Get full weekly schedule
- `GET /schedule/weekly/:day` - Get schedule for specific day
- `GET /schedule/today` - Get today's schedule
- `GET /schedule/exams` - Get exam schedule

### Assignments
- `GET /assignments` - Get all assignments (supports ?status=Pending&courseCode=CS301)
- `GET /assignments/:id` - Get assignment by ID
- `GET /assignments/pending` - Get pending assignments
- `GET /assignments/upcoming` - Get upcoming deadlines sorted
- `PUT /assignments/:id/submit` - Submit an assignment

### Grades
- `GET /grades` - Get all grades
- `GET /grades/recent?limit=5` - Get recent grades
- `GET /grades/course/:course` - Get grades by course
- `GET /grades/gpa/current` - Get current semester GPA
- `GET /grades/gpa/cumulative` - Get cumulative GPA
- `GET /grades/gpa/history` - Get GPA history
- `GET /grades/summary` - Get course grades summary

### Notifications
- `GET /notifications` - Get all notifications (supports ?type=assignment&read=false)
- `GET /notifications/unread` - Get unread notifications
- `GET /notifications/unread/count` - Get unread count
- `PUT /notifications/:id/read` - Mark notification as read
- `PUT /notifications/read/all` - Mark all as read

### Health Check
- `GET /health` - Server health check

## 📝 Response Format

All API responses follow this format:

**Success Response:**
```json
{
  "status": "success",
  "data": { ... },
  "results": 10  // For array responses
}
```

**Error Response:**
```json
{
  "status": "fail",
  "message": "Error message here"
}
```

## 🔧 Environment Variables

Create a `.env` file in the Backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
API_VERSION=v1

# CORS Configuration
CORS_ORIGIN=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🔌 Connecting Frontend

### Using Fetch API:
```javascript
const API_BASE_URL = 'http://localhost:5000/api/v1';

const response = await fetch(`${API_BASE_URL}/courses`);
const data = await response.json();
console.log(data.data); // Access the courses array
```

### Using React Query (Recommended):
```javascript
import { useQuery } from '@tanstack/react-query';

const fetchCourses = async () => {
  const res = await fetch('http://localhost:5000/api/v1/courses');
  const data = await res.json();
  return data.data;
};

function CoursesComponent() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses
  });
  
  if (isLoading) return <div>Loading...</div>;
  return <div>{/* Render courses */}</div>;
}
```

### Create API Service (Best Practice):
```javascript
// src/services/api.js
const API_BASE_URL = 'http://localhost:5000/api/v1';

class ApiService {
  async request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data.data;
  }
  
  getCourses() {
    return this.request('/courses');
  }
  
  getStudentProfile() {
    return this.request('/student/profile');
  }
  
  submitAssignment(id) {
    return this.request(`/assignments/${id}/submit`, {
      method: 'PUT'
    });
  }
}

export default new ApiService();
```

## 🛡️ Security Features

- **Helmet.js** - Sets security HTTP headers
- **CORS** - Configurable cross-origin resource sharing
- **Input Validation** - Request validation using express-validator
- **Error Handling** - Prevents sensitive information leakage

## 🧪 Testing

```bash
npm test
```

## 📦 Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **ES6 Modules** - Modern JavaScript
- **express-validator** - Input validation
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **Compression** - Response compression
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 🔄 Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] JWT authentication
- [ ] Rate limiting
- [ ] File upload support
- [ ] WebSocket for real-time notifications
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Docker containerization

## 📄 License

MIT
