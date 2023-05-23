"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeNonNumeric = function (value) {
    return (value || '').toString().replace(/[^0-9.]/g, '');
};
exports.default = {
    removeNonNumeric: removeNonNumeric,
};
//# sourceMappingURL=tools.js.map