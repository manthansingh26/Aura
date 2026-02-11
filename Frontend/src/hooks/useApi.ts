import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/config/api';

// Student Hooks
export const useStudentProfile = () => {
  return useQuery({
    queryKey: ['student', 'profile'],
    queryFn: api.student.getProfile,
  });
};

export const useStudentStats = () => {
  return useQuery({
    queryKey: ['student', 'stats'],
    queryFn: api.student.getStats,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.student.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['student', 'profile'] });
    },
  });
};

// Course Hooks
export const useCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: api.courses.getAll,
  });
};

export const useCourse = (id: string) => {
  return useQuery({
    queryKey: ['courses', id],
    queryFn: () => api.courses.getById(id),
    enabled: !!id,
  });
};

// Schedule Hooks
export const useWeeklySchedule = () => {
  return useQuery({
    queryKey: ['schedule', 'weekly'],
    queryFn: api.schedule.getWeekly,
  });
};

export const useTodaySchedule = () => {
  return useQuery({
    queryKey: ['schedule', 'today'],
    queryFn: api.schedule.getToday,
  });
};

export const useScheduleByDay = (day: string) => {
  return useQuery({
    queryKey: ['schedule', 'day', day],
    queryFn: () => api.schedule.getByDay(day),
    enabled: !!day,
  });
};

export const useExamSchedule = () => {
  return useQuery({
    queryKey: ['schedule', 'exams'],
    queryFn: api.schedule.getExams,
  });
};

// Assignment Hooks
export const useAssignments = (params?: { status?: string; courseCode?: string }) => {
  return useQuery({
    queryKey: ['assignments', params],
    queryFn: () => api.assignments.getAll(params),
  });
};

export const usePendingAssignments = () => {
  return useQuery({
    queryKey: ['assignments', 'pending'],
    queryFn: api.assignments.getPending,
  });
};

export const useUpcomingDeadlines = () => {
  return useQuery({
    queryKey: ['assignments', 'upcoming'],
    queryFn: api.assignments.getUpcoming,
  });
};

export const useSubmitAssignment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.assignments.submit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assignments'] });
    },
  });
};

// Grade Hooks
export const useGrades = () => {
  return useQuery({
    queryKey: ['grades'],
    queryFn: api.grades.getAll,
  });
};

export const useRecentGrades = (limit = 5) => {
  return useQuery({
    queryKey: ['grades', 'recent', limit],
    queryFn: () => api.grades.getRecent(limit),
  });
};

export const useCurrentGPA = () => {
  return useQuery({
    queryKey: ['grades', 'gpa', 'current'],
    queryFn: api.grades.getCurrentGPA,
  });
};

export const useCumulativeGPA = () => {
  return useQuery({
    queryKey: ['grades', 'gpa', 'cumulative'],
    queryFn: api.grades.getCumulativeGPA,
  });
};

export const useGPAHistory = () => {
  return useQuery({
    queryKey: ['grades', 'gpa', 'history'],
    queryFn: api.grades.getHistory,
  });
};

export const useGradesSummary = () => {
  return useQuery({
    queryKey: ['grades', 'summary'],
    queryFn: api.grades.getSummary,
  });
};

// Notification Hooks
export const useNotifications = (params?: { type?: string; read?: string }) => {
  return useQuery({
    queryKey: ['notifications', params],
    queryFn: () => api.notifications.getAll(params),
  });
};

export const useUnreadNotifications = () => {
  return useQuery({
    queryKey: ['notifications', 'unread'],
    queryFn: api.notifications.getUnread,
  });
};

export const useUnreadCount = () => {
  return useQuery({
    queryKey: ['notifications', 'unread', 'count'],
    queryFn: api.notifications.getUnreadCount,
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.notifications.markAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
};

export const useMarkAllAsRead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: api.notifications.markAllAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
};
