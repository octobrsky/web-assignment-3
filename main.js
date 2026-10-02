import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import { calculateClassAverage, findTopStudent, filterStudents } from "./analytics.js";

fetchStudents((rawData) => {
  // convert raw objects to Student instances
  const students = rawData.map(s => new Student(s.id, s.name, s.courses));

  // test immutability of id
  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  
  students[0].id = 999; // tries to overwrite read-only id

  if (students[0].id === 1) {
    console.log(`Final ID: ${students[0].id} (Success: ID did not change)\n`);
  } else {
    console.log(`Final ID: ${students[0].id} (Failed to keep immutable)\n`);
  }

  // analytics report
  console.log("--- Analytics Report ---");

  // course 101 avg
  const avg101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${avg101}`);

  // best student
  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage().toFixed(1)})`);

  // students who took course 102
  const in102 = filterStudents(students, s => s.courses.some(c => c.courseId === 102));
  const names = in102.map(s => s.name).join(", ");
  console.log(`Students in Course 102: ${names}`);
});
