import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'ali', age: 23 },
    { id: 2, name: 'ali2', age: 30 },
    { id: 3, name: 'all3', age: 40 },
  ];

  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      throw new Error('student not found');
    }
    return student;
  }

  // POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  // update student
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error('student not found');
    }
    this.students[index] = { id, ...data };
    return this.students[index];
  }

  // PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }
  // Delete
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error('student not found');
    }
    const deleted = this.students.splice(index, 1);
    return { message: 'student deleted successfully', student: deleted[0] };
  }
}
