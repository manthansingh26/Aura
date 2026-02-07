import { asyncHandler } from '../middleware/errorHandler.js';
import { AppError } from '../middleware/errorHandler.js';
import * as assignmentService from '../services/assignment.service.js';

export const getAllAssignments = asyncHandler(async (req, res) => {
  const { status, courseCode } = req.query;
  const assignments = await assignmentService.getAllAssignments({ status, courseCode });
  
  res.status(200).json({
    status: 'success',
    results: assignments.length,
    data: assignments
  });
});

export const getAssignmentById = asyncHandler(async (req, res) => {
  const assignment = await assignmentService.getAssignmentById(req.params.id);
  
  if (!assignment) {
    throw new AppError('Assignment not found', 404);
  }
  
  res.status(200).json({
    status: 'success',
    data: assignment
  });
});

export const getPendingAssignments = asyncHandler(async (req, res) => {
  const assignments = await assignmentService.getPendingAssignments();
  
  res.status(200).json({
    status: 'success',
    results: assignments.length,
    data: assignments
  });
});

export const getUpcomingDeadlines = asyncHandler(async (req, res) => {
  const assignments = await assignmentService.getUpcomingDeadlines();
  
  res.status(200).json({
    status: 'success',
    results: assignments.length,
    data: assignments
  });
});

export const submitAssignment = asyncHandler(async (req, res) => {
  const assignment = await assignmentService.submitAssignment(req.params.id);
  
  if (!assignment) {
    throw new AppError('Assignment not found', 404);
  }
  
  res.status(200).json({
    status: 'success',
    message: 'Assignment submitted successfully',
    data: assignment
  });
});
