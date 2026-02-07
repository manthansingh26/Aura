import express from 'express';
import studentRoutes from './student.routes.js';
import courseRoutes from './course.routes.js';
import scheduleRoutes from './schedule.routes.js';
import assignmentRoutes from './assignment.routes.js';
import gradeRoutes from './grade.routes.js';
import notificationRoutes from './notification.routes.js';

const router = express.Router();

// API documentation endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Student Dashboard API',
    version: '1.0.0',
    endpoints: {
      student: '/student',
      courses: '/courses',
      schedule: '/schedule',
      assignments: '/assignments',
      grades: '/grades',
      notifications: '/notifications'
    },
    documentation: '/api/v1/docs'
  });
});

// Mount routes
router.use('/student', studentRoutes);
router.use('/courses', courseRoutes);
router.use('/schedule', scheduleRoutes);
router.use('/assignments', assignmentRoutes);
router.use('/grades', gradeRoutes);
router.use('/notifications', notificationRoutes);

export default router;
