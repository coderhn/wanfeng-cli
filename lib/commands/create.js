"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var Generator_1 = __importDefault(require("../utils/Generator"));
var create = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, react_standard, _b, react_ssr, _c, react_admin, force, name_1, generator_1, name_2, generator_2, name, generator;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = options.react_standard, react_standard = _a === void 0 ? 'demo' : _a, _b = options.react_ssr, react_ssr = _b === void 0 ? 'demo' : _b, _c = options.react_admin, react_admin = _c === void 0 ? 'demo' : _c, force = options.force;
                if (!react_standard) return [3, 3];
                name_1 = typeof react_standard === "boolean" ? "demo" : react_standard;
                return [4, (0, utils_1.dirProcess)(name_1, force)];
            case 1:
                _d.sent();
                generator_1 = new Generator_1.default('react_standard', name_1);
                return [4, generator_1.download()];
            case 2:
                _d.sent();
                return [2];
            case 3:
                if (!react_ssr) return [3, 6];
                name_2 = typeof react_ssr === "boolean" ? "demo" : react_ssr;
                return [4, (0, utils_1.dirProcess)(name_2, force)];
            case 4:
                _d.sent();
                generator_2 = new Generator_1.default('react_ssr', name_2);
                return [4, generator_2.download()];
            case 5:
                _d.sent();
                return [2];
            case 6:
                name = typeof react_admin === "boolean" ? "demo" : react_admin;
                return [4, (0, utils_1.dirProcess)(name, force)];
            case 7:
                _d.sent();
                generator = new Generator_1.default('react_admin', name);
                return [4, generator.download()];
            case 8:
                _d.sent();
                return [2];
        }
    });
}); };
exports.default = create;
