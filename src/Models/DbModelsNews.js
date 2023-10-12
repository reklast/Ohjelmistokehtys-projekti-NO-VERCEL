import { Schema, model, models } from 'mongoose';

const newsSchema = new Schema({
  title: String,
  date: String,
  content: String,
  
}, {collection: "News"});

const News = models.News || model('News', newsSchema, 'News');

export default News;


