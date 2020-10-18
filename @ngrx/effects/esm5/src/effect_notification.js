export function reportInvalidActions(output, reporter) {
    if (output.notification.kind === 'N') {
        var action = output.notification.value;
        var isInvalidAction = !isAction(action);
        if (isInvalidAction) {
            reporter.handleError(new Error("Effect " + getEffectName(output) + " dispatched an invalid action: " + stringify(action)));
        }
    }
}
function isAction(action) {
    return (typeof action !== 'function' &&
        action &&
        action.type &&
        typeof action.type === 'string');
}
function getEffectName(_a) {
    var propertyName = _a.propertyName, sourceInstance = _a.sourceInstance, sourceName = _a.sourceName;
    var isMethod = typeof sourceInstance[propertyName] === 'function';
    return "\"" + sourceName + "." + propertyName + (isMethod ? '()' : '') + "\"";
}
function stringify(action) {
    try {
        return JSON.stringify(action);
    }
    catch (_a) {
        return action;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0X25vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvZWZmZWN0cy9zcmMvZWZmZWN0X25vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLE1BQTBCLEVBQzFCLFFBQXNCO0lBRXRCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO1FBQ3BDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQU0sZUFBZSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksZUFBZSxFQUFFO1lBQ25CLFFBQVEsQ0FBQyxXQUFXLENBQ2xCLElBQUksS0FBSyxDQUNQLFlBQVUsYUFBYSxDQUNyQixNQUFNLENBQ1AsdUNBQWtDLFNBQVMsQ0FBQyxNQUFNLENBQUcsQ0FDdkQsQ0FDRixDQUFDO1NBQ0g7S0FDRjtBQUNILENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxNQUFXO0lBQzNCLE9BQU8sQ0FDTCxPQUFPLE1BQU0sS0FBSyxVQUFVO1FBQzVCLE1BQU07UUFDTixNQUFNLENBQUMsSUFBSTtRQUNYLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLENBQ2hDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsRUFJRjtRQUhuQiw4QkFBWSxFQUNaLGtDQUFjLEVBQ2QsMEJBQVU7SUFFVixJQUFNLFFBQVEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSyxVQUFVLENBQUM7SUFFcEUsT0FBTyxPQUFJLFVBQVUsU0FBSSxZQUFZLElBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBRyxDQUFDO0FBQ2xFLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxNQUFpQztJQUNsRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBQUMsV0FBTTtRQUNOLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBFZmZlY3ROb3RpZmljYXRpb24ge1xuICBlZmZlY3Q6IE9ic2VydmFibGU8YW55PiB8ICgoKSA9PiBPYnNlcnZhYmxlPGFueT4pO1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcbiAgc291cmNlTmFtZTogc3RyaW5nO1xuICBzb3VyY2VJbnN0YW5jZTogYW55O1xuICBub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbjxBY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydEludmFsaWRBY3Rpb25zKFxuICBvdXRwdXQ6IEVmZmVjdE5vdGlmaWNhdGlvbixcbiAgcmVwb3J0ZXI6IEVycm9ySGFuZGxlclxuKSB7XG4gIGlmIChvdXRwdXQubm90aWZpY2F0aW9uLmtpbmQgPT09ICdOJykge1xuICAgIGNvbnN0IGFjdGlvbiA9IG91dHB1dC5ub3RpZmljYXRpb24udmFsdWU7XG4gICAgY29uc3QgaXNJbnZhbGlkQWN0aW9uID0gIWlzQWN0aW9uKGFjdGlvbik7XG5cbiAgICBpZiAoaXNJbnZhbGlkQWN0aW9uKSB7XG4gICAgICByZXBvcnRlci5oYW5kbGVFcnJvcihcbiAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgIGBFZmZlY3QgJHtnZXRFZmZlY3ROYW1lKFxuICAgICAgICAgICAgb3V0cHV0XG4gICAgICAgICAgKX0gZGlzcGF0Y2hlZCBhbiBpbnZhbGlkIGFjdGlvbjogJHtzdHJpbmdpZnkoYWN0aW9uKX1gXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzQWN0aW9uKGFjdGlvbjogYW55KTogYWN0aW9uIGlzIEFjdGlvbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIGFjdGlvbiAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGFjdGlvbiAmJlxuICAgIGFjdGlvbi50eXBlICYmXG4gICAgdHlwZW9mIGFjdGlvbi50eXBlID09PSAnc3RyaW5nJ1xuICApO1xufVxuXG5mdW5jdGlvbiBnZXRFZmZlY3ROYW1lKHtcbiAgcHJvcGVydHlOYW1lLFxuICBzb3VyY2VJbnN0YW5jZSxcbiAgc291cmNlTmFtZSxcbn06IEVmZmVjdE5vdGlmaWNhdGlvbikge1xuICBjb25zdCBpc01ldGhvZCA9IHR5cGVvZiBzb3VyY2VJbnN0YW5jZVtwcm9wZXJ0eU5hbWVdID09PSAnZnVuY3Rpb24nO1xuXG4gIHJldHVybiBgXCIke3NvdXJjZU5hbWV9LiR7cHJvcGVydHlOYW1lfSR7aXNNZXRob2QgPyAnKCknIDogJyd9XCJgO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYWN0aW9uOiBBY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFjdGlvbik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbn1cbiJdfQ==