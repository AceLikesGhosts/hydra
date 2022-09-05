"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../util/constants"));
function apply() {
    const obj = constants_1.default.OBJECT || null;
    if (!obj)
        return;
    constants_1.default._OBJ = obj;
}
exports.default = apply;
//# sourceMappingURL=apply.js.map