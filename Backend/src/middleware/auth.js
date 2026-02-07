import jwt from 'jsonwebtoken';
import { AppError } from './errorHandler.js';
import { findUserById } from '../data/users.js';

export const authenticate = (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('No token provided. Please login.', 401);
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user still exists
    const user = findUserById(decoded.userId);
    if (!user) {
      throw new AppError('User no longer exists.', 401);
    }

    // Attach user to request
    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      studentId: user.studentId,
    };

    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      next(new AppError('Invalid token. Please login again.', 401));
    } else if (error.name === 'TokenExpiredError') {
      next(new AppError('Token expired. Please login again.', 401));
    } else {
      next(error);
    }
  }
};

// Optional authentication (doesn't fail if no token)
export const optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = findUserById(decoded.userId);
      
      if (user) {
        req.user = {
          id: user.id,
          email: user.email,
          name: user.name,
          studentId: user.studentId,
        };
      }
    }
    
    next();
  } catch (error) {
    // Continue without authentication
    next();
  }
};
