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
Object.defineProperty(exports, "__esModule", { value: true });
const ethereumjs_util_1 = require("ethereumjs-util");
function personalSign(message, privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageHash = (0, ethereumjs_util_1.keccakFromString)(`\x19Ethereum Signed Message:\n${message.length}${message}`, 256);
        const signature = (0, ethereumjs_util_1.ecsign)(messageHash, privateKey);
        return Buffer.from((0, ethereumjs_util_1.toRpcSig)(signature.v, signature.r, signature.s).slice(2), 'hex');
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = Buffer.from('Hello World!', 'utf8');
        const secretKey = Buffer.from('43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05b429', 'hex');
        const signature = yield personalSign(message, secretKey);
        console.log(`Signature: 0x${signature.toString('hex')}`);
        console.log(`Signature(base64): ${signature.toString('base64')}`);
    });
}
main();
//# sourceMappingURL=index.js.map