import { Component } from "@angular/core";
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent {

    courses: Course[] = [];

}