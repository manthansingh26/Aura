import { studentProfile } from '../data/mockData.js';

export const getStudentProfile = async () => {
  return studentProfile;
};

export const updateStudentProfile = async (updates) => {
  Object.assign(studentProfile, updates);
  return studentProfile;
};

export const getStudentStats = async () => {
  return {
    currentGPA: studentProfile.currentGPA,
    attendance: studentProfile.attendance,
    pendingAssignments: studentProfile.pendingAssignments,
    upcomingExams: studentProfile.upcomingExams
  };
};
