import Woman from '../../models/Woman'

const womanResolvers = {
  Query: {
    getWomen: async () => {
      const women = Woman.find()
      return women
    },
    getWomanDetail: async (_, { id }) => {
      const woman = Woman.findById(id)
      return woman
    }
  }
}

export default womanResolvers