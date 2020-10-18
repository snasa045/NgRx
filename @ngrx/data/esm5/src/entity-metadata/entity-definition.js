import * as tslib_1 from "tslib";
import { createEntityAdapter } from '@ngrx/entity';
import { defaultSelectId } from '../utils/utilities';
export function createEntityDefinition(metadata) {
    var entityName = metadata.entityName;
    if (!entityName) {
        throw new Error('Missing required entityName');
    }
    metadata.entityName = entityName = entityName.trim();
    var selectId = metadata.selectId || defaultSelectId;
    var sortComparer = (metadata.sortComparer = metadata.sortComparer || false);
    var entityAdapter = createEntityAdapter({ selectId: selectId, sortComparer: sortComparer });
    var entityDispatcherOptions = metadata.entityDispatcherOptions || {};
    var initialState = entityAdapter.getInitialState(tslib_1.__assign({ entityName: entityName, filter: '', loaded: false, loading: false, changeState: {} }, (metadata.additionalCollectionState || {})));
    var noChangeTracking = metadata.noChangeTracking === true; // false by default
    return {
        entityName: entityName,
        entityAdapter: entityAdapter,
        entityDispatcherOptions: entityDispatcherOptions,
        initialState: initialState,
        metadata: metadata,
        noChangeTracking: noChangeTracking,
        selectId: selectId,
        sortComparer: sortComparer,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2RhdGEvc3JjL2VudGl0eS1tZXRhZGF0YS9lbnRpdHktZGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUE4QixtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVEvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFnQnJELE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsUUFBOEI7SUFFOUIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsUUFBUSxDQUFDLFVBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JELElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLElBQUksZUFBZSxDQUFDO0lBQ3RELElBQU0sWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBRTlFLElBQU0sYUFBYSxHQUFHLG1CQUFtQixDQUFJLEVBQUUsUUFBUSxVQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFDO0lBRXpFLElBQU0sdUJBQXVCLEdBQzNCLFFBQVEsQ0FBQyx1QkFBdUIsSUFBSSxFQUFFLENBQUM7SUFFekMsSUFBTSxZQUFZLEdBQXdCLGFBQWEsQ0FBQyxlQUFlLG9CQUNyRSxVQUFVLFlBQUEsRUFDVixNQUFNLEVBQUUsRUFBRSxFQUNWLE1BQU0sRUFBRSxLQUFLLEVBQ2IsT0FBTyxFQUFFLEtBQUssRUFDZCxXQUFXLEVBQUUsRUFBRSxJQUNaLENBQUMsUUFBUSxDQUFDLHlCQUF5QixJQUFJLEVBQUUsQ0FBQyxFQUM3QyxDQUFDO0lBRUgsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUMsbUJBQW1CO0lBRWhGLE9BQU87UUFDTCxVQUFVLFlBQUE7UUFDVixhQUFhLGVBQUE7UUFDYix1QkFBdUIseUJBQUE7UUFDdkIsWUFBWSxjQUFBO1FBQ1osUUFBUSxVQUFBO1FBQ1IsZ0JBQWdCLGtCQUFBO1FBQ2hCLFFBQVEsVUFBQTtRQUNSLFlBQVksY0FBQTtLQUNiLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RhdGUsIEVudGl0eUFkYXB0ZXIsIGNyZWF0ZUVudGl0eUFkYXB0ZXIgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuaW1wb3J0IHsgQ29tcGFyZXIsIERpY3Rpb25hcnksIElkU2VsZWN0b3IsIFVwZGF0ZSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7XG4gIEVudGl0eVNlbGVjdG9ycyxcbiAgRW50aXR5U2VsZWN0b3JzRmFjdG9yeSxcbn0gZnJvbSAnLi4vc2VsZWN0b3JzL2VudGl0eS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgRW50aXR5RGlzcGF0Y2hlckRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi4vZGlzcGF0Y2hlcnMvZW50aXR5LWRpc3BhdGNoZXItZGVmYXVsdC1vcHRpb25zJztcbmltcG9ydCB7IGRlZmF1bHRTZWxlY3RJZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxpdGllcyc7XG5pbXBvcnQgeyBFbnRpdHlDb2xsZWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvZW50aXR5LWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgRW50aXR5RmlsdGVyRm4gfSBmcm9tICcuL2VudGl0eS1maWx0ZXJzJztcbmltcG9ydCB7IEVudGl0eU1ldGFkYXRhIH0gZnJvbSAnLi9lbnRpdHktbWV0YWRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eURlZmluaXRpb248VCA9IGFueT4ge1xuICBlbnRpdHlOYW1lOiBzdHJpbmc7XG4gIGVudGl0eUFkYXB0ZXI6IEVudGl0eUFkYXB0ZXI8VD47XG4gIGVudGl0eURpc3BhdGNoZXJPcHRpb25zPzogUGFydGlhbDxFbnRpdHlEaXNwYXRjaGVyRGVmYXVsdE9wdGlvbnM+O1xuICBpbml0aWFsU3RhdGU6IEVudGl0eUNvbGxlY3Rpb248VD47XG4gIG1ldGFkYXRhOiBFbnRpdHlNZXRhZGF0YTxUPjtcbiAgbm9DaGFuZ2VUcmFja2luZzogYm9vbGVhbjtcbiAgc2VsZWN0SWQ6IElkU2VsZWN0b3I8VD47XG4gIHNvcnRDb21wYXJlcjogZmFsc2UgfCBDb21wYXJlcjxUPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudGl0eURlZmluaXRpb248VCwgUyBleHRlbmRzIG9iamVjdD4oXG4gIG1ldGFkYXRhOiBFbnRpdHlNZXRhZGF0YTxULCBTPlxuKTogRW50aXR5RGVmaW5pdGlvbjxUPiB7XG4gIGxldCBlbnRpdHlOYW1lID0gbWV0YWRhdGEuZW50aXR5TmFtZTtcbiAgaWYgKCFlbnRpdHlOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGVudGl0eU5hbWUnKTtcbiAgfVxuICBtZXRhZGF0YS5lbnRpdHlOYW1lID0gZW50aXR5TmFtZSA9IGVudGl0eU5hbWUudHJpbSgpO1xuICBjb25zdCBzZWxlY3RJZCA9IG1ldGFkYXRhLnNlbGVjdElkIHx8IGRlZmF1bHRTZWxlY3RJZDtcbiAgY29uc3Qgc29ydENvbXBhcmVyID0gKG1ldGFkYXRhLnNvcnRDb21wYXJlciA9IG1ldGFkYXRhLnNvcnRDb21wYXJlciB8fCBmYWxzZSk7XG5cbiAgY29uc3QgZW50aXR5QWRhcHRlciA9IGNyZWF0ZUVudGl0eUFkYXB0ZXI8VD4oeyBzZWxlY3RJZCwgc29ydENvbXBhcmVyIH0pO1xuXG4gIGNvbnN0IGVudGl0eURpc3BhdGNoZXJPcHRpb25zOiBQYXJ0aWFsPEVudGl0eURpc3BhdGNoZXJEZWZhdWx0T3B0aW9ucz4gPVxuICAgIG1ldGFkYXRhLmVudGl0eURpc3BhdGNoZXJPcHRpb25zIHx8IHt9O1xuXG4gIGNvbnN0IGluaXRpYWxTdGF0ZTogRW50aXR5Q29sbGVjdGlvbjxUPiA9IGVudGl0eUFkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKHtcbiAgICBlbnRpdHlOYW1lLFxuICAgIGZpbHRlcjogJycsXG4gICAgbG9hZGVkOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBjaGFuZ2VTdGF0ZToge30sXG4gICAgLi4uKG1ldGFkYXRhLmFkZGl0aW9uYWxDb2xsZWN0aW9uU3RhdGUgfHwge30pLFxuICB9KTtcblxuICBjb25zdCBub0NoYW5nZVRyYWNraW5nID0gbWV0YWRhdGEubm9DaGFuZ2VUcmFja2luZyA9PT0gdHJ1ZTsgLy8gZmFsc2UgYnkgZGVmYXVsdFxuXG4gIHJldHVybiB7XG4gICAgZW50aXR5TmFtZSxcbiAgICBlbnRpdHlBZGFwdGVyLFxuICAgIGVudGl0eURpc3BhdGNoZXJPcHRpb25zLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBtZXRhZGF0YSxcbiAgICBub0NoYW5nZVRyYWNraW5nLFxuICAgIHNlbGVjdElkLFxuICAgIHNvcnRDb21wYXJlcixcbiAgfTtcbn1cbiJdfQ==