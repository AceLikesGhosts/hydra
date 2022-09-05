"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../util/constants"));
function get(key) {
    let obj = constants_1.default.OBJECT || null;
    if (!obj) {
        constants_1.default.OBJECT = {};
        obj = constants_1.default.OBJECT;
    }
    return obj[key];
}
exports.default = get;
//# sourceMappingURL=get.js.map