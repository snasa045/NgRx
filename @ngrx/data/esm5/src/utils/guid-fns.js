/*
Client-side id-generators

These GUID utility functions are not used by ngrx-data itself at this time.
They are included as candidates for generating persistable correlation ids if that becomes desirable.
They are also safe for generating unique entity ids on the client.

Note they produce 32-character hexadecimal UUID strings,
not the 128-bit representation found in server-side languages and databases.

These utilities are experimental and may be withdrawn or replaced in future.
*/
/**
 * Creates a Universally Unique Identifier (AKA GUID)
 */
export function getUuid() {
    // The original implementation is based on this SO answer:
    // http://stackoverflow.com/a/2117523/200253
    return 'xxxxxxxxxx4xxyxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // tslint:disable-next-line:no-bitwise
        var r = (Math.random() * 16) | 0, 
        // tslint:disable-next-line:no-bitwise
        v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/** Alias for getUuid(). Compare with getGuidComb(). */
export function getGuid() {
    return getUuid();
}
/**
 * Creates a sortable, pseudo-GUID (globally unique identifier)
 * whose trailing 6 bytes (12 hex digits) are time-based
 * Start either with the given getTime() value, seedTime,
 * or get the current time in ms.
 *
 * @param seed {number} - optional seed for reproducible time-part
 */
export function getGuidComb(seed) {
    // Each new Guid is greater than next if more than 1ms passes
    // See http://thatextramile.be/blog/2009/05/using-the-guidcomb-identifier-strategy
    // Based on breeze.core.getUuid which is based on this StackOverflow answer
    // http://stackoverflow.com/a/2117523/200253
    //
    // Convert time value to hex: n.toString(16)
    // Make sure it is 6 bytes long: ('00'+ ...).slice(-12) ... from the rear
    // Replace LAST 6 bytes (12 hex digits) of regular Guid (that's where they sort in a Db)
    //
    // Play with this in jsFiddle: http://jsfiddle.net/wardbell/qS8aN/
    var timePart = ('00' + (seed || new Date().getTime()).toString(16)).slice(-12);
    return ('xxxxxxxxxx4xxyxxx'.replace(/[xy]/g, function (c) {
        // tslint:disable:no-bitwise
        var r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    }) + timePart);
}
// Sort comparison value that's good enough
export function guidComparer(l, r) {
    var l_low = l.slice(-12);
    var r_low = r.slice(-12);
    return l_low !== r_low
        ? l_low < r_low
            ? -1
            : +(l_low !== r_low)
        : l < r
            ? -1
            : +(l !== r);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpZC1mbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2RhdGEvc3JjL3V0aWxzL2d1aWQtZm5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztFQVdFO0FBRUY7O0dBRUc7QUFDSCxNQUFNLFVBQVUsT0FBTztJQUNyQiwwREFBMEQ7SUFDMUQsNENBQTRDO0lBQzVDLE9BQU8sOEJBQThCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7UUFDL0Qsc0NBQXNDO1FBQ3RDLElBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDaEMsc0NBQXNDO1FBQ3RDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN0QyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsdURBQXVEO0FBQ3ZELE1BQU0sVUFBVSxPQUFPO0lBQ3JCLE9BQU8sT0FBTyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQWE7SUFDdkMsNkRBQTZEO0lBQzdELGtGQUFrRjtJQUNsRiwyRUFBMkU7SUFDM0UsNENBQTRDO0lBQzVDLEVBQUU7SUFDRiw0Q0FBNEM7SUFDNUMseUVBQXlFO0lBQ3pFLHdGQUF3RjtJQUN4RixFQUFFO0lBQ0Ysa0VBQWtFO0lBQ2xFLElBQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ3pFLENBQUMsRUFBRSxDQUNKLENBQUM7SUFDRixPQUFPLENBQ0wsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7UUFDN0MsNEJBQTRCO1FBQzVCLElBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDaEMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsR0FBRyxRQUFRLENBQ2QsQ0FBQztBQUNKLENBQUM7QUFFRCwyQ0FBMkM7QUFDM0MsTUFBTSxVQUFVLFlBQVksQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUMvQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sS0FBSyxLQUFLLEtBQUs7UUFDcEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLO1lBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5DbGllbnQtc2lkZSBpZC1nZW5lcmF0b3JzXG5cblRoZXNlIEdVSUQgdXRpbGl0eSBmdW5jdGlvbnMgYXJlIG5vdCB1c2VkIGJ5IG5ncngtZGF0YSBpdHNlbGYgYXQgdGhpcyB0aW1lLlxuVGhleSBhcmUgaW5jbHVkZWQgYXMgY2FuZGlkYXRlcyBmb3IgZ2VuZXJhdGluZyBwZXJzaXN0YWJsZSBjb3JyZWxhdGlvbiBpZHMgaWYgdGhhdCBiZWNvbWVzIGRlc2lyYWJsZS5cblRoZXkgYXJlIGFsc28gc2FmZSBmb3IgZ2VuZXJhdGluZyB1bmlxdWUgZW50aXR5IGlkcyBvbiB0aGUgY2xpZW50LlxuXG5Ob3RlIHRoZXkgcHJvZHVjZSAzMi1jaGFyYWN0ZXIgaGV4YWRlY2ltYWwgVVVJRCBzdHJpbmdzLFxubm90IHRoZSAxMjgtYml0IHJlcHJlc2VudGF0aW9uIGZvdW5kIGluIHNlcnZlci1zaWRlIGxhbmd1YWdlcyBhbmQgZGF0YWJhc2VzLlxuXG5UaGVzZSB1dGlsaXRpZXMgYXJlIGV4cGVyaW1lbnRhbCBhbmQgbWF5IGJlIHdpdGhkcmF3biBvciByZXBsYWNlZCBpbiBmdXR1cmUuXG4qL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBVbml2ZXJzYWxseSBVbmlxdWUgSWRlbnRpZmllciAoQUtBIEdVSUQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVdWlkKCkge1xuICAvLyBUaGUgb3JpZ2luYWwgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhpcyBTTyBhbnN3ZXI6XG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjMvMjAwMjUzXG4gIHJldHVybiAneHh4eHh4eHh4eDR4eHl4eHh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgfSk7XG59XG5cbi8qKiBBbGlhcyBmb3IgZ2V0VXVpZCgpLiBDb21wYXJlIHdpdGggZ2V0R3VpZENvbWIoKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHdWlkKCkge1xuICByZXR1cm4gZ2V0VXVpZCgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzb3J0YWJsZSwgcHNldWRvLUdVSUQgKGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyKVxuICogd2hvc2UgdHJhaWxpbmcgNiBieXRlcyAoMTIgaGV4IGRpZ2l0cykgYXJlIHRpbWUtYmFzZWRcbiAqIFN0YXJ0IGVpdGhlciB3aXRoIHRoZSBnaXZlbiBnZXRUaW1lKCkgdmFsdWUsIHNlZWRUaW1lLFxuICogb3IgZ2V0IHRoZSBjdXJyZW50IHRpbWUgaW4gbXMuXG4gKlxuICogQHBhcmFtIHNlZWQge251bWJlcn0gLSBvcHRpb25hbCBzZWVkIGZvciByZXByb2R1Y2libGUgdGltZS1wYXJ0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHdWlkQ29tYihzZWVkPzogbnVtYmVyKSB7XG4gIC8vIEVhY2ggbmV3IEd1aWQgaXMgZ3JlYXRlciB0aGFuIG5leHQgaWYgbW9yZSB0aGFuIDFtcyBwYXNzZXNcbiAgLy8gU2VlIGh0dHA6Ly90aGF0ZXh0cmFtaWxlLmJlL2Jsb2cvMjAwOS8wNS91c2luZy10aGUtZ3VpZGNvbWItaWRlbnRpZmllci1zdHJhdGVneVxuICAvLyBCYXNlZCBvbiBicmVlemUuY29yZS5nZXRVdWlkIHdoaWNoIGlzIGJhc2VkIG9uIHRoaXMgU3RhY2tPdmVyZmxvdyBhbnN3ZXJcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyMy8yMDAyNTNcbiAgLy9cbiAgLy8gQ29udmVydCB0aW1lIHZhbHVlIHRvIGhleDogbi50b1N0cmluZygxNilcbiAgLy8gTWFrZSBzdXJlIGl0IGlzIDYgYnl0ZXMgbG9uZzogKCcwMCcrIC4uLikuc2xpY2UoLTEyKSAuLi4gZnJvbSB0aGUgcmVhclxuICAvLyBSZXBsYWNlIExBU1QgNiBieXRlcyAoMTIgaGV4IGRpZ2l0cykgb2YgcmVndWxhciBHdWlkICh0aGF0J3Mgd2hlcmUgdGhleSBzb3J0IGluIGEgRGIpXG4gIC8vXG4gIC8vIFBsYXkgd2l0aCB0aGlzIGluIGpzRmlkZGxlOiBodHRwOi8vanNmaWRkbGUubmV0L3dhcmRiZWxsL3FTOGFOL1xuICBjb25zdCB0aW1lUGFydCA9ICgnMDAnICsgKHNlZWQgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkpLnRvU3RyaW5nKDE2KSkuc2xpY2UoXG4gICAgLTEyXG4gICk7XG4gIHJldHVybiAoXG4gICAgJ3h4eHh4eHh4eHg0eHh5eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2VcbiAgICAgIGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG4gICAgICAgIHYgPSBjID09PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pICsgdGltZVBhcnRcbiAgKTtcbn1cblxuLy8gU29ydCBjb21wYXJpc29uIHZhbHVlIHRoYXQncyBnb29kIGVub3VnaFxuZXhwb3J0IGZ1bmN0aW9uIGd1aWRDb21wYXJlcihsOiBzdHJpbmcsIHI6IHN0cmluZykge1xuICBjb25zdCBsX2xvdyA9IGwuc2xpY2UoLTEyKTtcbiAgY29uc3Qgcl9sb3cgPSByLnNsaWNlKC0xMik7XG4gIHJldHVybiBsX2xvdyAhPT0gcl9sb3dcbiAgICA/IGxfbG93IDwgcl9sb3dcbiAgICAgID8gLTFcbiAgICAgIDogKyhsX2xvdyAhPT0gcl9sb3cpXG4gICAgOiBsIDwgclxuICAgICAgPyAtMVxuICAgICAgOiArKGwgIT09IHIpO1xufVxuIl19