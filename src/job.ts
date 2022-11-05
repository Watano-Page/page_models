import { Schema, Document as MongoDocument, model } from 'mongoose'

const schemaName = 'Job'

interface IJob extends MongoDocument {
    name: string
    position: string
    description: string
    images: [string]
}

const JobSchema = new Schema<IJob>()
const Job = model<IJob>(schemaName, JobSchema)

export { schemaName, IJob, JobSchema, Job }
