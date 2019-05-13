import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Student} from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class StudentComponent  {
    studentsList: Array<Student> = [];

    constructor(public router: Router) {
        this.studentsList.push(new Student('15001', 'Anna', 12, 'Female', ['Math', 'Physics']));
        this.studentsList.push(new Student('15002', 'Ben', 10, 'Male', ['Math', 'Physics']));
        this.studentsList.push(new Student('15003', 'Charlie', 15, 'Female', ['Math', 'Physics']));
        this.studentsList.push(new Student('15004', 'Dan', 13, 'Male', ['Math', 'Physics']));
    }

    goToHome() {
      this.router.navigate(['/']);
    }
}

