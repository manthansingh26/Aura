import express from 'express';
import * as scheduleController from '../controllers/schedule.controller.js';

const router = express.Router();

router.get('/weekly', scheduleController.getWeeklySchedule);
router.get('/weekly/:day', scheduleController.getScheduleByDay);
router.get('/today', scheduleController.getTodaySchedule);
router.get('/exams', scheduleController.getExamSchedule);

export default router;
