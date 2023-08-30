import { students } from "./fakedb.js";
import { v4 as uuidv4 } from "uuid";

const resolvers = {
  Query: {
    students: () => students,
    student: (_, { id }) => students.find((student) => student.id === id),
  },
 
  Mutation: {
    addStudent: (_, { newStudent }) => {
      const id = uuidv4();
      students.push({
        id, ...newStudent
      });
      const addedStudent = students.find(student => student.id === id);
      return addedStudent;
    },
    updateStudent: (_, { id, updatedStudent }) => {
      const indexToUpdate = students.findIndex((student) => student.id === id);
      if (indexToUpdate === -1) {
        throw new Error("Student not found.");
      }

      students[indexToUpdate] = {
        id,
        ...updatedStudent
      };

      return students[indexToUpdate];
    },
    deleteStudent: (_, { id }) => {
      const indexToDelete = students.findIndex(student => student.id === id);
      if (indexToDelete === -1) {
        throw new Error('Student not found.');
      }
      const deletedStudent = students.splice(indexToDelete, 1)[0];
      return deletedStudent;
    },
  },
};

export default resolvers;
