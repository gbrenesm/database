import { Schema, model, models } from 'mongoose'

const RecordSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  newspaper: String,
  publication: Date,
  page: String,
  place: String,
  transcription: String,
  file: String,
  url: {
    type: String,
    required: true
  }
})

export default models.Record || model('Record', RecordSchema)