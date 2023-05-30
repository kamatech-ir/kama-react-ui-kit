"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var KamaInput_1 = tslib_1.__importDefault(require("../input/KamaInput"));
var chevron_down_svg_1 = tslib_1.__importDefault(require("../../../assets/images/icons/chevron-down.svg"));
function KamaSelect(_a) {
    var _b;
    var label = _a.label, _c = _a.containerClassName, containerClassName = _c === void 0 ? '' : _c, className = _a.className, _d = _a.searchable, searchable = _d === void 0 ? false : _d, _e = _a.options, options = _e === void 0 ? [] : _e, filterBy = _a.filterBy, displayProcess = _a.displayProcess, _f = _a.displayName, displayName = _f === void 0 ? 'name' : _f, _g = _a.uniqueId, uniqueId = _g === void 0 ? 'id' : _g, icon = _a.icon, value = _a.value, _h = _a.onChange, onChange = _h === void 0 ? function () {
        return false;
    } : _h, error = _a.error, disabled = _a.disabled;
    var selectRef = (0, react_1.useRef)(null);
    var _j = (0, react_1.useState)(false), isOpen = _j[0], setIsOpen = _j[1];
    var _k = (0, react_1.useState)(false), isCollapsing = _k[0], setIsCollapsing = _k[1];
    var _l = (0, react_1.useState)(''), search = _l[0], setSearch = _l[1];
    // close select on click outside of it
    (0, react_1.useEffect)(function () {
        function close(event) {
            if (selectRef.current &&
                event.target !== selectRef.current.querySelector('.select') &&
                event.target !== selectRef.current.querySelector('label') &&
                event.target !== selectRef.current.querySelector('.actions') &&
                event.target !== selectRef.current.querySelector('.actions img') &&
                event.target !== selectRef.current.querySelector('.selected') &&
                event.target !== selectRef.current.querySelector('ul input') &&
                event.target !== selectRef.current.querySelector('ul label span')) {
                setIsOpen(function (prevValue) {
                    if (prevValue) {
                        setIsCollapsing(true);
                    }
                    return false;
                });
            }
        }
        window.addEventListener('click', close, false);
        return function () {
            window.removeEventListener('click', close, false);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (isCollapsing) {
            setTimeout(function () {
                setIsCollapsing(false);
            }, 200);
        }
    }, [isCollapsing]);
    function handleToggle(event) {
        var _a, _b;
        if (event.target === ((_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('ul input')) ||
            event.target === ((_b = selectRef.current) === null || _b === void 0 ? void 0 : _b.querySelector('ul label span')) ||
            disabled) {
            return;
        }
        setIsCollapsing(true);
        setIsOpen(!isOpen);
    }
    function handleSearchChange(event) {
        setSearch(event.target.value);
    }
    function filterOptions(option) {
        var optionDisplayValue = (displayProcess ? displayProcess(option) : (Object.keys(option).length ? option[displayName] : option) || '')
            .toString()
            .toLowerCase();
        return optionDisplayValue.includes(search);
    }
    function handleOptionClick(selected) {
        onChange(selected);
    }
    var filteredOptions = options.filter(function (option) {
        return filterBy ? filterBy(option, search) : filterOptions(option);
    });
    var selectedOption = options.filter(function (option) {
        function getValue(input) {
            return Object.keys(input || {}).length ? input[uniqueId] : input;
        }
        return value === getValue(option) || getValue(value) === getValue(option);
    })[0];
    var selectedValue = selectedOption
        ? displayProcess
            ? displayProcess(selectedOption)
            : (Object.keys(selectedOption).length ? selectedOption[displayName] : selectedOption) || ''
        : null;
    return (react_1.default.createElement("div", { tabIndex: 0, ref: selectRef, className: (0, classnames_1.default)('KamaSelect', (_b = {},
            _b[containerClassName] = containerClassName,
            _b.open = isOpen,
            _b.filled = selectedValue,
            _b.isCollapsing = isCollapsing,
            _b.error = error,
            _b.disabled = disabled,
            _b)), onClick: handleToggle, "data-error": error },
        react_1.default.createElement("label", null, label),
        react_1.default.createElement("div", { className: (0, classnames_1.default)('select', { className: className }) },
            react_1.default.createElement("span", { className: 'selected' },
                icon && selectedValue ? react_1.default.createElement("img", { src: selectedOption[icon], alt: selectedValue }) : null,
                selectedValue || isOpen ? selectedValue : ''),
            react_1.default.createElement("div", { className: 'actions' },
                react_1.default.createElement("div", { className: 'action' },
                    react_1.default.createElement("img", { src: chevron_down_svg_1.default, className: (0, classnames_1.default)({ open: isOpen }), alt: '\u0628\u0627\u0632 \u0648 \u0628\u0633\u062A\u0647 \u06A9\u0631\u062F\u0646' }))),
            react_1.default.createElement("ul", { className: (0, classnames_1.default)({ empty: !(options && options.length) }) },
                searchable && (filteredOptions.length || search) ? (react_1.default.createElement("div", { className: 'searchContainer' },
                    react_1.default.createElement(KamaInput_1.default, { label: '\u062C\u0633\u062A\u062C\u0648...', value: search, onChange: handleSearchChange, autoFocus: true }))) : null,
                filteredOptions.length ? (react_1.default.createElement(react_1.default.Fragment, null, filteredOptions.map(function (option, index) {
                    var displayValue = displayProcess
                        ? displayProcess(option)
                        : (Object.keys(option).length ? option[displayName] : option) || '';
                    return (react_1.default.createElement("li", { key: index, onClick: function () {
                            handleOptionClick(option);
                        } },
                        icon ? react_1.default.createElement("img", { src: option[icon], alt: displayValue }) : null,
                        react_1.default.createElement("span", null, displayValue)));
                }))) : (react_1.default.createElement("li", { className: 'emptyText' }, "\u0645\u0648\u0631\u062F\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F"))))));
}
exports.default = KamaSelect;
//# sourceMappingURL=KamaSelect.js.map