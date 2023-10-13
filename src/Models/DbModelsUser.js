import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  surname: String,
  password: String,
  image: String,
  activityStatus: String
  }, {collection: "User"});
  
  const User = models.User || model('User', UserSchema);
  
  export default User;