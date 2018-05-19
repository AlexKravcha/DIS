import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  courses: Observable<Student[]>;
  constructor(db: AngularFireDatabase) { 
    this.courses = db.list('courses').valueChanges() as Observable<Student[]>;

  }

  getCourses() {
    return this.courses;
  }
}
