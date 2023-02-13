"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(from, to) {
    return Array(to - from).map((_, i) => from + i);
}
exports.default = range;
