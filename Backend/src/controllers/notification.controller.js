import { asyncHandler } from '../middleware/errorHandler.js';
import { AppError } from '../middleware/errorHandler.js';
import * as notificationService from '../services/notification.service.js';

export const getAllNotifications = asyncHandler(async (req, res) => {
  const { type, read } = req.query;
  const notifications = await notificationService.getAllNotifications({ type, read });
  
  res.status(200).json({
    status: 'success',
    results: notifications.length,
    data: notifications
  });
});

export const getUnreadNotifications = asyncHandler(async (req, res) => {
  const notifications = await notificationService.getUnreadNotifications();
  
  res.status(200).json({
    status: 'success',
    results: notifications.length,
    data: notifications
  });
});

export const getUnreadCount = asyncHandler(async (req, res) => {
  const count = await notificationService.getUnreadCount();
  
  res.status(200).json({
    status: 'success',
    data: { count }
  });
});

export const markAsRead = asyncHandler(async (req, res) => {
  const notification = await notificationService.markAsRead(req.params.id);
  
  if (!notification) {
    throw new AppError('Notification not found', 404);
  }
  
  res.status(200).json({
    status: 'success',
    message: 'Notification marked as read',
    data: notification
  });
});

export const markAllAsRead = asyncHandler(async (req, res) => {
  await notificationService.markAllAsRead();
  
  res.status(200).json({
    status: 'success',
    message: 'All notifications marked as read'
  });
});
