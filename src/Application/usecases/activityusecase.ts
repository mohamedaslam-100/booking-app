import { ActivityService } from '../../Application/services/acxtivityservice';

export class ActivityUseCase {
  static list = ActivityService.listActivities;
  static book = ActivityService.bookActivity;
  static getBookings = ActivityService.getUserBookings;
}
