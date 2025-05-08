import { Router } from 'express';
import { ActivityUseCase } from '../../Application/usecases/activityusecase';
import { authMiddleware } from '../../middleware/auth';
import Activity from '../../domain/models/activity';


const router = Router();


router.post('/add-activity', async (req, res) => {
  try {
    const { title, description, location, dateTime } = req.body;
    const newActivity = new Activity({ title, description, location, dateTime });
    await newActivity.save();
    res.status(201).json({ message: 'Activity added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add activity' });
  }
});

router.get('/', async (req, res) => {
  const activities = await ActivityUseCase.list();
  res.json(activities);
});
//@ts-ignore
router.post('/book', authMiddleware, async (req, res) => {
  const { activityId } = req.body;
  const userId = (req as any).user.userId;

  const result = await ActivityUseCase.book(userId, activityId);
  res.json(result);
});
//@ts-ignore
router.get('/my-bookings', authMiddleware, async (req, res) => {
  const userId = (req as any).user.userId;
  const bookings = await ActivityUseCase.getBookings(userId);
  res.json(bookings);
});

export default router;
