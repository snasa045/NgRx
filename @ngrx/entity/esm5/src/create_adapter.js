import * as tslib_1 from "tslib";
import { createInitialStateFactory } from './entity_state';
import { createSelectorsFactory } from './state_selectors';
import { createSortedStateAdapter } from './sorted_state_adapter';
import { createUnsortedStateAdapter } from './unsorted_state_adapter';
export function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = tslib_1.__assign({ sortComparer: false, selectId: function (instance) { return instance.id; } }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return tslib_1.__assign({ selectId: selectId,
        sortComparer: sortComparer }, stateFactory, selectorsFactory, stateAdapter);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VudGl0eS9zcmMvY3JlYXRlX2FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRFLE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsT0FHTTtJQUhOLHdCQUFBLEVBQUEsWUFHTTtJQUVBLElBQUEsOEdBSUwsRUFKTyxzQkFBUSxFQUFFLDhCQUlqQixDQUFDO0lBRUYsSUFBTSxZQUFZLEdBQUcseUJBQXlCLEVBQUssQ0FBQztJQUNwRCxJQUFNLGdCQUFnQixHQUFHLHNCQUFzQixFQUFLLENBQUM7SUFDckQsSUFBTSxZQUFZLEdBQUcsWUFBWTtRQUMvQixDQUFDLENBQUMsd0JBQXdCLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQztRQUNsRCxDQUFDLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFekMsMEJBQ0UsUUFBUSxVQUFBO1FBQ1IsWUFBWSxjQUFBLElBQ1QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixZQUFZLEVBQ2Y7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBFbnRpdHlEZWZpbml0aW9uLFxuICBDb21wYXJlcixcbiAgSWRTZWxlY3RvcixcbiAgRW50aXR5QWRhcHRlcixcbn0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeSB9IGZyb20gJy4vZW50aXR5X3N0YXRlJztcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkgfSBmcm9tICcuL3N0YXRlX3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIgfSBmcm9tICcuL3NvcnRlZF9zdGF0ZV9hZGFwdGVyJztcbmltcG9ydCB7IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyIH0gZnJvbSAnLi91bnNvcnRlZF9zdGF0ZV9hZGFwdGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudGl0eUFkYXB0ZXI8VD4oXG4gIG9wdGlvbnM6IHtcbiAgICBzZWxlY3RJZD86IElkU2VsZWN0b3I8VD47XG4gICAgc29ydENvbXBhcmVyPzogZmFsc2UgfCBDb21wYXJlcjxUPjtcbiAgfSA9IHt9XG4pOiBFbnRpdHlBZGFwdGVyPFQ+IHtcbiAgY29uc3QgeyBzZWxlY3RJZCwgc29ydENvbXBhcmVyIH06IEVudGl0eURlZmluaXRpb248VD4gPSB7XG4gICAgc29ydENvbXBhcmVyOiBmYWxzZSxcbiAgICBzZWxlY3RJZDogKGluc3RhbmNlOiBhbnkpID0+IGluc3RhbmNlLmlkLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgY29uc3Qgc3RhdGVGYWN0b3J5ID0gY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeTxUPigpO1xuICBjb25zdCBzZWxlY3RvcnNGYWN0b3J5ID0gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeTxUPigpO1xuICBjb25zdCBzdGF0ZUFkYXB0ZXIgPSBzb3J0Q29tcGFyZXJcbiAgICA/IGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydENvbXBhcmVyKVxuICAgIDogY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpO1xuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0SWQsXG4gICAgc29ydENvbXBhcmVyLFxuICAgIC4uLnN0YXRlRmFjdG9yeSxcbiAgICAuLi5zZWxlY3RvcnNGYWN0b3J5LFxuICAgIC4uLnN0YXRlQWRhcHRlcixcbiAgfTtcbn1cbiJdfQ==