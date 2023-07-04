import React, { useRef, useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import KamaButton, { KamaButtonColors } from '../button/KamaButton';
function KamaModal(_a) {
    var title = _a.title, subTitle = _a.subTitle, onClose = _a.onClose, footer = _a.footer, _b = _a.bottomSpace, bottomSpace = _b === void 0 ? true : _b, notice = _a.notice, _c = _a.setIsModalVisible, setIsModalVisible = _c === void 0 ? function () {
        return false;
    } : _c, sidebar = _a.sidebar, children = _a.children;
    var ref = useRef(null);
    var _d = useState(false), isClosing = _d[0], setIsClosing = _d[1];
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
    var handleKeyPress = useCallback(function (event) {
        if (event.key === 'Escape') {
            onClose();
        }
    }, []);
    useEffect(function () {
        setIsModalVisible(true);
        return function () {
            setIsModalVisible(false);
        };
    }, []);
    useEffect(function () {
        document.addEventListener('keydown', handleKeyPress);
        return function () {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);
    return (React.createElement("div", { ref: ref, className: classNames('KamaModal', {
            sidebarExpanded: sidebar === 'expanded',
            bottomSpace: bottomSpace,
        }), onClick: handleBackdropClick },
        React.createElement("div", { className: classNames('body', {
                isClosed: 'hideSlide',
            }) },
            React.createElement("div", { className: 'header' },
                React.createElement("div", { className: 'titles' },
                    React.createElement("div", { className: 'title' }, title),
                    React.createElement("div", { className: 'subTitle' }, subTitle))),
            React.createElement("div", { className: 'content' }, children),
            React.createElement("div", { className: 'footer' },
                footer,
                React.createElement(KamaButton, { color: KamaButtonColors[notice ? 'PRIMARY' : 'CANCEL'], onClick: onClose }, notice ? 'متوجه شدم' : 'انصراف')))));
}
export default KamaModal;
