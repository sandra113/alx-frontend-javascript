export default function getStudentsByLocation(studentsList, city) {
  // Use the filter function to filter students by the specified city
  return studentsList.filter(student => student.location === city);
}

