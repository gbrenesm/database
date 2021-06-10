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
  eventsDay: Date,
  place: String,
  who: String,
  what: {
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