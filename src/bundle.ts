import 'regenerator-runtime/runtime'
import * as user from './user'
import * as job from './user'
import * as podcast from './podcast'
import * as project from './project'
import * as socialMedia from './socialmedia'
import * as style from './style'
import { model, Schema, Types } from 'mongoose'

const schemaName = 'WatanoPage'

const WatanoPageSchema = new Schema({
    brandName: String,
    user: { type: Types.ObjectId, ref: user.schemaName },
    podcast: { type: Types.ObjectId, ref: podcast.schemaName },
    style: { type: Types.ObjectId, ref: style.schemaName },
    socialMedias: [{ type: Types.ObjectId, ref: socialMedia.schemaName }],
    projects: [{ type: Types.ObjectId, ref: project.schemaName }],
    jobs: [{ type: Types.ObjectId, ref: job.schemaName }],
})
const WatanoPage = model(schemaName, WatanoPageSchema)

export {
    WatanoPage,
    WatanoPageSchema,
    user,
    job,
    podcast,
    project,
    socialMedia,
}
