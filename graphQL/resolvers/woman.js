import Woman from '../../models/Woman'
import Record from '../..//models/Record'

const womanResolvers = {
  Woman: {

  },

  // Read
  Query: {
    getWomen: async () => {
      const women = await Woman.find()
      return women
    },
    getWomanDetail: async (_, { id }) => {
      const woman = await Woman.findById(id).populate({ path: 'records'})
      return woman
    }
  },
  Mutation: {
    // Create
    addWoman: async (_, { input }) => {
      const woman = await Woman.create(input)
      return woman
    },
    // Update
    editWoman: async (_, { id, input }) => {
      const woman = await Woman.findByIdAndUpdate(id, input, { new: true })
      return woman
    },
    // Delete
    deleteWoman: async (_, { id }) => {
      await Woman.findByIdAndDelete(id)
      return 'Registro de mujer eliminado con éxito.'
    },
  }
}

export default womanResolvers