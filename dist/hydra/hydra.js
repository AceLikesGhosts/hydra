"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = __importDefault(require("../util/export"));
const constants_1 = __importDefault(require("../util/constants"));
function hydra(obj) {
    if (obj) {
        constants_1.default._OBJ = obj;
        constants_1.default.OBJECT = new Object(obj);
        return (0, export_1.default)(obj);
    }
    return (0, export_1.default)();
}
exports.default = hydra;
//# sourceMappingURL=hydra.js.map