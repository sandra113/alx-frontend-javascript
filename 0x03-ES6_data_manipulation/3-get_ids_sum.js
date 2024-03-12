export default function getStudentIdsSum(studentsList) {
  // Use the reduce function to sum up all the student ids
  return studentsList.reduce((sum, student) => sum + student.id, 0);
}

