// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

// API Response Types
export interface ApiResponse<T> {
  status: 'success' | 'fail' | 'error';
  data?: T;
  results?: number;
  message?: string;
}

// API Error Class
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic API Request Handler
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data: ApiResponse<T> = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || 'API request failed',
        response.status,
        data
      );
    }

    return data.data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : 'Network error occurred'
    );
  }
}

// API Endpoints
export const api = {
  // Student
  student: {
    getProfile: () => apiRequest('/student/profile'),
    updateProfile: (data: any) =>
      apiRequest('/student/profile', {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    getStats: () => apiRequest('/student/stats'),
  },

  // Courses
  courses: {
    getAll: () => apiRequest('/courses'),
    getById: (id: string) => apiRequest(`/courses/${id}`),
    getByCode: (code: string) => apiRequest(`/courses/code/${code}`),
  },

  // Schedule
  schedule: {
    getWeekly: () => apiRequest('/schedule/weekly'),
    getByDay: (day: string) => apiRequest(`/schedule/weekly/${day}`),
    getToday: () => apiRequest('/schedule/today'),
    getExams: () => apiRequest('/schedule/exams'),
  },

  // Assignments
  assignments: {
    getAll: (params?: { status?: string; courseCode?: string }) => {
      const query = params ? `?${new URLSearchParams(params).toString()}` : '';
      return apiRequest(`/assignments${query}`);
    },
    getById: (id: string) => apiRequest(`/assignments/${id}`),
    getPending: () => apiRequest('/assignments/pending'),
    getUpcoming: () => apiRequest('/assignments/upcoming'),
    submit: (id: string) =>
      apiRequest(`/assignments/${id}/submit`, { method: 'PUT' }),
  },

  // Grades
  grades: {
    getAll: () => apiRequest('/grades'),
    getRecent: (limit = 5) => apiRequest(`/grades/recent?limit=${limit}`),
    getByCourse: (course: string) => apiRequest(`/grades/course/${course}`),
    getCurrentGPA: () => apiRequest('/grades/gpa/current'),
    getCumulativeGPA: () => apiRequest('/grades/gpa/cumulative'),
    getHistory: () => apiRequest('/grades/gpa/history'),
    getSummary: () => apiRequest('/grades/summary'),
  },

  // Notifications
  notifications: {
    getAll: (params?: { type?: string; read?: string }) => {
      const query = params ? `?${new URLSearchParams(params).toString()}` : '';
      return apiRequest(`/notifications${query}`);
    },
    getUnread: () => apiRequest('/notifications/unread'),
    getUnreadCount: () => apiRequest('/notifications/unread/count'),
    markAsRead: (id: string) =>
      apiRequest(`/notifications/${id}/read`, { method: 'PUT' }),
    markAllAsRead: () =>
      apiRequest('/notifications/read/all', { method: 'PUT' }),
  },
};
