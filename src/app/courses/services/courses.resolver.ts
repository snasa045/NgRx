import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { CourseEntityService } from "./course-entity.service";
import { map, tap, filter, first } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(private courseEntityService: CourseEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // this.courseEntityService
    //   .getAll()
    //   .subscribe((res) => console.log("resolver", res));
    return this.courseEntityService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.courseEntityService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
    // return this.courseEntityService.getAll().pipe(map((courses) => !!courses));
  }
}
