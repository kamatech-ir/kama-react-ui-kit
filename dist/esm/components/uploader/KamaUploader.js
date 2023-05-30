import { __assign, __rest } from "tslib";
import React, { useRef } from 'react';
import classNames from 'classnames';
import RectangleSVG from '../../../assets/images/rectangle.svg';
function KamaUploader(_a) {
    var _b = _a.title, title = _b === void 0 ? 'آپلود فایل' : _b, _c = _a.description, description = _c === void 0 ? 'لطفا فایل خود را در این محدوده درگ کنید' : _c, _d = _a.icon, icon = _d === void 0 ? RectangleSVG : _d, disabled = _a.disabled, props = __rest(_a, ["title", "description", "icon", "disabled"]);
    var inputRef = useRef(null);
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
    return (React.createElement("div", { className: classNames('KamaUploader', { disabled: disabled }), onClick: handleBrowseFile, onDragEnter: handleDragEnter, onDragOver: handleDragOver, onDrop: handleDrop },
        React.createElement("input", __assign({ type: 'file', ref: inputRef }, props)),
        React.createElement("div", { className: 'wrapper' },
            React.createElement("div", { className: 'icon' },
                React.createElement("img", { src: icon, alt: '\u0641\u0627\u06CC\u0644' })),
            React.createElement("div", { className: 'content' },
                React.createElement("div", { className: 'title' }, title),
                React.createElement("div", { className: 'description' }, description)))));
}
export default KamaUploader;
//# sourceMappingURL=KamaUploader.js.map