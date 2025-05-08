import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  activityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
});

export default mongoose.model('Booking', bookingSchema);
