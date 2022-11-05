import { Schema, Document as MongoDocument, model } from 'mongoose'

const schemaName = 'SocialMedia'

interface ISocialMedia extends MongoDocument {
    name: string
    icon: string
    url: string
}

const SocialMediaSchema = new Schema<ISocialMedia>()
const SocialMedia = model<ISocialMedia>(schemaName, SocialMediaSchema)

export { schemaName, ISocialMedia, SocialMediaSchema, SocialMedia }
