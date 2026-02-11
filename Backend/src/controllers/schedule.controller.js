import { asyncHandler } from '../middleware/errorHandler.js';
import * as scheduleService from '../services/schedule.service.js';

export const getWeeklySchedule = asyncHandler(async (req, res) => {
  const schedule = await scheduleService.getWeeklySchedule();
  
  res.status(200).json({
    status: 'success',
    results: schedule.length,
    data: schedule
  });
});

export const getScheduleByDay = asyncHandler(async (req, res) => {
  const schedule = await scheduleService.getScheduleByDay(req.params.day);
  
  res.status(200).json({
    status: 'success',
    results: schedule.length,
    data: schedule
  });
});

export const getTodaySchedule = asyncHandler(async (req, res) => {
  const schedule = await scheduleService.getTodaySchedule();
  
  res.status(200).json({
    status: 'success',
    results: schedule.length,
    data: schedule
  });
});

export const getExamSchedule = asyncHandler(async (req, res) => {
  const exams = await scheduleService.getExamSchedule();
  
  res.status(200).json({
    status: 'success',
    results: exams.length,
    data: exams
  });
});
