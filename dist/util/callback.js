"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function callback(func, returnFunc) {
    const result = func();
    if (Array.isArray(result)) {
        returnFunc(...result);
        return;
    }
    if (returnFunc !== null && result !== undefined)
        returnFunc(result);
}
exports.default = callback;
//# sourceMappingURL=callback.js.map