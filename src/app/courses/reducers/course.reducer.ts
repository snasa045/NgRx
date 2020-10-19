import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Course, compareCourses } from "../model/course";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";

export interface CoursesState extends EntityState<Course> {
  allCoursesloadedFlag: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,

  // if no 'id' key is provided in the course object which is coming from backend
  // in that case we can use custom key to assign entity adapter (Ex: below)

  // selectId: course => course.courseId
});

export const initialCoursesState = adapter.getInitialState({
  allCoursesloadedFlag: false,
});

export const coursesReducer = createReducer(
  initialCoursesState,
  on(CourseActions.allCoursesLoaded, (state, action) =>
    adapter.addAll(action.courses, { ...state, allCoursesloadedFlag: true })
  ),

  on(CourseActions.courseUpdated, (state, action) =>
    adapter.updateOne(action.update, state)
  )
);

export const { selectAll } = adapter.getSelectors();
