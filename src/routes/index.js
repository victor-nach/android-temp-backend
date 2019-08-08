import express from 'express';
import Controllers from '../controllers';

const router = express.Router();

// get users
router.get('/users', Controllers.getAllUsers);

// create user info
router.post('/users', Controllers.insertUser);

export default router;
