import { asyncHandler } from '../middleware/errorHandler.js';
import * as studentService from '../services/student.service.js';

export const getProfile = asyncHandler(async (req, res) => {
  const profile = await studentService.getStudentProfile();
  
  res.status(200).json({
    status: 'success',
    data: profile
  });
});

export const updateProfile = asyncHandler(async (req, res) => {
  const updatedProfile = await studentService.updateStudentProfile(req.body);
  
  res.status(200).json({
    status: 'success',
    data: updatedProfile
  });
});

export const getStats = asyncHandler(async (req, res) => {
  const stats = await studentService.getStudentStats();
  
  res.status(200).json({
    status: 'success',
    data: stats
  });
});
