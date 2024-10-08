export default function getStudentIdsSum(student) {
  const sum = student.reduce((ac, student) => ac + student.id, 0);
  return sum;
}
