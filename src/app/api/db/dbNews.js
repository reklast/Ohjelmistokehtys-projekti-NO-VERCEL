
import connectMongo from '@/utils/connectMongo';
import News from '@/Models/DbModelsNews';
console.log('Start CONNECTING TO MONGO');

  
 
export async function addNews(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const createNews = await News.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ createNews });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
