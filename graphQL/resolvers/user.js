import User from '../../models/User'
import { hashSync, genSaltSync, compareSync } from 'bcrypt'
import jwt from 'jsonwebtoken'

const userResolvers = {
  // Read
  Query: {
    getUser: (_, { token }) => {
      const user = jwt.verify(token, process.env.SECRET)
      return user
    }
  },
  Mutation: {
    signup: async (_, { input }) => {
      const { name, email, password } = input

      // Check if ther's already a user with the same email
      const existingUser = await User.findOne({ email })
      if (existingUser) 
        throw new Error('El usuario ya está registrado')

      const hashPswd = hashSync(password, genSaltSync(12))
      const user = await User.create({
        name,
        email,
        password: hashPswd
      })
      return user
    },
    login: async (_, { input }) => {
      const { email, password } = input
      // Check if the user is alredy register
      const user = await User.findOne({ email })
      if (!user)
        throw new Error('El usuario no está registrado')
      // Chech if the password is correct
      if (!compareSync(password, user.password))
        throw new Error('Contraseña incorrecta')

      return {
        token: jwt.sign({ _id: user.id, email: user.email, name: user.name }, process.env.SECRET, { expiresIn: '30d'})
      }
    }
    // Update
    
    // Delete
    
  }
}

export default userResolvers