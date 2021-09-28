import User from '../../models/User'

const userResolvers = {
  // Read
  Query: {
    
  },
  Mutation: {
    // Create
    addUser: () => {
      return 'Creando usuario...'
    }
    // Update
    
    // Delete
    
  }
}

export default userResolvers