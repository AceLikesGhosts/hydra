"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = __importDefault(require("../util/export"));
const constants_1 = __importDefault(require("../util/constants"));
function create() {
    if (constants_1.default.OBJECT !== null || constants_1.default._OBJ !== null)
        throw new Error('Cannot create a new object, because an object already exists.');
    const obj = new Object();
    constants_1.default._OBJ = obj;
    constants_1.default.OBJECT = new Object(obj);
    return (0, export_1.default)(obj);
}
exports.default = create;
//# sourceMappingURL=create.js.map