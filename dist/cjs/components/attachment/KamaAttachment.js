"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var KamaIcon_1 = tslib_1.__importDefault(require("../icon/KamaIcon"));
function KamaAttachment(_a) {
    var _b, _c, _d;
    var file = _a.file, _e = _a.displayName, displayName = _e === void 0 ? 'name' : _e, fileName = _a.fileName, _f = _a.onDownload, onDownload = _f === void 0 ? function () {
        return false;
    } : _f, _g = _a.onDelete, onDelete = _g === void 0 ? function () {
        return false;
    } : _g;
    var handleDownload = function () {
        onDownload(file);
    };
    var handleDelete = function () {
        onDelete(file);
    };
    var extension = ((_b = file.fileName) === null || _b === void 0 ? void 0 : _b.split('.')[((_c = file.fileName) === null || _c === void 0 ? void 0 : _c.split('.').length) - 1]) || '';
    return (react_1.default.createElement("div", { className: 'KamaAttachment' },
        react_1.default.createElement("div", { className: 'fileName', onClick: handleDownload }, (_d = fileName !== null && fileName !== void 0 ? fileName : file[displayName]) !== null && _d !== void 0 ? _d : 'فایل',
            ".",
            extension),
        react_1.default.createElement("div", { className: 'action', onClick: handleDelete },
            react_1.default.createElement(KamaIcon_1.default, { icon: 'delete' }))));
}
exports.default = KamaAttachment;
