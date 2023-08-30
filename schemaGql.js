import { gql } from "apollo-server"
const typeDefs=gql`
type Query {
  students: [Students] 
  student(id: ID!): Students
}

type Students {
  id: ID!
  name: String
  age: String
  class: String
  email: String
}

type Mutation {
  addStudent(newStudent: UserInput!): Students
  updateStudent(id: ID!, updatedStudent: UserInput!): Students
  deleteStudent(id: ID!): Students

}

input UserInput {
  
  name: String
  age: String
  class: String
  email: String
}

`
export default typeDefs