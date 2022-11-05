import { Schema, Document as MongoDocument, model } from 'mongoose'

const schemaName = 'Style'

interface IStyle extends MongoDocument {
    backgroundColor: string
}

const StyleSchema = new Schema<IStyle>()
const Style = model<IStyle>(schemaName, StyleSchema)

export { schemaName, IStyle, StyleSchema, Style }
