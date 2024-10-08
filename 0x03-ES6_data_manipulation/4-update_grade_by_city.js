export default function updateStudentGradeByCity(student, city, grades) {
  const filterRes = student.filter((student) => student.location === city);
  const updateStudents = filterRes.map((student) => {
    const gradeObject = grades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObject ? gradeObject.grade : 'N/A',
    };
  });
  return updateStudents;
}
