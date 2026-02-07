import { notifications } from '../data/mockData.js';

export const getAllNotifications = async (filters = {}) => {
  let filtered = [...notifications];
  
  if (filters.type) {
    filtered = filtered.filter(n => n.type === filters.type);
  }
  
  if (filters.read !== undefined) {
    const isRead = filters.read === 'true';
    filtered = filtered.filter(n => n.read === isRead);
  }
  
  return filtered;
};

export const getUnreadNotifications = async () => {
  return notifications.filter(n => !n.read);
};

export const getUnreadCount = async () => {
  return notifications.filter(n => !n.read).length;
};

export const markAsRead = async (id) => {
  const notification = notifications.find(n => n.id === id);
  if (notification) {
    notification.read = true;
  }
  return notification;
};

export const markAllAsRead = async () => {
  notifications.forEach(n => n.read = true);
  return notifications;
};
