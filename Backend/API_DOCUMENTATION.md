# API Documentation

Complete API reference for the Student Dashboard Backend.

## Base URL
```
http://localhost:5000/api/v1
```

## Response Format

All responses follow a consistent format:

### Success Response
```json
{
  "status": "success",
  "data": { ... },
  "results": 10  // Only for array responses
}
```

### Error Response
```json
{
  "status": "fail",
  "message": "Error description"
}
```

---

## 👤 Student Endpoints

### Get Student Profile
```http
GET /student/profile
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "name": "Alex Rivera",
    "email": "alex.rivera@university.edu",
    "studentId": "STU-2024-0847",
    "major": "Computer Science",
    "year": "Junior",
    "currentGPA": 3.8,
    "attendance": 95
  }
}
```

### Update Student Profile
```http
PUT /student/profile
```

**Request Body:**
```json
{
  "name": "Alex Rivera",
  "email": "alex.rivera@university.edu",
  "major": "Computer Science",
  "year": "Senior"
}
```

**Validation Rules:**
- `name`: Optional, 2-100 characters
- `email`: Optional, valid email format
- `major`: Optional, string
- `year`: Optional, string

### Get Dashboard Stats
```http
GET /student/stats
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "currentGPA": 3.8,
    "attendance": 95,
    "pendingAssignments": 3,
    "upcomingExams": 2
  }
}
```

---

## 📚 Course Endpoints

### Get All Courses
```http
GET /courses
```

**Response:**
```json
{
  "status": "success",
  "results": 6,
  "data": [
    {
      "id": "1",
      "name": "Data Structures & Algorithms",
      "code": "CS301",
      "instructor": "Dr. Sarah Chen",
      "progress": 72,
      "grade": "A-",
      "credits": 4,
      "color": "hsl(190, 80%, 50%)",
      "syllabus": ["Arrays & Linked Lists", "Trees & Graphs"],
      "materials": ["Textbook: CLRS 4th Edition"]
    }
  ]
}
```

### Get Course by ID
```http
GET /courses/:id
```

**Parameters:**
- `id` (path): Course ID

**Example:** `GET /courses/1`

### Get Course by Code
```http
GET /courses/code/:code
```

**Parameters:**
- `code` (path): Course code (e.g., CS301)

**Example:** `GET /courses/code/CS301`

---

## 📅 Schedule Endpoints

### Get Weekly Schedule
```http
GET /schedule/weekly
```

**Response:**
```json
{
  "status": "success",
  "results": 14,
  "data": [
    {
      "id": "1",
      "time": "9:00 AM",
      "endTime": "10:30 AM",
      "subject": "Data Structures & Algorithms",
      "room": "Room 301",
      "courseCode": "CS301",
      "day": "Monday"
    }
  ]
}
```

### Get Schedule by Day
```http
GET /schedule/weekly/:day
```

**Parameters:**
- `day` (path): Day of week (Monday, Tuesday, etc.)

**Example:** `GET /schedule/weekly/Monday`

### Get Today's Schedule
```http
GET /schedule/today
```

Returns schedule for the current day based on server time.

### Get Exam Schedule
```http
GET /schedule/exams
```

**Response:**
```json
{
  "status": "success",
  "results": 5,
  "data": [
    {
      "id": "1",
      "subject": "Data Structures & Algorithms",
      "date": "2026-03-10",
      "time": "9:00 AM",
      "room": "Hall A"
    }
  ]
}
```

---

## 📝 Assignment Endpoints

### Get All Assignments
```http
GET /assignments
```

**Query Parameters:**
- `status` (optional): Filter by status (Pending, Submitted, Graded)
- `courseCode` (optional): Filter by course code

**Examples:**
- `GET /assignments?status=Pending`
- `GET /assignments?courseCode=CS301`
- `GET /assignments?status=Pending&courseCode=CS301`

**Response:**
```json
{
  "status": "success",
  "results": 8,
  "data": [
    {
      "id": "1",
      "title": "Binary Tree Implementation",
      "course": "Data Structures & Algorithms",
      "courseCode": "CS301",
      "dueDate": "2026-02-12",
      "status": "Pending",
      "description": "Implement a balanced BST..."
    }
  ]
}
```

### Get Assignment by ID
```http
GET /assignments/:id
```

**Parameters:**
- `id` (path): Assignment ID

### Get Pending Assignments
```http
GET /assignments/pending
```

Returns all assignments with status "Pending".

### Get Upcoming Deadlines
```http
GET /assignments/upcoming
```

Returns pending assignments sorted by due date (earliest first).

### Submit Assignment
```http
PUT /assignments/:id/submit
```

**Parameters:**
- `id` (path): Assignment ID

**Response:**
```json
{
  "status": "success",
  "message": "Assignment submitted successfully",
  "data": {
    "id": "1",
    "status": "Submitted"
  }
}
```

---

## 📊 Grade Endpoints

### Get All Grades
```http
GET /grades
```

### Get Recent Grades
```http
GET /grades/recent
```

**Query Parameters:**
- `limit` (optional): Number of grades to return (default: 5)

**Example:** `GET /grades/recent?limit=10`

### Get Grades by Course
```http
GET /grades/course/:course
```

**Parameters:**
- `course` (path): Course name (partial match supported)

**Example:** `GET /grades/course/Data%20Structures`

### Get Current Semester GPA
```http
GET /grades/gpa/current
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "semester": "Spring 2026",
    "gpa": 3.8,
    "credits": 18
  }
}
```

### Get Cumulative GPA
```http
GET /grades/gpa/cumulative
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "cumulativeGPA": 3.73,
    "totalCredits": 64
  }
}
```

### Get GPA History
```http
GET /grades/gpa/history
```

**Response:**
```json
{
  "status": "success",
  "results": 4,
  "data": [
    {
      "semester": "Fall 2024",
      "gpa": 3.5,
      "credits": 15
    }
  ]
}
```

### Get Grades Summary
```http
GET /grades/summary
```

Returns grade information for all enrolled courses.

---

## 🔔 Notification Endpoints

### Get All Notifications
```http
GET /notifications
```

**Query Parameters:**
- `type` (optional): Filter by type (assignment, grade, announcement)
- `read` (optional): Filter by read status (true/false)

**Examples:**
- `GET /notifications?type=assignment`
- `GET /notifications?read=false`
- `GET /notifications?type=grade&read=false`

**Response:**
```json
{
  "status": "success",
  "results": 6,
  "data": [
    {
      "id": "1",
      "type": "assignment",
      "title": "New Assignment",
      "message": "Binary Tree Implementation due Feb 12",
      "time": "2 hours ago",
      "read": false
    }
  ]
}
```

### Get Unread Notifications
```http
GET /notifications/unread
```

Returns all notifications where `read: false`.

### Get Unread Count
```http
GET /notifications/unread/count
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "count": 2
  }
}
```

### Mark Notification as Read
```http
PUT /notifications/:id/read
```

**Parameters:**
- `id` (path): Notification ID

**Response:**
```json
{
  "status": "success",
  "message": "Notification marked as read",
  "data": {
    "id": "1",
    "read": true
  }
}
```

### Mark All as Read
```http
PUT /notifications/read/all
```

**Response:**
```json
{
  "status": "success",
  "message": "All notifications marked as read"
}
```

---

## 🏥 Health Check

### Server Health
```http
GET /health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2026-02-08T10:30:00.000Z",
  "uptime": 3600.5,
  "environment": "development"
}
```

---

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Rate Limiting

Currently not implemented. Future implementation will limit:
- 100 requests per 15 minutes per IP

---

## CORS

CORS is enabled for:
- Development: `http://localhost:5173`
- Configure in `.env` file using `CORS_ORIGIN`
