function nextMultipleOfFive(numberGrade) {
  const nextMultiple = Math.ceil(numberGrade / 5) * 5;
  return nextMultiple;
}

function roundGrade(grade) {
  const gradeRounded =
    nextMultipleOfFive(grade) - grade < 3 ? nextMultipleOfFive(grade) : grade;

  return gradeRounded;
}

function gradingStudents(grades) {
  const finallyResultGrades = grades.map((grade) => {
    if (grade % 5 !== 0 && grade >= 38) {
      return roundGrade(grade);
    } else {
      return grade;
    }
  });

  return finallyResultGrades;
}
console.log(gradingStudents([73, 67, 38, 33]));
