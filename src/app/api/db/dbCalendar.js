
import connectMongo from '../../../utils/connectMongo';

import DbCalendar from '../../../Models/DbModelsCalender';
console.log('Start CONNECTING TO MONGO');

  
 
export default async function addCalendar(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const dbcalendar = await DbCalendar.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ dbcalendar });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
