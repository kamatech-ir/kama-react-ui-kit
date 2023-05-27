"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var getFirstDayOfMonth = function (year, month) {
    var firstDayOfMonth = toGregorian(year.toString(), month.toString(), '1');
    return getJalaliDayOfWeek(firstDayOfMonth.getDay());
};
var getJalaliDayOfWeek = function (gregorianDayOfWeek) {
    return gregorianDayOfWeek < 6 ? gregorianDayOfWeek + 1 : 0;
};
var getNumberOfDaysInMonth = function (year, month) {
    if (month < 7) {
        return 31;
    }
    else if (month < 12) {
        return 30;
    }
    else {
        if (isLeapYear(year)) {
            return 30;
        }
        else {
            return 29;
        }
    }
};
function isLeapYear(year) {
    var mod;
    if (year > 1243 && year < 1473) {
        mod = year % 33;
        if (mod === 1 || mod === 5 || mod === 9 || mod === 13 || mod === 17 || mod === 22 || mod === 26 || mod === 30) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'unknown';
    }
}
var removeNonNumeric = function (value) {
    return (value || '').toString().replace(/[^0-9.]/g, '');
};
var toEnglishNumbers = function (num, dontTrim) {
    dontTrim = dontTrim || false;
    num = dontTrim ? num.toString() : num.toString().trim();
    var len = num.length;
    var persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    var res = '';
    var pos;
    for (var i = 0; i < len; i++) {
        if (~(pos = persianNumbers.indexOf(num.charAt(i)))) {
            res += pos;
        }
        else {
            res += num.charAt(i);
        }
    }
    return res;
};
// source: https://stackoverflow.com/a/71312168/3161029
var toGregorian = function (y, m, d) {
    var _a;
    var year = parseInt(y);
    var month = parseInt(m);
    var day = parseInt(d);
    var format = new Intl.DateTimeFormat('en-u-ca-persian', {
        dateStyle: 'short',
        timeZone: 'UTC',
    });
    var g = new Date(Date.UTC(2000, month, day));
    g = new Date(g.setUTCDate(g.getUTCDate() + 226867));
    var gY = g.getUTCFullYear() - 2000 + year;
    g = new Date((gY < 0 ? '-' : '+') +
        ('00000' + Math.abs(gY)).slice(-6) +
        '-' +
        ('0' + (g.getUTCMonth() + 1)).slice(-2) +
        '-' +
        ('0' + g.getUTCDate()).slice(-2));
    var _b = tslib_1.__spreadArray([], format.format(g).split('/'), true), pM = _b[0], pD = _b[1], pY = _b[2], i = 0;
    g = new Date(g.setUTCDate(g.getUTCDate() + ~~(year * 365.25 + month * 30.44 + day - (pY.split(' ')[0] * 365.25 + pM * 30.44 + pD * 1)) - 2));
    while (i < 4) {
        _a = tslib_1.__spreadArray([], format.format(g).split('/'), true), pM = _a[0], pD = _a[1], pY = _a[2];
        if (parseInt(pD) === day && parseInt(pM) === month && parseInt(pY.split(' ')[0]) === year)
            return new Date(+g);
        g = new Date(g.setUTCDate(g.getUTCDate() + 1));
        i++;
    }
    throw new Error('Invalid Persian Date!');
};
var uuid = function (a) {
    return a
        ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
        : [1e7, 1e3, 4e3, 8e3, 1e11].join('-').replace(/[018]/g, uuid);
};
exports.default = {
    convert: {
        toEnglishNumbers: toEnglishNumbers,
        toGregorian: toGregorian,
    },
    date: {
        getFirstDayOfMonth: getFirstDayOfMonth,
        getJalaliDayOfWeek: getJalaliDayOfWeek,
        getNumberOfDaysInMonth: getNumberOfDaysInMonth,
        isLeapYear: isLeapYear,
    },
    removeNonNumeric: removeNonNumeric,
    uuid: uuid,
};
//# sourceMappingURL=tools.js.map