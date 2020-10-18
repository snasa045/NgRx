/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An action dispatched when a router navigation request is fired.
 * @type {?}
 */
export const ROUTER_REQUEST = '@ngrx/router-store/request';
/**
 * An action dispatched when the router navigates.
 * @type {?}
 */
export const ROUTER_NAVIGATION = '@ngrx/router-store/navigation';
/**
 * An action dispatched when the router cancels navigation.
 * @type {?}
 */
export const ROUTER_CANCEL = '@ngrx/router-store/cancel';
/**
 * An action dispatched when the router errors.
 * @type {?}
 */
export const ROUTER_ERROR = '@ngrx/router-store/error';
/**
 * An action dispatched after navigation has ended and new route is active.
 * @type {?}
 */
export const ROUTER_NAVIGATED = '@ngrx/router-store/navigated';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvcm91dGVyLXN0b3JlL3NyYy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBY0EsTUFBTSxPQUFPLGNBQWMsR0FBRyw0QkFBNEI7Ozs7O0FBeUIxRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsK0JBQStCOzs7OztBQXlCaEUsTUFBTSxPQUFPLGFBQWEsR0FBRywyQkFBMkI7Ozs7O0FBNEJ4RCxNQUFNLE9BQU8sWUFBWSxHQUFHLDBCQUEwQjs7Ozs7QUE0QnRELE1BQU0sT0FBTyxnQkFBZ0IsR0FBRyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIE5hdmlnYXRpb25TdGFydCxcbiAgUm91dGVzUmVjb2duaXplZCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQmFzZVJvdXRlclN0b3JlU3RhdGUgfSBmcm9tICcuL3NlcmlhbGl6ZXJzL2Jhc2UnO1xuaW1wb3J0IHsgU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICcuL3NlcmlhbGl6ZXJzL2RlZmF1bHRfc2VyaWFsaXplcic7XG5cbi8qKlxuICogQW4gYWN0aW9uIGRpc3BhdGNoZWQgd2hlbiBhIHJvdXRlciBuYXZpZ2F0aW9uIHJlcXVlc3QgaXMgZmlyZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfUkVRVUVTVCA9ICdAbmdyeC9yb3V0ZXItc3RvcmUvcmVxdWVzdCc7XG5cbi8qKlxuICogUGF5bG9hZCBvZiBST1VURVJfUkVRVUVTVFxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJSZXF1ZXN0UGF5bG9hZDxcbiAgVCBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHJvdXRlclN0YXRlOiBUO1xuICBldmVudDogTmF2aWdhdGlvblN0YXJ0O1xufTtcblxuLyoqXG4gKiBBbiBhY3Rpb24gZGlzcGF0Y2hlZCB3aGVuIGEgcm91dGVyIG5hdmlnYXRpb24gcmVxdWVzdCBpcyBmaXJlZC5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyUmVxdWVzdEFjdGlvbjxcbiAgVCBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHR5cGU6IHR5cGVvZiBST1VURVJfUkVRVUVTVDtcbiAgcGF5bG9hZDogUm91dGVyUmVxdWVzdFBheWxvYWQ8VD47XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHJvdXRlciBuYXZpZ2F0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfTkFWSUdBVElPTiA9ICdAbmdyeC9yb3V0ZXItc3RvcmUvbmF2aWdhdGlvbic7XG5cbi8qKlxuICogUGF5bG9hZCBvZiBST1VURVJfTkFWSUdBVElPTi5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyTmF2aWdhdGlvblBheWxvYWQ8XG4gIFQgZXh0ZW5kcyBCYXNlUm91dGVyU3RvcmVTdGF0ZSA9IFNlcmlhbGl6ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90XG4+ID0ge1xuICByb3V0ZXJTdGF0ZTogVDtcbiAgZXZlbnQ6IFJvdXRlc1JlY29nbml6ZWQ7XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHJvdXRlciBuYXZpZ2F0ZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlck5hdmlnYXRpb25BY3Rpb248XG4gIFQgZXh0ZW5kcyBCYXNlUm91dGVyU3RvcmVTdGF0ZSA9IFNlcmlhbGl6ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90XG4+ID0ge1xuICB0eXBlOiB0eXBlb2YgUk9VVEVSX05BVklHQVRJT047XG4gIHBheWxvYWQ6IFJvdXRlck5hdmlnYXRpb25QYXlsb2FkPFQ+O1xufTtcblxuLyoqXG4gKiBBbiBhY3Rpb24gZGlzcGF0Y2hlZCB3aGVuIHRoZSByb3V0ZXIgY2FuY2VscyBuYXZpZ2F0aW9uLlxuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX0NBTkNFTCA9ICdAbmdyeC9yb3V0ZXItc3RvcmUvY2FuY2VsJztcblxuLyoqXG4gKiBQYXlsb2FkIG9mIFJPVVRFUl9DQU5DRUwuXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlckNhbmNlbFBheWxvYWQ8XG4gIFQsXG4gIFYgZXh0ZW5kcyBCYXNlUm91dGVyU3RvcmVTdGF0ZSA9IFNlcmlhbGl6ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90XG4+ID0ge1xuICByb3V0ZXJTdGF0ZTogVjtcbiAgc3RvcmVTdGF0ZTogVDtcbiAgZXZlbnQ6IE5hdmlnYXRpb25DYW5jZWw7XG59O1xuXG4vKipcbiAqIEFuIGFjdGlvbiBkaXNwYXRjaGVkIHdoZW4gdGhlIHJvdXRlciBjYW5jZWxzIG5hdmlnYXRpb24uXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlckNhbmNlbEFjdGlvbjxcbiAgVCxcbiAgViBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHR5cGU6IHR5cGVvZiBST1VURVJfQ0FOQ0VMO1xuICBwYXlsb2FkOiBSb3V0ZXJDYW5jZWxQYXlsb2FkPFQsIFY+O1xufTtcblxuLyoqXG4gKiBBbiBhY3Rpb24gZGlzcGF0Y2hlZCB3aGVuIHRoZSByb3V0ZXIgZXJyb3JzLlxuICovXG5leHBvcnQgY29uc3QgUk9VVEVSX0VSUk9SID0gJ0BuZ3J4L3JvdXRlci1zdG9yZS9lcnJvcic7XG5cbi8qKlxuICogUGF5bG9hZCBvZiBST1VURVJfRVJST1IuXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlckVycm9yUGF5bG9hZDxcbiAgVCxcbiAgViBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHJvdXRlclN0YXRlOiBWO1xuICBzdG9yZVN0YXRlOiBUO1xuICBldmVudDogTmF2aWdhdGlvbkVycm9yO1xufTtcblxuLyoqXG4gKiBBbiBhY3Rpb24gZGlzcGF0Y2hlZCB3aGVuIHRoZSByb3V0ZXIgZXJyb3JzLlxuICovXG5leHBvcnQgdHlwZSBSb3V0ZXJFcnJvckFjdGlvbjxcbiAgVCxcbiAgViBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHR5cGU6IHR5cGVvZiBST1VURVJfRVJST1I7XG4gIHBheWxvYWQ6IFJvdXRlckVycm9yUGF5bG9hZDxULCBWPjtcbn07XG5cbi8qKlxuICogQW4gYWN0aW9uIGRpc3BhdGNoZWQgYWZ0ZXIgbmF2aWdhdGlvbiBoYXMgZW5kZWQgYW5kIG5ldyByb3V0ZSBpcyBhY3RpdmUuXG4gKi9cbmV4cG9ydCBjb25zdCBST1VURVJfTkFWSUdBVEVEID0gJ0BuZ3J4L3JvdXRlci1zdG9yZS9uYXZpZ2F0ZWQnO1xuXG4vKipcbiAqIFBheWxvYWQgb2YgUk9VVEVSX05BVklHQVRFRC5cbiAqL1xuZXhwb3J0IHR5cGUgUm91dGVyTmF2aWdhdGVkUGF5bG9hZDxcbiAgVCBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHJvdXRlclN0YXRlOiBUO1xuICBldmVudDogTmF2aWdhdGlvbkVuZDtcbn07XG5cbi8qKlxuICogQW4gYWN0aW9uIGRpc3BhdGNoZWQgYWZ0ZXIgbmF2aWdhdGlvbiBoYXMgZW5kZWQgYW5kIG5ldyByb3V0ZSBpcyBhY3RpdmUuXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlck5hdmlnYXRlZEFjdGlvbjxcbiAgVCBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPSB7XG4gIHR5cGU6IHR5cGVvZiBST1VURVJfTkFWSUdBVEVEO1xuICBwYXlsb2FkOiBSb3V0ZXJOYXZpZ2F0ZWRQYXlsb2FkPFQ+O1xufTtcblxuLyoqXG4gKiBBIHVuaW9uIHR5cGUgb2Ygcm91dGVyIGFjdGlvbnMuXG4gKi9cbmV4cG9ydCB0eXBlIFJvdXRlckFjdGlvbjxcbiAgVCxcbiAgViBleHRlbmRzIEJhc2VSb3V0ZXJTdG9yZVN0YXRlID0gU2VyaWFsaXplZFJvdXRlclN0YXRlU25hcHNob3Rcbj4gPVxuICB8IFJvdXRlclJlcXVlc3RBY3Rpb248Vj5cbiAgfCBSb3V0ZXJOYXZpZ2F0aW9uQWN0aW9uPFY+XG4gIHwgUm91dGVyQ2FuY2VsQWN0aW9uPFQsIFY+XG4gIHwgUm91dGVyRXJyb3JBY3Rpb248VCwgVj5cbiAgfCBSb3V0ZXJOYXZpZ2F0ZWRBY3Rpb248Vj47XG4iXX0=