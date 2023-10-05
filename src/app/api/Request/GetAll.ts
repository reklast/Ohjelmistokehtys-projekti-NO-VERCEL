import db from '../../../lib/db'

export default async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string }): void; new(): any } } }) => {
  try {
    const collection = db.collection('requests')

    const records = await collection.find({}).toArray()

    res.status(200).json(records)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error retrieving records' })
  }
}