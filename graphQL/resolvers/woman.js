import Woman from '../../models/Woman'

const womanResolvers = {
  Query: {
    getWomen: async () => {
      const women = await Woman.find()
      return women
    },
    getWomanDetail: async (_, { id }) => {
      const woman = await Woman.findById(id)
      return woman
    }
  },
  Mutation: {
    addWoman: async (_, { input }) => {
      const { name, age, birthday, death, note,
        eventsDay, place, who, what, description } = input
      const woman = await Woman.create({
        name, age, birthday, death, note,
        eventsDay, place, who, what, description}
      )
      return woman
    },
    editWoman: async (_, { id, input }) => {
      const { name, age, birthday, death, note,
        eventsDay, place, who, what, description } = input
      const woman = await Woman.findByIdAndUpdate(id, {
        name, age, birthday, death, note,
        eventsDay, place, who, what, description},
        { new: true }
      )
      return woman
    },
    deleteWoman: async (_, { id }) => {
      await Woman.findByIdAndDelete(id)
      return 'Registro de mujer eliminado con éxito.'
    },
  }
}

export default womanResolvers