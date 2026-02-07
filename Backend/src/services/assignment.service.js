import { assignments } from '../data/mockData.js';

export const getAllAssignments = async (filters = {}) => {
  let filtered = [...assignments];
  
  if (filters.status) {
    filtered = filtered.filter(a => a.status.toLowerCase() === filters.status.toLowerCase());
  }
  
  if (filters.courseCode) {
    filtered = filtered.filter(a => a.courseCode === filters.courseCode);
  }
  
  return filtered;
};

export const getAssignmentById = async (id) => {
  return assignments.find(a => a.id === id);
};

export const getPendingAssignments = async () => {
  return assignments.filter(a => a.status === 'Pending');
};

export const getUpcomingDeadlines = async () => {
  return assignments
    .filter(a => a.status === 'Pending')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

export const submitAssignment = async (id) => {
  const assignment = assignments.find(a => a.id === id);
  if (assignment) {
    assignment.status = 'Submitted';
  }
  return assignment;
};
