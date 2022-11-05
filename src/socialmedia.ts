import { Schema, Document as MongoDocument, model } from 'mongoose'

/**
 * @protected
 */
const schemaName = 'SocialMedia'

/**
 * Social Media model parameters
 * @see [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)
 */
interface ISocialMedia extends MongoDocument {
    /**
     * The name of Social Media
     * @example
     *
     * // "Twitter", "Facebook", "Instagram"
     *
     * @public
     */
    name: string
    /**
     * The url of icon to use on UI
     * @public
     */
    icon: string
    /**
     * The link to profile in Social Media
     * @public
     */
    url: string
}

/**
 * Schema of Mongoose
 */
const SocialMediaSchema = new Schema<ISocialMedia>()
/**
 * The Mongoose model of Social Media
 */
const SocialMedia = model<ISocialMedia>(schemaName, SocialMediaSchema)

export { schemaName, ISocialMedia, SocialMediaSchema, SocialMedia }
