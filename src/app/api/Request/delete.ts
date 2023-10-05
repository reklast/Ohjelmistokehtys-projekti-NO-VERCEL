import db from '../../../lib/db'

export default async (req: { query: { ethAddress: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string }): void; new(): any }; end: { (): void; new(): any } } }) => {
  try {
    const { ethAddress } = req.query

    const collection = db.collection('requests')
    const result = await collection.deleteOne({ to: ethAddress })

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Record not found' })
    } else {
      res.status(204).end()
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error deleting record' })
  }
}