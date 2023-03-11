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
var inquirer_1 = __importDefault(require("inquirer"));
var chalk_1 = __importDefault(require("chalk"));
var validate_npm_package_name_1 = __importDefault(require("validate-npm-package-name"));
var create_1 = __importDefault(require("./create"));
var utils_1 = require("../utils");
var init = function (strategy, options) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, name, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (Object.keys(options).length) {
                    (0, create_1.default)(options);
                    return [2];
                }
                return [4, inquirer_1.default.prompt([
                        {
                            name: "type",
                            type: "list",
                            message: "请选择项目类型:",
                            choices: [
                                {
                                    name: "spa-react (React单页应用)",
                                    value: "react_standard",
                                },
                                {
                                    name: "ssr-react (React服务端渲染应用)",
                                    value: 'react_ssr',
                                },
                                {
                                    name: "react-admin (React后台管理应用)",
                                    value: 'react_admin',
                                },
                            ],
                        },
                        {
                            type: "input",
                            name: "name",
                            message: "请输入项目名称:",
                            validate: function (input) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var isExisted, validateRes, isValidName;
                                    return __generator(this, function (_a) {
                                        isExisted = (0, utils_1.isExistedDir)(input);
                                        validateRes = (0, validate_npm_package_name_1.default)(input);
                                        isValidName = !Object.values(validateRes).some(function (d) { return d === false; });
                                        if (isValidName && !isExisted)
                                            return [2, true];
                                        return [2, isExisted
                                                ? "\u6587\u4EF6\u5939\uFF1A\"".concat(input, "\"\u5DF2\u7ECF\u5B58\u5728 (\"").concat(input, "\" \u6587\u4EF6\u5939\u5DF2\u7ECF\u5B58\u5728)")
                                                : chalk_1.default.hex('#FFA500')("包名不符合npm规范 (请重新输入项目名称)")];
                                    });
                                });
                            },
                        }
                    ])];
            case 1:
                _a = _c.sent(), type = _a.type, name = _a.name;
                if (!type) {
                    return [2];
                }
                _b = type;
                switch (_b) {
                    case 'react_standard': return [3, 2];
                    case "react_ssr": return [3, 4];
                }
                return [3, 6];
            case 2: return [4, (0, create_1.default)({ react_standard: name })];
            case 3:
                _c.sent();
                return [3, 8];
            case 4: return [4, (0, create_1.default)({ react_ssr: name })];
            case 5:
                _c.sent();
                return [3, 8];
            case 6: return [4, (0, create_1.default)({ react_admin: name })];
            case 7:
                _c.sent();
                return [3, 8];
            case 8: return [2];
        }
    });
}); };
exports.default = init;
