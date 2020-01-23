import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID

// Demo user data
const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com',
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com',
  },
]

// Type definitions (Application Schema)
const typeDefs = `
  type Query {
    users: [User]!
    me: User!
    post: Post!
  },

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`

// Resolvers (A set of functions)
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      return users
    },

    me() {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@gmail.com',
        age: 28
      }
    },

    post() {
      return {
        id: 'abc2323',
        title: 'Magnificent 7',
        body: 'Aenean lacinia bibendum nulla sed consectetur.',
        published: true
      }
    },

  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('The serve is up')
})