import { compose } from '@ngrx/store';
import { getSourceForInstance } from './utils';
var METADATA_KEY = '__@ngrx/effects__';
export function Effect(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.dispatch, dispatch = _c === void 0 ? true : _c, _d = _b.resubscribeOnError, resubscribeOnError = _d === void 0 ? true : _d;
    return function (target, propertyName) {
        // Right now both createEffect and @Effect decorator set default values.
        // Ideally that should only be done in one place that aggregates that info,
        // for example in mergeEffects().
        var metadata = {
            propertyName: propertyName,
            dispatch: dispatch,
            resubscribeOnError: resubscribeOnError,
        };
        setEffectMetadataEntries(target, [metadata]);
    };
}
export function getEffectDecoratorMetadata(instance) {
    var effectsDecorators = compose(getEffectMetadataEntries, getSourceForInstance)(instance);
    return effectsDecorators;
}
function setEffectMetadataEntries(sourceProto, entries) {
    var constructor = sourceProto.constructor;
    var meta = constructor.hasOwnProperty(METADATA_KEY)
        ? constructor[METADATA_KEY]
        : Object.defineProperty(constructor, METADATA_KEY, { value: [] })[METADATA_KEY];
    Array.prototype.push.apply(meta, entries);
}
function getEffectMetadataEntries(sourceProto) {
    return sourceProto.constructor.hasOwnProperty(METADATA_KEY)
        ? sourceProto.constructor[METADATA_KEY]
        : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0X2RlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUUvQyxJQUFNLFlBQVksR0FBRyxtQkFBbUIsQ0FBQztBQUV6QyxNQUFNLFVBQVUsTUFBTSxDQUFJLEVBR047UUFITSw0QkFHTixFQUZsQixnQkFBZSxFQUFmLG9DQUFlLEVBQ2YsMEJBQXlCLEVBQXpCLDhDQUF5QjtJQUV6QixPQUFPLFVBQ0wsTUFBUyxFQUNULFlBQWU7UUFFZix3RUFBd0U7UUFDeEUsMkVBQTJFO1FBQzNFLGlDQUFpQztRQUNqQyxJQUFNLFFBQVEsR0FBc0I7WUFDbEMsWUFBWSxjQUFBO1lBQ1osUUFBUSxVQUFBO1lBQ1Isa0JBQWtCLG9CQUFBO1NBQ25CLENBQUM7UUFDRix3QkFBd0IsQ0FBSSxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQXdELENBQUM7QUFDM0QsQ0FBQztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FDeEMsUUFBVztJQUVYLElBQU0saUJBQWlCLEdBQXdCLE9BQU8sQ0FDcEQsd0JBQXdCLEVBQ3hCLG9CQUFvQixDQUNyQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRVosT0FBTyxpQkFBaUIsQ0FBQztBQUMzQixDQUFDO0FBRUQsU0FBUyx3QkFBd0IsQ0FDL0IsV0FBYyxFQUNkLE9BQTRCO0lBRTVCLElBQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDNUMsSUFBTSxJQUFJLEdBQTZCLFdBQVcsQ0FBQyxjQUFjLENBQy9ELFlBQVksQ0FDYjtRQUNDLENBQUMsQ0FBRSxXQUFtQixDQUFDLFlBQVksQ0FBQztRQUNwQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQzdELFlBQVksQ0FDYixDQUFDO0lBQ04sS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyx3QkFBd0IsQ0FBSSxXQUFjO0lBQ2pELE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ3pELENBQUMsQ0FBRSxXQUFXLENBQUMsV0FBbUIsQ0FBQyxZQUFZLENBQUM7UUFDaEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0TWV0YWRhdGEsIEVmZmVjdENvbmZpZyB9IGZyb20gJy4vbW9kZWxzJztcbmltcG9ydCB7IGdldFNvdXJjZUZvckluc3RhbmNlIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IE1FVEFEQVRBX0tFWSA9ICdfX0BuZ3J4L2VmZmVjdHNfXyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBFZmZlY3Q8VD4oe1xuICBkaXNwYXRjaCA9IHRydWUsXG4gIHJlc3Vic2NyaWJlT25FcnJvciA9IHRydWUsXG59OiBFZmZlY3RDb25maWcgPSB7fSk6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuIGZ1bmN0aW9uPEsgZXh0ZW5kcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz4+KFxuICAgIHRhcmdldDogVCxcbiAgICBwcm9wZXJ0eU5hbWU6IEtcbiAgKSB7XG4gICAgLy8gUmlnaHQgbm93IGJvdGggY3JlYXRlRWZmZWN0IGFuZCBARWZmZWN0IGRlY29yYXRvciBzZXQgZGVmYXVsdCB2YWx1ZXMuXG4gICAgLy8gSWRlYWxseSB0aGF0IHNob3VsZCBvbmx5IGJlIGRvbmUgaW4gb25lIHBsYWNlIHRoYXQgYWdncmVnYXRlcyB0aGF0IGluZm8sXG4gICAgLy8gZm9yIGV4YW1wbGUgaW4gbWVyZ2VFZmZlY3RzKCkuXG4gICAgY29uc3QgbWV0YWRhdGE6IEVmZmVjdE1ldGFkYXRhPFQ+ID0ge1xuICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICByZXN1YnNjcmliZU9uRXJyb3IsXG4gICAgfTtcbiAgICBzZXRFZmZlY3RNZXRhZGF0YUVudHJpZXM8VD4odGFyZ2V0LCBbbWV0YWRhdGFdKTtcbiAgfSBhcyAodGFyZ2V0OiB7fSwgcHJvcGVydHlOYW1lOiBzdHJpbmcgfCBzeW1ib2wpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFZmZlY3REZWNvcmF0b3JNZXRhZGF0YTxUPihcbiAgaW5zdGFuY2U6IFRcbik6IEVmZmVjdE1ldGFkYXRhPFQ+W10ge1xuICBjb25zdCBlZmZlY3RzRGVjb3JhdG9yczogRWZmZWN0TWV0YWRhdGE8VD5bXSA9IGNvbXBvc2UoXG4gICAgZ2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzLFxuICAgIGdldFNvdXJjZUZvckluc3RhbmNlXG4gICkoaW5zdGFuY2UpO1xuXG4gIHJldHVybiBlZmZlY3RzRGVjb3JhdG9ycztcbn1cblxuZnVuY3Rpb24gc2V0RWZmZWN0TWV0YWRhdGFFbnRyaWVzPFQ+KFxuICBzb3VyY2VQcm90bzogVCxcbiAgZW50cmllczogRWZmZWN0TWV0YWRhdGE8VD5bXVxuKSB7XG4gIGNvbnN0IGNvbnN0cnVjdG9yID0gc291cmNlUHJvdG8uY29uc3RydWN0b3I7XG4gIGNvbnN0IG1ldGE6IEFycmF5PEVmZmVjdE1ldGFkYXRhPFQ+PiA9IGNvbnN0cnVjdG9yLmhhc093blByb3BlcnR5KFxuICAgIE1FVEFEQVRBX0tFWVxuICApXG4gICAgPyAoY29uc3RydWN0b3IgYXMgYW55KVtNRVRBREFUQV9LRVldXG4gICAgOiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsIE1FVEFEQVRBX0tFWSwgeyB2YWx1ZTogW10gfSlbXG4gICAgICAgIE1FVEFEQVRBX0tFWVxuICAgICAgXTtcbiAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkobWV0YSwgZW50cmllcyk7XG59XG5cbmZ1bmN0aW9uIGdldEVmZmVjdE1ldGFkYXRhRW50cmllczxUPihzb3VyY2VQcm90bzogVCk6IEVmZmVjdE1ldGFkYXRhPFQ+W10ge1xuICByZXR1cm4gc291cmNlUHJvdG8uY29uc3RydWN0b3IuaGFzT3duUHJvcGVydHkoTUVUQURBVEFfS0VZKVxuICAgID8gKHNvdXJjZVByb3RvLmNvbnN0cnVjdG9yIGFzIGFueSlbTUVUQURBVEFfS0VZXVxuICAgIDogW107XG59XG4iXX0=