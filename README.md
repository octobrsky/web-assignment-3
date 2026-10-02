# Assignment 3 - University Course Management System

This project is a simple course management and grading system using modern JavaScript features (ES6 classes, async callbacks, immutability, and higher-order functions).

## File Structure
- `models.js`: Contains the `Student` class. The `id` is protected using `Object.defineProperty` so it cannot be modified or reconfigured. Also includes helper methods for course management and calculating student GPA.
- `database.js`: Simulates a slow backend connection using `setTimeout` (2-second delay) and sends raw student data back via a callback function.
- `analytics.js`: Includes functions to calculate course averages, find the top-performing student using `.reduce()`, and filter students using a higher-order function.
- `main.js`: Main entry file. Fetches the data, creates class instances, tests the id immutability, and prints the analytics report to the console.

## Challenges Faced
- Making the student ID truly immutable was tricky at first because simply setting it in constructor normally allows overwriting. Using `Object.defineProperty` with `writable: false` and `configurable: false` solved it cleanly.
- Handling data inside the asynchronous callback required making sure the class conversion and analytics calculations only run after the simulated 2-second timeout finishes.
- Designing `filterStudents` as a generic higher-order function so that it accepts custom condition functions (like checking specific course enrollments with `.some()`).
