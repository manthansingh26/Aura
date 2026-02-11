import express from 'express';
import * as gradeController from '../controllers/grade.controller.js';

const router = express.Router();

router.get('/', gradeController.getAllGrades);
router.get('/recent', gradeController.getRecentGrades);
router.get('/course/:course', gradeController.getGradesByCourse);
router.get('/gpa/current', gradeController.getCurrentGPA);
router.get('/gpa/cumulative', gradeController.getCumulativeGPA);
router.get('/gpa/history', gradeController.getGPAHistory);
router.get('/summary', gradeController.getGradesSummary);

export default router;
