"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callback_1 = __importDefault(require("./callback"));
const apply_1 = __importDefault(require("../object/apply"));
const set_1 = __importDefault(require("../object/set"));
const value_1 = __importDefault(require("../object/value"));
const get_1 = __importDefault(require("../object/get"));
const create_1 = __importDefault(require("../object/create"));
const constants_1 = __importDefault(require("./constants"));
function exportObject(obj) {
    if (obj) {
        const exportObj = constants_1.default.OBJECT;
        if (exportObj)
            return {
                value: value_1.default,
                set: set_1.default,
                get: get_1.default,
                apply: apply_1.default,
                callback: callback_1.default
            };
    }
    return {
        callback: callback_1.default,
        create: create_1.default
    };
}
exports.default = exportObject;
//# sourceMappingURL=export.js.map