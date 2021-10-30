import { Schema, model, models } from 'mongoose'

const WomanSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  birthday: Date,
  death: Date,
  note: String,
  eventsYear: Number,
  eventsMonth: Number,
  eventsDay: Number,
  place: String,
  who: String,
  crime: {
    type: String,
    required: true
  },
  description: String,
  records: [{
    type: Schema.Types.ObjectId,
    ref: 'Record'
  }]
})

export default models.Woman || model('Woman', WomanSchema)