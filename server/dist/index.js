"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 4000;
const server = app_1.default.listen(PORT, () => console.info(`Server running on port ${PORT}`));
exports.default = server;
//# sourceMappingURL=index.js.map