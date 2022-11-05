import { InferSchemaType, Schema } from 'mongoose'

const UserSchema = new Schema({})

type User = InferSchemaType<typeof UserSchema>

export {
    User,
    UserSchema
}
