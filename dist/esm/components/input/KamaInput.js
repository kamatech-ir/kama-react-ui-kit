import { __assign, __rest } from "tslib";
import React, { useRef } from 'react';
import classNames from 'classnames';
import KamaIcon from '../icon/KamaIcon';
import tools from '../../utils/tools';
export var KamaInputTypes;
(function (KamaInputTypes) {
    KamaInputTypes[KamaInputTypes["INPUT"] = 0] = "INPUT";
    KamaInputTypes[KamaInputTypes["TEXTAREA"] = 1] = "TEXTAREA";
})(KamaInputTypes || (KamaInputTypes = {}));
function KamaInput(_a) {
    var as = _a.as, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.placeholder, placeholder = _c === void 0 ? ' ' : _c, money = _a.money, iban = _a.iban, bankCard = _a.bankCard, label = _a.label, icon = _a.icon, prevent = _a.prevent, error = _a.error, ltr = _a.ltr, compact = _a.compact, indicator = _a.indicator, onChange = _a.onChange, rest = __rest(_a, ["as", "className", "placeholder", "money", "iban", "bankCard", "label", "icon", "prevent", "error", "ltr", "compact", "indicator", "onChange"]);
    var containerRef = useRef(null);
    var inputRef = useRef(null);
    function handlePrevent(event) {
        var input = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        // global exceptions
        // 13: enter key
        // only 13 has issues w/ firefox 64 and earlier
        if ([9, 13, 16, 17, 18, 27, 123].indexOf(event.which) !== -1 ||
            [9, 13, 16, 17, 18, 27, 123].indexOf(event.keyCode) !== -1)
            return;
        switch (prevent) {
            case 'number':
                if (/[0-9]/.test(input)) {
                    event.preventDefault();
                    // alert('در این فیلد مجاز به ورود اعداد نیستید');
                }
                break;
            case 'letter':
                if (!/[0-9]/.test(input) && input !== '.') {
                    event.preventDefault();
                    // alert('در این فیلد فقط مجاز به ورود اعداد هستید');
                }
                break;
            case '!persian':
                if (!/[\u0600-\u06FF ]/.test(input) || /[،؛؟]/.test(input)) {
                    event.preventDefault();
                    // alert('در این فیلد فقط مجاز به ورود حروف فارسی هستید');
                }
                break;
            case 'persian':
                if (/[\u0600-\u06FF ]/.test(input) || /[،؛؟]/.test(input)) {
                    event.preventDefault();
                    // alert('در این فیلد مجاز به ورود حروف فارسی نیستید');
                }
                break;
            default:
                if (prevent) {
                    var isNot = prevent[0] === '!' ? true : false;
                    var pattern = isNot ? prevent.substring(1, prevent.length) : prevent;
                    var patternRegex = new RegExp(pattern);
                    if ((!isNot && patternRegex.test(input)) || (isNot && !patternRegex.test(input))) {
                        event.preventDefault();
                        // alert('کاراکتر وارد شده غیرمجاز است');
                    }
                }
                break;
        }
    }
    function handleKeyDown(event) {
        var _a, _b;
        // handle complex backspace
        if (event.keyCode === 8) {
            if (bankCard && ((_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.value[inputRef.current.value.length - 1]) === '-') {
                inputRef.current.value = inputRef.current.value.substring(0, inputRef.current.value.length - 1);
            }
            if (iban && ((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.value[inputRef.current.value.length - 1]) === ' ') {
                inputRef.current.value = inputRef.current.value.substring(0, inputRef.current.value.length - 1);
            }
        }
    }
    function addCommas(input) {
        return {
            target: {
                value: input
                    ? "".concat(parseInt(input.split('.')[0]).toLocaleString()).concat(input.includes('.') ? '.' : '').concat(input.split('.')[1] ? input.split('.')[1] : '')
                    : '',
            },
        };
    }
    function formatIban(input) {
        var ibanArray = (input || '')
            .replace(/.{2}/, function (a) {
            return a + ' ';
        })
            .split(' ');
        var iban = ibanArray.length === 1
            ? "IR ".concat(ibanArray[0])
            : "IR ".concat(ibanArray[0], " ").concat(ibanArray[1].replace(/.{4}/g, function (a) {
                return a + ' ';
            }));
        return iban.length === 34 ? iban.substring(0, 33) : iban;
    }
    function formatBankCard(input) {
        var card = (input || '').replace(/.{4}/g, function (a) {
            return a + '-';
        });
        return card.length === 20 ? card.substring(0, 19) : card;
    }
    function handleChange(event) {
        if (money) {
            event.target.value = addCommas(tools.removeNonNumeric(event.target.value)).target.value;
        }
        if (iban) {
            event.target.value = formatIban(tools.removeNonNumeric(event.target.value));
        }
        if (bankCard) {
            event.target.value = formatBankCard(tools.removeNonNumeric(event.target.value));
        }
        if (onChange) {
            onChange(event);
        }
    }
    function handleTextareaChange(event) {
        if (onChange) {
            onChange(event);
        }
    }
    return (React.createElement("div", { ref: containerRef, className: classNames('KamaInput', className, {
            compact: compact,
            error: error,
            hasIcon: icon,
        }), "data-error": error },
        React.createElement("label", null,
            !as || as === KamaInputTypes.INPUT ? (React.createElement("input", __assign({}, rest, { ref: inputRef, placeholder: placeholder, className: "".concat(ltr ? 'ltr' : ''), onKeyPress: (handlePrevent), onKeyDown: (handleKeyDown), onChange: handleChange }))) : (React.createElement("textarea", __assign({}, rest, { rows: 3, placeholder: placeholder, className: "".concat(ltr ? 'ltr' : ''), onKeyPress: (handlePrevent), onKeyDown: (handleKeyDown), onChange: handleTextareaChange }))),
            label ? React.createElement("span", null, label) : null,
            icon ? React.createElement(KamaIcon, { className: 'icon', icon: icon }) : null,
            indicator ? React.createElement("div", { className: 'indicator' }, indicator) : null)));
}
export default KamaInput;
//# sourceMappingURL=KamaInput.js.map