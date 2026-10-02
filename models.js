// Student class for university grading system
export class Student {
  constructor(id, name, courses = []) {
    // ID must be read-only and non-configurable as required
    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false
    });

    this.name = name;
    this.courses = courses; // array of { courseId, grade }
  }

  // add a new course grade to the student
  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  // calculates the student overall average
  getAverage() {
    if (this.courses.length === 0) return 0;
    
    let sum = 0;
    for (let i = 0; i < this.courses.length; i++) {
      sum += this.courses[i].grade;
    }
    return sum / this.courses.length;
  }
}
