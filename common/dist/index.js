"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
//signup
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    password: zod_1.z.string().min(6)
});
// signin
exports.signinInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(6)
});
