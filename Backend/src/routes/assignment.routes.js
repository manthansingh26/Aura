import express from 'express';
import * as assignmentController from '../controllers/assignment.controller.js';

const router = express.Router();

router.get('/', assignmentController.getAllAssignments);
router.get('/pending', assignmentController.getPendingAssignments);
router.get('/upcoming', assignmentController.getUpcomingDeadlines);
router.get('/:id', assignmentController.getAssignmentById);
router.put('/:id/submit', assignmentController.submitAssignment);

export default router;
