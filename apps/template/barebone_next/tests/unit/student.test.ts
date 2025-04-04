import { describe, it, expect} from 'vitest';


type Student = {
  name: string;
  age: number;
  grade: string;
  record: string;
};

const studentDB: Student[] = [];

export function addStudent(student: Student) {
  studentDB.push(student);
}

export function getStudents(): Student[] {
  return studentDB;
}



describe('Student Management', () => {
  it('should add a student correctly', () => {
    const student = { name: 'John Doe', age: 16, grade: '10th', record: 'Excellent' };
    addStudent(student);

    const students = getStudents();
    expect(students).toContainEqual("arst");
  });
});

