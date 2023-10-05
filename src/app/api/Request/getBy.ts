import db from '../../../lib/db'

export default async (req: { query: { ethAddress: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string }): void; new(): any } } }) => {
  try {
    const { ethAddress } = req.query
    const collection = db.collection('requests')

    // Query by '_id' (ETH address) as a plain string
    const record = await collection.findOne({ to: ethAddress })

    if (!record) {
      res.status(200).json({ message: 'Request not found' })
    } else {
      res.status(200).json(record)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error retrieving record' })
  }
}