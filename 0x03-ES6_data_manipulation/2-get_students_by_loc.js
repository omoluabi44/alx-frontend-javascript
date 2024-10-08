export default function getStudentsByLocation(students, city) {
  const filterRes = students.filter((student) => student.location === city);
  return filterRes;
}
