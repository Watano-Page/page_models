import { Schema, Document as MongoDocument, model } from 'mongoose'

const schemaName = 'Project'

interface IProject extends MongoDocument {
    name: string
    date: string
    shortDescription: string
    longDescription: string
    mainImage: string
    titleImage: string
    collageImage?: [string]
    historyProyect: string
    control: string
    urlDownload: string
}

const ProjectSchema = new Schema<IProject>()
const Project = model<IProject>(schemaName, ProjectSchema)

export { schemaName, IProject, ProjectSchema, Project }
