import mongoose from 'mongoose'

const connect = async () => {
  await mongoose
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(x => console.log(`Connected to Mongo! 💾 Database name: "${x.connections[0].name}"`))
    .catch(error => console.log(error))
}

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    await connect()
  }
  return handler(req, res)
}

export default connectDB