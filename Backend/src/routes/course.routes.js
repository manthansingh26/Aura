import express from 'express';
import * as courseController from '../controllers/course.controller.js';

const router = express.Router();

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.get('/code/:code', courseController.getCourseByCode);

export default router;
