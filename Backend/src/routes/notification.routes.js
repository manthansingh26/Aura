import express from 'express';
import * as notificationController from '../controllers/notification.controller.js';

const router = express.Router();

router.get('/', notificationController.getAllNotifications);
router.get('/unread', notificationController.getUnreadNotifications);
router.get('/unread/count', notificationController.getUnreadCount);
router.put('/:id/read', notificationController.markAsRead);
router.put('/read/all', notificationController.markAllAsRead);

export default router;
