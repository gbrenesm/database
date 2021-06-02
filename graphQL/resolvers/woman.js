import Woman from '../../models/Woman'

const womanResolvers = {
  Query: {
    getWomen: async () => {
      const women = Woman.find()
      return women
    }
  }
}

export default womanResolvers