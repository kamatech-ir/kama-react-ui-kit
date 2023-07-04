"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var tools_1 = tslib_1.__importDefault(require("../../utils/tools"));
var KamaInput_1 = tslib_1.__importDefault(require("../input/KamaInput"));
var chevron_left_svg_1 = tslib_1.__importDefault(require("../../../assets/images/icons/fa/chevron-left.svg"));
var chevron_double_left_svg_1 = tslib_1.__importDefault(require("../../../assets/images/icons/fa/chevron-double-left.svg"));
var xmark_svg_1 = tslib_1.__importDefault(require("../../../assets/images/icons/xmark.svg"));
var MONTH_NAMES = {
    1: 'فروردین',
    2: 'اردیبهشت',
    3: 'خرداد',
    4: 'تیر',
    5: 'مرداد',
    6: 'شهریور',
    7: 'مهر',
    8: 'آبان',
    9: 'آذر',
    10: 'دی',
    11: 'بهمن',
    12: 'اسفند',
};
var id = tools_1.default.uuid();
function KamaDatepicker(_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, _b = _a.preventFuture, preventFuture = _b === void 0 ? true : _b, error = _a.error;
    var today = tools_1.default.convert.toEnglishNumbers(new Date().toLocaleDateString('fa-IR'));
    var ref = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(parseInt(today.split('/')[0])), year = _c[0], setYear = _c[1];
    var _d = (0, react_1.useState)(parseInt(today.split('/')[1])), month = _d[0], setMonth = _d[1];
    var _e = (0, react_1.useState)(null), selectedDay = _e[0], setSelectedDay = _e[1];
    var _f = (0, react_1.useState)([]), days = _f[0], setDays = _f[1];
    var _g = (0, react_1.useState)(false), isOpen = _g[0], setIsOpen = _g[1];
    // initialize calendar
    (0, react_1.useEffect)(function () {
        setDays(calculateDays(tools_1.default.date.getNumberOfDaysInMonth(year, month), tools_1.default.date.getFirstDayOfMonth(year, month) + 1));
    }, [year, month]);
    // handle click outside calendar
    (0, react_1.useEffect)(function () {
        function handleClick(event) {
            if (event.target.closest("#dp-".concat(id)) === null) {
                setIsOpen(false);
            }
        }
        if (isOpen) {
            window.addEventListener('click', handleClick, false);
        }
        else {
            window.removeEventListener('click', handleClick, false);
        }
        return function () {
            window.removeEventListener('click', handleClick, false);
        };
    }, [isOpen]);
    (0, react_1.useEffect)(function () {
        if (selectedDay) {
            handleSubmit();
        }
    }, [selectedDay]);
    function calculateDays(numberOfDays, dayOfWeekJ) {
        var days = [];
        for (var i = 0; i < numberOfDays + dayOfWeekJ - 1; i++) {
            // create week array
            if (i % 7 === 0) {
                days[i / 7] = [];
            }
            // push to first day of month in the first week
            if (i < dayOfWeekJ - 1) {
                days[days.length - 1][i % 7] = null;
                continue;
            }
            // fill week array
            days[days.length - 1][i % 7] = i + 2 - dayOfWeekJ;
        }
        return days;
    }
    function handleMonthChange(event) {
        setMonth(parseInt(event.target.value));
    }
    function handleYearChange(event) {
        setYear(parseInt(event.target.value));
    }
    function handleDayClick(day) {
        if (day) {
            setSelectedDay(day);
        }
    }
    function handleNextMonthClick() {
        if (month < 12) {
            setSelectedDay(null);
            setMonth(month + 1);
        }
        else if (year !== parseInt(today.split('/')[0])) {
            setSelectedDay(null);
            setMonth(1);
            setYear(year + 1);
        }
    }
    function handleNextYearClick() {
        if (year !== parseInt(today.split('/')[0])) {
            setSelectedDay(null);
            setYear(year + 1);
        }
    }
    function handlePreviousMonthClick() {
        if (month > 1) {
            setSelectedDay(null);
            setMonth(month - 1);
        }
        else if (year !== parseInt(today.split('/')[0]) - 99) {
            setSelectedDay(null);
            setMonth(12);
            setYear(year - 1);
        }
    }
    function handlePreviousYearClick() {
        if (year !== parseInt(today.split('/')[0]) - 99) {
            setSelectedDay(null);
            setYear(year - 1);
        }
    }
    function handleSubmit() {
        if (selectedDay && onChange) {
            onChange(tools_1.default.convert.toGregorian(year.toString(), month.toString(), selectedDay.toString()));
            setIsOpen(false);
        }
    }
    return (react_1.default.createElement("div", { ref: ref, tabIndex: 0, className: (0, classnames_1.default)('KamaDatepicker', { hide: !isOpen }), id: "dp-".concat(id) },
        react_1.default.createElement(KamaInput_1.default, { label: label, onFocus: function () {
                setIsOpen(true);
            }, value: value, error: error, readOnly: true }),
        value ? (react_1.default.createElement("img", { className: 'clear', src: xmark_svg_1.default, onClick: function () {
                onChange('');
            }, alt: '\u062D\u0630\u0641 \u062A\u0627\u0631\u06CC\u062E' })) : null,
        react_1.default.createElement("div", { className: 'wrapper' },
            react_1.default.createElement("div", { className: 'calendar' },
                react_1.default.createElement("div", { className: 'header' },
                    react_1.default.createElement("div", { className: (0, classnames_1.default)('button', 'previous'), onClick: handlePreviousYearClick },
                        react_1.default.createElement("img", { src: chevron_double_left_svg_1.default, alt: '\u0633\u0627\u0644 \u0642\u0628\u0644\u06CC' })),
                    react_1.default.createElement("div", { className: (0, classnames_1.default)('button', 'previous'), onClick: handlePreviousMonthClick },
                        react_1.default.createElement("img", { src: chevron_left_svg_1.default, alt: '\u0645\u0627\u0647 \u0642\u0628\u0644\u06CC' })),
                    react_1.default.createElement("div", { className: 'select' },
                        react_1.default.createElement("select", { value: month, onChange: handleMonthChange }, Object.keys(MONTH_NAMES).map(function (key, index) {
                            return (react_1.default.createElement("option", { key: index, value: key }, MONTH_NAMES[key]));
                        }))),
                    react_1.default.createElement("div", { className: 'select' },
                        react_1.default.createElement("select", { value: year, onChange: handleYearChange }, tslib_1.__spreadArray([], Array(100), true).map(function (_, i) {
                            return (react_1.default.createElement("option", { key: i, value: parseInt(today.split('/')[0]) - i }, parseInt(today.split('/')[0]) - i));
                        }))),
                    react_1.default.createElement("div", { className: 'button', onClick: handleNextMonthClick },
                        react_1.default.createElement("img", { src: chevron_left_svg_1.default, alt: '\u0645\u0627\u0647 \u0628\u0639\u062F\u06CC' })),
                    react_1.default.createElement("div", { className: 'button', onClick: handleNextYearClick },
                        react_1.default.createElement("img", { src: chevron_double_left_svg_1.default, alt: '\u0633\u0627\u0644 \u0628\u0639\u062F\u06CC' }))),
                react_1.default.createElement("div", { className: 'body' },
                    react_1.default.createElement("table", null,
                        react_1.default.createElement("thead", null,
                            react_1.default.createElement("tr", null,
                                react_1.default.createElement("th", null, "\u0634"),
                                react_1.default.createElement("th", null, "\u06CC"),
                                react_1.default.createElement("th", null, "\u062F"),
                                react_1.default.createElement("th", null, "\u0633"),
                                react_1.default.createElement("th", null, "\u0686"),
                                react_1.default.createElement("th", null, "\u067E"),
                                react_1.default.createElement("th", null, "\u062C"))),
                        react_1.default.createElement("tbody", null, days.map(function (week, weekIndex) {
                            return (react_1.default.createElement("tr", { key: weekIndex }, week.map(function (day, dayIndex) {
                                // change to check year and month first
                                // trycatch for convert error on end of the year overflow
                                var isFuture = false;
                                try {
                                    isFuture = !!(day &&
                                        tools_1.default.convert
                                            .toGregorian(today.split('/')[0], today.split('/')[1], today.split('/')[2])
                                            .getTime() <
                                            tools_1.default.convert
                                                .toGregorian(year.toString(), month.toString(), (day === null || day === void 0 ? void 0 : day.toString()) || '')
                                                .getTime());
                                }
                                catch (error) {
                                    console.log('Invalid date!');
                                }
                                return (react_1.default.createElement("td", { key: dayIndex, className: (0, classnames_1.default)({
                                        active: day && day === selectedDay,
                                        disabled: preventFuture && isFuture,
                                        empty: !day,
                                        today: year === parseInt(today.split('/')[0]) &&
                                            month === parseInt(today.split('/')[1]) &&
                                            day === parseInt(today.split('/')[2]),
                                    }), onClick: function () {
                                        if (!preventFuture || !isFuture) {
                                            handleDayClick(day);
                                        }
                                    } }, day ? day : ''));
                            })));
                        }))))))));
}
exports.default = KamaDatepicker;
