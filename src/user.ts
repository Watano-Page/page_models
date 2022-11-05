import { Schema, Document as MongoDocument, model } from 'mongoose'

const schemaName = 'User'

interface IUser extends MongoDocument {
    name: string
    area: string
    mail: string
    description: string
    presentationVideo: string
}

const UserSchema = new Schema<IUser>()
const User = model<IUser>(schemaName, UserSchema)

export { schemaName, IUser, UserSchema, User }
