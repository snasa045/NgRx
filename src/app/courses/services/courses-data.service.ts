import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Course } from "../model/course";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super("Course", http, httpUrlGenerator);
  }

  getAll(): Observable<Course[]> {
    return this.http.get("/api/courses").pipe(map((res) => res["payload"]));
  }

  //custom end point for update function in edit-course-dialog.component.ts
  // update(value): Observable<any> {
  //   return this.http.put("/api/coursesssss/", value);
  // }

  // add(value): Observable<any> {
  //   return this.http.put("/api/courses/create", value);
  // }

  // delete(value): Observable<any> {
  //   return this.http.delete("/api/courses/delete", value);
  // }
}
