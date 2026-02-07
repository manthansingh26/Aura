import { courses } from '../data/mockData.js';

export const getAllCourses = async () => {
  return courses;
};

export const getCourseById = async (id) => {
  return courses.find(c => c.id === id);
};

export const getCourseByCode = async (code) => {
  return courses.find(c => c.code === code);
};
