import { weeklySchedule, examSchedule } from '../data/mockData.js';

export const getWeeklySchedule = async () => {
  return weeklySchedule;
};

export const getScheduleByDay = async (day) => {
  return weeklySchedule.filter(
    s => s.day.toLowerCase() === day.toLowerCase()
  );
};

export const getTodaySchedule = async () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  return weeklySchedule.filter(s => s.day === today);
};

export const getExamSchedule = async () => {
  return examSchedule;
};
