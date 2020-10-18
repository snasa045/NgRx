/** Types of change in a ChangeState instance */
export var ChangeType;
(function (ChangeType) {
    /** The entity has not changed from its last known server state. */
    ChangeType[ChangeType["Unchanged"] = 0] = "Unchanged";
    /** The entity was added to the collection */
    ChangeType[ChangeType["Added"] = 1] = "Added";
    /** The entity is scheduled for delete and was removed from the collection */
    ChangeType[ChangeType["Deleted"] = 2] = "Deleted";
    /** The entity in the collection was updated */
    ChangeType[ChangeType["Updated"] = 3] = "Updated";
})(ChangeType || (ChangeType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2RhdGEvc3JjL3JlZHVjZXJzL2VudGl0eS1jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLGdEQUFnRDtBQUNoRCxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLG1FQUFtRTtJQUNuRSxxREFBYSxDQUFBO0lBQ2IsNkNBQTZDO0lBQzdDLDZDQUFLLENBQUE7SUFDTCw2RUFBNkU7SUFDN0UsaURBQU8sQ0FBQTtJQUNQLCtDQUErQztJQUMvQyxpREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQVRXLFVBQVUsS0FBVixVQUFVLFFBU3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5U3RhdGUsIERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG4vKiogVHlwZXMgb2YgY2hhbmdlIGluIGEgQ2hhbmdlU3RhdGUgaW5zdGFuY2UgKi9cbmV4cG9ydCBlbnVtIENoYW5nZVR5cGUge1xuICAvKiogVGhlIGVudGl0eSBoYXMgbm90IGNoYW5nZWQgZnJvbSBpdHMgbGFzdCBrbm93biBzZXJ2ZXIgc3RhdGUuICovXG4gIFVuY2hhbmdlZCA9IDAsXG4gIC8qKiBUaGUgZW50aXR5IHdhcyBhZGRlZCB0byB0aGUgY29sbGVjdGlvbiAqL1xuICBBZGRlZCxcbiAgLyoqIFRoZSBlbnRpdHkgaXMgc2NoZWR1bGVkIGZvciBkZWxldGUgYW5kIHdhcyByZW1vdmVkIGZyb20gdGhlIGNvbGxlY3Rpb24gKi9cbiAgRGVsZXRlZCxcbiAgLyoqIFRoZSBlbnRpdHkgaW4gdGhlIGNvbGxlY3Rpb24gd2FzIHVwZGF0ZWQgKi9cbiAgVXBkYXRlZCxcbn1cblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgZm9yIGFuIGVudGl0eSB3aXRoIHVuc2F2ZWQgY2hhbmdlcztcbiAqIGFuIGVudHJ5IGluIGFuIEVudGl0eUNvbGxlY3Rpb24uY2hhbmdlU3RhdGUgbWFwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlU3RhdGU8VD4ge1xuICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlO1xuICBvcmlnaW5hbFZhbHVlPzogVCB8IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBNYXAgb2YgZW50aXR5IHByaW1hcnkga2V5cyB0byBlbnRpdHkgQ2hhbmdlU3RhdGVzLlxuICogRWFjaCBlbnRyeSByZXByZXNlbnRzIGFuIGVudGl0eSB3aXRoIHVuc2F2ZWQgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IHR5cGUgQ2hhbmdlU3RhdGVNYXA8VD4gPSBEaWN0aW9uYXJ5PENoYW5nZVN0YXRlPFQ+PjtcblxuLyoqXG4gKiBEYXRhIGFuZCBpbmZvcm1hdGlvbiBhYm91dCBhIGNvbGxlY3Rpb24gb2YgZW50aXRpZXMgb2YgYSBzaW5nbGUgdHlwZS5cbiAqIEVudGl0eUNvbGxlY3Rpb25zIGFyZSBtYWludGFpbmVkIGluIHRoZSBFbnRpdHlDYWNoZSB3aXRoaW4gdGhlIG5ncnggc3RvcmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5Q29sbGVjdGlvbjxUID0gYW55PiBleHRlbmRzIEVudGl0eVN0YXRlPFQ+IHtcbiAgLyoqIE5hbWUgb2YgdGhlIGVudGl0eSB0eXBlIGZvciB0aGlzIGNvbGxlY3Rpb24gKi9cbiAgZW50aXR5TmFtZTogc3RyaW5nO1xuICAvKiogQSBtYXAgb2YgQ2hhbmdlU3RhdGVzLCBrZXllZCBieSBpZCwgZm9yIGVudGl0aWVzIHdpdGggdW5zYXZlZCBjaGFuZ2VzICovXG4gIGNoYW5nZVN0YXRlOiBDaGFuZ2VTdGF0ZU1hcDxUPjtcbiAgLyoqIFRoZSB1c2VyJ3MgY3VycmVudCBjb2xsZWN0aW9uIGZpbHRlciBwYXR0ZXJuICovXG4gIGZpbHRlcj86IHN0cmluZztcbiAgLyoqIHRydWUgaWYgY29sbGVjdGlvbiB3YXMgZXZlciBmaWxsZWQgYnkgUXVlcnlBbGw7IGZvcmNlZCBmYWxzZSBpZiBjbGVhcmVkICovXG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgLyoqIHRydWUgd2hlbiBhIHF1ZXJ5IG9yIHNhdmUgb3BlcmF0aW9uIGlzIGluIHByb2dyZXNzICovXG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG4iXX0=