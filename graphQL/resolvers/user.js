import User from '../../models/User'

const userResolvers = {
  // Read
  Query: {
    
  },
  Mutation: {
    // Create
    addUser: async (_, { input }) => {
      const { name, email } = input
      // Check if ther's already a user with the same email
      const existingUser = await User.findOne({ email })
      if (existingUser) throw new Error('El usuario ya está registrado')

      const user = await User
      return 'Creando usuario...'
    }
    // Update
    
    // Delete
    
  }
}

export default userResolvers