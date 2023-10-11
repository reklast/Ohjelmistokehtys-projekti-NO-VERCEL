import { Schema, model, models } from 'mongoose';

const heippalppuScema = new Schema({
  name: String,
  post: String
  ,
});

const Heippa = models.Heippa || model('Heippa', heippalppuScema);

export default Heippa;


