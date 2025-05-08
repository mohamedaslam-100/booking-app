import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/mango';
import authRoutes from '../Adapter/Routes/auth';
import activityRoutes from '../Adapter/Routes/activity';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
