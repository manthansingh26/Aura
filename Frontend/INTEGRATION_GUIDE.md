# Frontend-Backend Integration Guide

## ✅ Integration Complete

The frontend is now fully connected to the backend API!

## 🔧 What Was Done

### 1. API Configuration (`src/config/api.ts`)
- Created centralized API configuration
- Base URL: `http://localhost:5000/api/v1`
- Type-safe API client with error handling
- All endpoints organized by resource

### 2. React Query Hooks (`src/hooks/useApi.ts`)
- Custom hooks for all API endpoints
- Automatic caching and refetching
- Loading and error states
- Mutations with cache invalidation

### 3. Environment Variables
- `.env` file created with API URL
- `.env.example` for reference

### 4. Updated Pages
- ✅ **Dashboard** - Fully integrated with API
- ✅ **Courses** - Fully integrated with API
- 🔄 **Schedule** - Ready for integration
- 🔄 **Assignments** - Ready for integration
- 🔄 **Grades** - Ready for integration
- 🔄 **Settings** - Ready for integration

## 📡 Available Hooks

### Student
```typescript
useStudentProfile()      // Get student profile
useStudentStats()        // Get dashboard stats
useUpdateProfile()       // Update profile (mutation)
```

### Courses
```typescript
useCourses()            // Get all courses
useCourse(id)           // Get single course
```

### Schedule
```typescript
useWeeklySchedule()     // Get full week schedule
useTodaySchedule()      // Get today's classes
useScheduleByDay(day)   // Get specific day
useExamSchedule()       // Get exam schedule
```

### Assignments
```typescript
useAssignments(params)      // Get all assignments (with filters)
usePendingAssignments()     // Get pending only
useUpcomingDeadlines()      // Get sorted by due date
useSubmitAssignment()       // Submit assignment (mutation)
```

### Grades
```typescript
useGrades()             // Get all grades
useRecentGrades(limit)  // Get recent grades
useCurrentGPA()         // Get current semester GPA
useCumulativeGPA()      // Get cumulative GPA
useGPAHistory()         // Get GPA history
useGradesSummary()      // Get grades summary
```

### Notifications
```typescript
useNotifications(params)    // Get all notifications (with filters)
useUnreadNotifications()    // Get unread only
useUnreadCount()           // Get unread count (auto-refresh)
useMarkAsRead()            // Mark as read (mutation)
useMarkAllAsRead()         // Mark all as read (mutation)
```

## 🎯 Usage Example

```typescript
import { useCourses } from '@/hooks/useApi';

function MyComponent() {
  const { data: courses, isLoading, error } = useCourses();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} />;

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  );
}
```

## 🔄 Mutation Example

```typescript
import { useSubmitAssignment } from '@/hooks/useApi';

function SubmitButton({ assignmentId }) {
  const { mutate, isPending } = useSubmitAssignment();

  const handleSubmit = () => {
    mutate(assignmentId, {
      onSuccess: () => {
        toast.success('Assignment submitted!');
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };

  return (
    <Button onClick={handleSubmit} disabled={isPending}>
      {isPending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}
```

## 🚀 Testing the Integration

1. **Start Backend**:
   ```bash
   cd Backend
   npm run dev
   ```
   Backend runs on: `http://localhost:5000`

2. **Start Frontend**:
   ```bash
   cd Frontend
   npm run dev
   ```
   Frontend runs on: `http://localhost:8080`

3. **Open Browser**:
   - Visit: `http://localhost:8080`
   - Dashboard should load data from API
   - Check browser console for API calls

## 🔍 Debugging

### Check API Calls
Open browser DevTools → Network tab → Filter by "Fetch/XHR"

### Check Backend Logs
Backend terminal shows all incoming requests

### Common Issues

**CORS Error:**
- Backend `.env` has `CORS_ORIGIN=http://localhost:5173`
- Update to match your frontend port if different

**Connection Refused:**
- Make sure backend is running on port 5000
- Check `Frontend/.env` has correct API URL

**Data Not Loading:**
- Check browser console for errors
- Verify backend is returning data: `http://localhost:5000/api/v1/courses`

## 📝 Next Steps

To integrate remaining pages, follow this pattern:

1. Import the hook from `@/hooks/useApi`
2. Use the hook in your component
3. Handle loading state with `<Loader2 />`
4. Handle error state
5. Render data when available

Example for Schedule page:
```typescript
import { useWeeklySchedule } from '@/hooks/useApi';

export default function Schedule() {
  const { data: schedule, isLoading } = useWeeklySchedule();
  
  if (isLoading) return <Loader />;
  
  return <div>{/* Render schedule */}</div>;
}
```

## 🎨 Features

- ✅ Type-safe API calls
- ✅ Automatic caching
- ✅ Loading states
- ✅ Error handling
- ✅ Optimistic updates
- ✅ Cache invalidation
- ✅ Auto-refetch on window focus
- ✅ Retry on failure

## 📚 Resources

- React Query Docs: https://tanstack.com/query/latest
- Backend API Docs: `Backend/API_DOCUMENTATION.md`
- Backend README: `Backend/README.md`
