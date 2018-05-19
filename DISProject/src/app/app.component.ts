import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { StudentService } from './services/student.service';
import { Student } from './models/student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[];
  constructor(public studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getCourses().subscribe(courses => {
    this.students = courses;
      console.log(this.students);
    });
  }
}
