// Returns the average grade for a given course
export function calculateClassAverage(students, courseId) {
  let total = 0;
  let count = 0;

  for (const s of students) {
    const course = s.courses.find(c => c.courseId === courseId);
    if (course) {
      total += course.grade;
      count++;
    }
  }

  if (count === 0) return 0;
  return Number((total / count).toFixed(2));
}

// Finds the student with highest average using reduce
export function findTopStudent(students) {
  if (!students.length) return null;

  return students.reduce((max, current) => {
    return current.getAverage() > max.getAverage() ? current : max;
  });
}

// Higher order filter function
export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
