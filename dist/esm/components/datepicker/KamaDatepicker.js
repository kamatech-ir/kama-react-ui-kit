import { __spreadArray } from "tslib";
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import tools from '../../utils/tools';
import KamaInput from '../input/KamaInput';
import ChevronLeftSolidSVG from '../../../assets/images/icons/fa/chevron-left.svg';
import ChevronDoubleLeftSolidSVG from '../../../assets/images/icons/fa/chevron-double-left.svg';
import CloseSVG from '../../../assets/images/icons/xmark.svg';
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
var id = tools.uuid();
function KamaDatepicker(_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, _b = _a.preventFuture, preventFuture = _b === void 0 ? true : _b, error = _a.error;
    var today = tools.convert.toEnglishNumbers(new Date().toLocaleDateString('fa-IR'));
    var ref = useRef(null);
    var _c = useState(parseInt(today.split('/')[0])), year = _c[0], setYear = _c[1];
    var _d = useState(parseInt(today.split('/')[1])), month = _d[0], setMonth = _d[1];
    var _e = useState(null), selectedDay = _e[0], setSelectedDay = _e[1];
    var _f = useState([]), days = _f[0], setDays = _f[1];
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    // initialize calendar
    useEffect(function () {
        setDays(calculateDays(tools.date.getNumberOfDaysInMonth(year, month), tools.date.getFirstDayOfMonth(year, month) + 1));
    }, [year, month]);
    // handle click outside calendar
    useEffect(function () {
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
    useEffect(function () {
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
            onChange(tools.convert.toGregorian(year.toString(), month.toString(), selectedDay.toString()));
            setIsOpen(false);
        }
    }
    return (React.createElement("div", { ref: ref, tabIndex: 0, className: classNames('KamaDatepicker', { hide: !isOpen }), id: "dp-".concat(id) },
        React.createElement(KamaInput, { label: label, onFocus: function () {
                setIsOpen(true);
            }, value: value, error: error, readOnly: true }),
        value ? (React.createElement("img", { className: 'clear', src: CloseSVG, onClick: function () {
                onChange('');
            }, alt: '\u062D\u0630\u0641 \u062A\u0627\u0631\u06CC\u062E' })) : null,
        React.createElement("div", { className: 'wrapper' },
            React.createElement("div", { className: 'calendar' },
                React.createElement("div", { className: 'header' },
                    React.createElement("div", { className: classNames('button', 'previous'), onClick: handlePreviousYearClick },
                        React.createElement("img", { src: ChevronDoubleLeftSolidSVG, alt: '\u0633\u0627\u0644 \u0642\u0628\u0644\u06CC' })),
                    React.createElement("div", { className: classNames('button', 'previous'), onClick: handlePreviousMonthClick },
                        React.createElement("img", { src: ChevronLeftSolidSVG, alt: '\u0645\u0627\u0647 \u0642\u0628\u0644\u06CC' })),
                    React.createElement("div", { className: 'select' },
                        React.createElement("select", { value: month, onChange: handleMonthChange }, Object.keys(MONTH_NAMES).map(function (key, index) {
                            return (React.createElement("option", { key: index, value: key }, MONTH_NAMES[key]));
                        }))),
                    React.createElement("div", { className: 'select' },
                        React.createElement("select", { value: year, onChange: handleYearChange }, __spreadArray([], Array(100), true).map(function (_, i) {
                            return (React.createElement("option", { key: i, value: parseInt(today.split('/')[0]) - i }, parseInt(today.split('/')[0]) - i));
                        }))),
                    React.createElement("div", { className: 'button', onClick: handleNextMonthClick },
                        React.createElement("img", { src: ChevronLeftSolidSVG, alt: '\u0645\u0627\u0647 \u0628\u0639\u062F\u06CC' })),
                    React.createElement("div", { className: 'button', onClick: handleNextYearClick },
                        React.createElement("img", { src: ChevronDoubleLeftSolidSVG, alt: '\u0633\u0627\u0644 \u0628\u0639\u062F\u06CC' }))),
                React.createElement("div", { className: 'body' },
                    React.createElement("table", null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", null, "\u0634"),
                                React.createElement("th", null, "\u06CC"),
                                React.createElement("th", null, "\u062F"),
                                React.createElement("th", null, "\u0633"),
                                React.createElement("th", null, "\u0686"),
                                React.createElement("th", null, "\u067E"),
                                React.createElement("th", null, "\u062C"))),
                        React.createElement("tbody", null, days.map(function (week, weekIndex) {
                            return (React.createElement("tr", { key: weekIndex }, week.map(function (day, dayIndex) {
                                // change to check year and month first
                                // trycatch for convert error on end of the year overflow
                                var isFuture = false;
                                try {
                                    isFuture = !!(day &&
                                        tools.convert
                                            .toGregorian(today.split('/')[0], today.split('/')[1], today.split('/')[2])
                                            .getTime() <
                                            tools.convert
                                                .toGregorian(year.toString(), month.toString(), (day === null || day === void 0 ? void 0 : day.toString()) || '')
                                                .getTime());
                                }
                                catch (error) {
                                    console.log('Invalid date!');
                                }
                                return (React.createElement("td", { key: dayIndex, className: classNames({
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
export default KamaDatepicker;
//# sourceMappingURL=KamaDatepicker.js.map