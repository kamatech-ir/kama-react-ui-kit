declare function isLeapYear(year: number): boolean | "unknown";
declare const _default: {
    convert: {
        toEnglishNumbers: (num: string | number, dontTrim?: boolean | undefined) => string;
        toGregorian: (y: string, m: string, d: string) => Date;
    };
    date: {
        getFirstDayOfMonth: (year: string | number, month: string | number) => number;
        getJalaliDayOfWeek: (gregorianDayOfWeek: number) => number;
        getNumberOfDaysInMonth: (year: number, month: number) => 30 | 31 | 29;
        isLeapYear: typeof isLeapYear;
    };
    removeNonNumeric: (value: string | number) => string;
    uuid: (a?: any) => string;
};
export default _default;
