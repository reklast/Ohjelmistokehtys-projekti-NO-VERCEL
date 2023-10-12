import { Schema, model, models } from 'mongoose';

const calendarScema = new Schema({
    name: String,
    post: String,
    date: Date,
  });
  
  const DbCalendar = models.Calendar || model('DbCalendar', calendarScema);
  
  export default DbCalendar;