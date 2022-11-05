import { Schema, Document as MongoDocument, model, Types } from 'mongoose'

const schemaName = 'Podcast'
const episodeSchemaName = 'Episode'

interface IPodcastEpisode extends MongoDocument {
    title: string
    image: string
    urlSpotify: string
    urlYoutube: string
    urlApplication: string
}

const PodcastEpisodeSchema = new Schema<IPodcastEpisode>()
const PodcastEpisode = model<IPodcast>(episodeSchemaName, PodcastEpisodeSchema)

interface IPodcast extends MongoDocument {
    name: string
    description: string
    episodes: [IPodcastEpisode]
}

const PodcastSchema = new Schema<IPodcast>({
    episodes: [{ type: Types.ObjectId, ref: episodeSchemaName }],
})
const Podcast = model<IPodcast>(schemaName, PodcastSchema)

export {
    episodeSchemaName,
    schemaName,
    IPodcastEpisode,
    PodcastEpisodeSchema,
    PodcastEpisode,
    IPodcast,
    PodcastSchema,
    Podcast,
}
