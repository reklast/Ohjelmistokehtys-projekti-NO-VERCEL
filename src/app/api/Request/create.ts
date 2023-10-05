import db from '@/lib/db'
export default async (req: { body: { name: any; to: any; post: any; description: any; externalUrl: any; unlockTime: any; targetBalance: any; timestamp: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; data?: any }): void; new(): any } } }) => {
  try {
    const { name, to, post, description, externalUrl, unlockTime, targetBalance, timestamp } = req.body
    const collection = db.collection('requests')

    // Create a unique index on the 'to' field (ETH address)
    await collection.createIndex({ to: 1 }, { unique: true })

    const result = await collection.insertOne({
      to,
      name,
      post,
      timestamp,
    })
    if (result.insertedId) {
      const insertedDocument = {
        _id: result.insertedId, // Use the insertedId as the document's _id
        ...req.body, // Include the rest of the document data
      }
      res.status(201).json({ message: 'Record created successfully', data: insertedDocument })
    } else {
      res.status(500).json({ message: 'Error creating record' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error creating record' })
  }
}