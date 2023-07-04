"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var KamaButton_1 = tslib_1.__importStar(require("../button/KamaButton"));
function KamaModal(_a) {
    var title = _a.title, subTitle = _a.subTitle, onClose = _a.onClose, footer = _a.footer, _b = _a.bottomSpace, bottomSpace = _b === void 0 ? true : _b, notice = _a.notice, _c = _a.setIsModalVisible, setIsModalVisible = _c === void 0 ? function () {
        return false;
    } : _c, sidebar = _a.sidebar, children = _a.children;
    var ref = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(false), isClosing = _d[0], setIsClosing = _d[1];
    var closeHandler = function () {
        if (isClosing) {
            return;
        }
        setIsClosing(true);
        setTimeout(function () {
            setIsClosing(false);
            onClose();
        }, 400);
    };
    var handleBackdropClick = function (event) {
        if (event.target === ref.current) {
            closeHandler();
        }
    };
    var handleKeyPress = (0, react_1.useCallback)(function (event) {
        if (event.key === 'Escape') {
            onClose();
        }
    }, []);
    (0, react_1.useEffect)(function () {
        setIsModalVisible(true);
        return function () {
            setIsModalVisible(false);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        document.addEventListener('keydown', handleKeyPress);
        return function () {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);
    return (react_1.default.createElement("div", { ref: ref, className: (0, classnames_1.default)('KamaModal', {
            sidebarExpanded: sidebar === 'expanded',
            bottomSpace: bottomSpace,
        }), onClick: handleBackdropClick },
        react_1.default.createElement("div", { className: (0, classnames_1.default)('body', {
                isClosed: 'hideSlide',
            }) },
            react_1.default.createElement("div", { className: 'header' },
                react_1.default.createElement("div", { className: 'titles' },
                    react_1.default.createElement("div", { className: 'title' }, title),
                    react_1.default.createElement("div", { className: 'subTitle' }, subTitle))),
            react_1.default.createElement("div", { className: 'content' }, children),
            react_1.default.createElement("div", { className: 'footer' },
                footer,
                react_1.default.createElement(KamaButton_1.default, { color: KamaButton_1.KamaButtonColors[notice ? 'PRIMARY' : 'CANCEL'], onClick: onClose }, notice ? 'متوجه شدم' : 'انصراف')))));
}
exports.default = KamaModal;
