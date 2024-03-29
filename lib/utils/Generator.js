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
var ora_1 = __importDefault(require("ora"));
var download_git_repo_1 = __importDefault(require("download-git-repo"));
var path_1 = __importDefault(require("path"));
var chalk_1 = __importDefault(require("chalk"));
var url = {
    react_standard: 'direct:http://gitlab.prod.dtstack.cn/visdev/easyvadmin-monorepo.git',
    react_admin: 'direct:https://github.com/ant-design/ant-design-pro.git',
    react_ssr: 'direct:http://gitlab.prod.dtstack.cn/visdev/easyvadmin-monorepo.git'
};
var Generator = (function () {
    function Generator(type, name) {
        this.name = name;
        this.type = type;
    }
    Generator.prototype.download = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve, reject) {
                            var spinner = (0, ora_1.default)("正在下载模板...");
                            spinner.start();
                            (0, download_git_repo_1.default)(url[_this.type], path_1.default.resolve(process.cwd(), _this.name), { clone: true }, function (error) {
                                if (error) {
                                    spinner.fail("\u6A21\u677F\u4E0B\u8F7D\u51FA\u9519:".concat(error.message));
                                    reject(error);
                                    return;
                                }
                                spinner.succeed('下载完成');
                                console.log();
                                console.log("\u6210\u529F\u521B\u5EFA\u5E94\u7528:".concat(chalk_1.default.blueBright(_this.name)));
                                console.log("".concat(chalk_1.default.blueBright('cd'), " ").concat(_this.name));
                                console.log(chalk_1.default.blueBright("npm run dev"));
                                resolve(true);
                            });
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    return Generator;
}());
exports.default = Generator;
