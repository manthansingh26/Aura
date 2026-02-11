import { asyncHandler } from '../middleware/errorHandler.js';
import * as gradeService from '../services/grade.service.js';

export const getAllGrades = asyncHandler(async (req, res) => {
  const grades = await gradeService.getAllGrades();
  
  res.status(200).json({
    status: 'success',
    results: grades.length,
    data: grades
  });
});

export const getRecentGrades = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const grades = await gradeService.getRecentGrades(limit);
  
  res.status(200).json({
    status: 'success',
    results: grades.length,
    data: grades
  });
});

export const getGradesByCourse = asyncHandler(async (req, res) => {
  const grades = await gradeService.getGradesByCourse(req.params.course);
  
  res.status(200).json({
    status: 'success',
    results: grades.length,
    data: grades
  });
});

export const getCurrentGPA = asyncHandler(async (req, res) => {
  const gpa = await gradeService.getCurrentGPA();
  
  res.status(200).json({
    status: 'success',
    data: gpa
  });
});

export const getCumulativeGPA = asyncHandler(async (req, res) => {
  const gpa = await gradeService.getCumulativeGPA();
  
  res.status(200).json({
    status: 'success',
    data: gpa
  });
});

export const getGPAHistory = asyncHandler(async (req, res) => {
  const history = await gradeService.getGPAHistory();
  
  res.status(200).json({
    status: 'success',
    results: history.length,
    data: history
  });
});

export const getGradesSummary = asyncHandler(async (req, res) => {
  const summary = await gradeService.getGradesSummary();
  
  res.status(200).json({
    status: 'success',
    results: summary.length,
    data: summary
  });
});
