import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {StudentComponent} from './student.component';
import {ActivatedRoute} from '@angular/router';
import {Student} from "./student.model";

@Component({
  selector: 'view-details',
  templateUrl: './view-student.component.html',
  styleUrls: [ '../app.component.css' ]
})
export class ViewStudentComponent implements OnInit{
  id: any;
  student: any;
  studentComponent = new StudentComponent(null);
      constructor(private route: ActivatedRoute, public router: Router) {

      }

  getStudentDetails() {
    this.route.queryParams.subscribe(params => {
      this.student = JSON.parse(params.student) as Student;
    });
  }

  ngOnInit() {
        this.getStudentDetails();
  }
  showStudentsList() {
    this.router.navigate(['/app-student']);
  }

}
