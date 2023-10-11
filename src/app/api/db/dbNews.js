
import connectMongo from '@/utils/connectMongo';
import Heippa from '@/Models/DbModels';
console.log('Start CONNECTING TO MONGO');

  
 
export default async function addHeippa(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const heippa = await Heippa.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ heippa });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}