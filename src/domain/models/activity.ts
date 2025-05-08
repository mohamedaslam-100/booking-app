import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  dateTime: Date,
});

export default mongoose.model('Activity', activitySchema);
