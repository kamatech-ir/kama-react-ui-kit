"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var blank_file_svg_1 = tslib_1.__importDefault(require("../../../assets/images/blank-file.svg"));
function KamaUploader(_a) {
    var _b = _a.title, title = _b === void 0 ? 'آپلود فایل' : _b, _c = _a.description, description = _c === void 0 ? 'لطفا فایل خود را در این محدوده درگ کنید' : _c, _d = _a.icon, icon = _d === void 0 ? blank_file_svg_1.default : _d, disabled = _a.disabled, props = tslib_1.__rest(_a, ["title", "description", "icon", "disabled"]);
    var inputRef = (0, react_1.useRef)(null);
    var handleBrowseFile = function () {
        var _a;
        if (disabled) {
            return;
        }
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleDragEnter = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    var handleDragOver = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    var handleDrop = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (disabled) {
            return;
        }
        var files = event.dataTransfer.files;
        if (files.length && props.onChange) {
            props.onChange({ target: { files: files } });
        }
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)('KamaUploader', { disabled: disabled }), onClick: handleBrowseFile, onDragEnter: handleDragEnter, onDragOver: handleDragOver, onDrop: handleDrop },
        react_1.default.createElement("input", tslib_1.__assign({ type: 'file', ref: inputRef }, props)),
        react_1.default.createElement("div", { className: 'wrapper' },
            react_1.default.createElement("div", { className: 'icon' },
                react_1.default.createElement("img", { src: icon, alt: '\u0641\u0627\u06CC\u0644' })),
            react_1.default.createElement("div", { className: 'content' },
                react_1.default.createElement("div", { className: 'title' }, title),
                react_1.default.createElement("div", { className: 'description' }, description)))));
}
exports.default = KamaUploader;
//# sourceMappingURL=KamaUploader.js.map