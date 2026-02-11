import { asyncHandler } from '../middleware/errorHandler.js';
import { AppError } from '../middleware/errorHandler.js';
import * as courseService from '../services/course.service.js';

export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await courseService.getAllCourses();
  
  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: courses
  });
});

export const getCourseById = asyncHandler(async (req, res) => {
  const course = await courseService.getCourseById(req.params.id);
  
  if (!course) {
    throw new AppError('Course not found', 404);
  }
  
  res.status(200).json({
    status: 'success',
    data: course
  });
});

export const getCourseByCode = asyncHandler(async (req, res) => {
  const course = await courseService.getCourseByCode(req.params.code);
  
  if (!course) {
    throw new AppError('Course not found', 404);
  }
  
  res.status(200).json({
    status: 'success',
    data: course
  });
});
