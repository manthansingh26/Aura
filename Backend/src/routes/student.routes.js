import express from 'express';
import { body } from 'express-validator';
import * as studentController from '../controllers/student.controller.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

// Validation rules
const updateProfileValidation = [
  body('name').optional().isString().trim().isLength({ min: 2, max: 100 }),
  body('email').optional().isEmail().normalizeEmail(),
  body('major').optional().isString().trim(),
  body('year').optional().isString().trim(),
  validate
];

// Routes
router.get('/profile', studentController.getProfile);
router.put('/profile', updateProfileValidation, studentController.updateProfile);
router.get('/stats', studentController.getStats);

export default router;
