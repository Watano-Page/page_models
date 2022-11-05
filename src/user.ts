import { Schema, Document as MongoDocument, model } from 'mongoose'

/**
 * @protected
 */
const schemaName = 'User'

/**
 * User model parameters
 * @see [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)
 */
interface IUser extends MongoDocument {
    /**
     * The real and public User Name
     * @public
     */
    name: string
    /**
     * The job position of User
     * @public
     */
    position: string
    /**
     * The registration email
     * > NOTE: No expose this parametter to public
     * @public
     */
    mail: string
    /**
     * The registration password
     * > NOTE: No expose this parametter to public
     * @public
     */
    password: string
    /**
     * The biography of User
     * @public
     */
    description: string
    /**
     * The presentation video of User
     * @public
     */
    presentationVideo: string
}

/**
 * Schema of Mongoose
 */
const UserSchema = new Schema<IUser>()
/**
 * The Mongoose model of User
 */
const User = model<IUser>(schemaName, UserSchema)

export { schemaName, IUser, UserSchema, User }
