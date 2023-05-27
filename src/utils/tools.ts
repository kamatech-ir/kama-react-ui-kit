const getFirstDayOfMonth = (year: string | number, month: string | number) => {
  const firstDayOfMonth = toGregorian(year.toString(), month.toString(), '1');

  return getJalaliDayOfWeek(firstDayOfMonth.getDay());
};
const getJalaliDayOfWeek = (gregorianDayOfWeek: number) => {
  return gregorianDayOfWeek < 6 ? gregorianDayOfWeek + 1 : 0;
};
const getNumberOfDaysInMonth = (year: number, month: number) => {
  if (month < 7) {
    return 31;
  } else if (month < 12) {
    return 30;
  } else {
    if (isLeapYear(year)) {
      return 30;
    } else {
      return 29;
    }
  }
};
function isLeapYear(year: number) {
  let mod;
  if (year > 1243 && year < 1473) {
    mod = year % 33;
    if (mod === 1 || mod === 5 || mod === 9 || mod === 13 || mod === 17 || mod === 22 || mod === 26 || mod === 30) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'unknown';
  }
}
const removeNonNumeric = (value: string | number): string => {
  return (value || '').toString().replace(/[^0-9.]/g, '');
};
const toEnglishNumbers = (num: number | string, dontTrim?: boolean) => {
  dontTrim = dontTrim || false;
  num = dontTrim ? num.toString() : num.toString().trim();
  const len = num.length;
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let res = '';
  let pos;

  for (let i = 0; i < len; i++) {
    if (~(pos = persianNumbers.indexOf(num.charAt(i)))) {
      res += pos;
    } else {
      res += num.charAt(i);
    }
  }

  return res;
};
// source: https://stackoverflow.com/a/71312168/3161029
const toGregorian = (y: string, m: string, d: string) => {
  const year: number = parseInt(y);
  const month: number = parseInt(m);
  const day: number = parseInt(d);
  const format = new Intl.DateTimeFormat('en-u-ca-persian', {
    dateStyle: 'short',
    timeZone: 'UTC',
  });
  let g: any = new Date(Date.UTC(2000, month, day));
  g = new Date(g.setUTCDate(g.getUTCDate() + 226867));
  const gY = g.getUTCFullYear() - 2000 + year;
  g = new Date(
    (gY < 0 ? '-' : '+') +
      ('00000' + Math.abs(gY)).slice(-6) +
      '-' +
      ('0' + (g.getUTCMonth() + 1)).slice(-2) +
      '-' +
      ('0' + g.getUTCDate()).slice(-2),
  );
  let [pM, pD, pY]: any = [...format.format(g).split('/')],
    i = 0;
  g = new Date(
    g.setUTCDate(
      g.getUTCDate() + ~~(year * 365.25 + month * 30.44 + day - (pY.split(' ')[0] * 365.25 + pM * 30.44 + pD * 1)) - 2,
    ),
  );
  while (i < 4) {
    [pM, pD, pY] = [...format.format(g).split('/')];
    if (parseInt(pD) === day && parseInt(pM) === month && parseInt(pY.split(' ')[0]) === year) return new Date(+g);
    g = new Date(g.setUTCDate(g.getUTCDate() + 1));
    i++;
  }
  throw new Error('Invalid Persian Date!');
};
const uuid = (a?: any) => {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : [1e7, 1e3, 4e3, 8e3, 1e11].join('-').replace(/[018]/g, uuid);
};

export default {
  convert: {
    toEnglishNumbers,
    toGregorian,
  },
  date: {
    getFirstDayOfMonth,
    getJalaliDayOfWeek,
    getNumberOfDaysInMonth,
    isLeapYear,
  },
  removeNonNumeric,
  uuid,
};
