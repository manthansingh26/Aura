import { recentGrades, semesterGPAs, courses } from '../data/mockData.js';

export const getAllGrades = async () => {
  return recentGrades;
};

export const getRecentGrades = async (limit = 5) => {
  return recentGrades.slice(0, limit);
};

export const getGradesByCourse = async (courseName) => {
  return recentGrades.filter(
    g => g.course.toLowerCase().includes(courseName.toLowerCase())
  );
};

export const getCurrentGPA = async () => {
  return semesterGPAs[semesterGPAs.length - 1];
};

export const getCumulativeGPA = async () => {
  const totalPoints = semesterGPAs.reduce((sum, sem) => sum + (sem.gpa * sem.credits), 0);
  const totalCredits = semesterGPAs.reduce((sum, sem) => sum + sem.credits, 0);
  const cumulativeGPA = (totalPoints / totalCredits).toFixed(2);
  
  return {
    cumulativeGPA: parseFloat(cumulativeGPA),
    totalCredits
  };
};

export const getGPAHistory = async () => {
  return semesterGPAs;
};

export const getGradesSummary = async () => {
  return courses.map(course => ({
    courseCode: course.code,
    courseName: course.name,
    grade: course.grade,
    progress: course.progress,
    credits: course.credits
  }));
};
