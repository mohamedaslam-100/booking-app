import Activity from '../../domain/models/activity';
import Booking from '../../domain/models/booking';

export class ActivityService {
  static async listActivities() {
    return await Activity.find();
  }

  static async bookActivity(userId: string, activityId: string) {
    const booking = new Booking({ userId, activityId });
    await booking.save();
    return { message: 'Activity booked successfully' };
  }

  static async getUserBookings(userId: string) {
    return await Booking.find({ userId }).populate('activityId');
  }
}
