import React, { useEffect, useRef, useState, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import tools from '../../utils/tools';
import KamaInput from '../input/KamaInput';
import ChevronLeftSolidSVG from '../../../assets/images/icons/fa/chevron-left.svg';
import ChevronDoubleLeftSolidSVG from '../../../assets/images/icons/fa/chevron-double-left.svg';
import CloseSVG from '../../../assets/images/icons/xmark.svg';

type KamaDatepickerProps = {
  label: string;
  onChange: any;
  preventFuture?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const MONTH_NAMES: any = {
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
const id = tools.uuid();

function KamaDatepicker({ label, value, onChange, preventFuture = true, error }: KamaDatepickerProps) {
  const today = tools.convert.toEnglishNumbers(new Date().toLocaleDateString('fa-IR'));
  const ref = useRef<HTMLDivElement>(null);
  const [year, setYear] = useState(parseInt(today.split('/')[0]));
  const [month, setMonth] = useState(parseInt(today.split('/')[1]));
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [days, setDays] = useState<number[][] | null[][]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // initialize calendar
  useEffect(() => {
    setDays(
      calculateDays(tools.date.getNumberOfDaysInMonth(year, month), tools.date.getFirstDayOfMonth(year, month) + 1),
    );
  }, [year, month]);

  // handle click outside calendar
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if ((event.target as HTMLElement).closest(`#dp-${id}`) === null) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener('click', handleClick, false);
    } else {
      window.removeEventListener('click', handleClick, false);
    }

    return function () {
      window.removeEventListener('click', handleClick, false);
    };
  }, [isOpen]);

  useEffect(() => {
    if (selectedDay) {
      handleSubmit();
    }
  }, [selectedDay]);

  function calculateDays(numberOfDays: number, dayOfWeekJ: number) {
    const days: number[][] | null[][] = [];

    for (let i = 0; i < numberOfDays + dayOfWeekJ - 1; i++) {
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
  function handleMonthChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setMonth(parseInt(event.target.value));
  }
  function handleYearChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setYear(parseInt(event.target.value));
  }
  function handleDayClick(day?: number | null) {
    if (day) {
      setSelectedDay(day);
    }
  }
  function handleNextMonthClick() {
    if (month < 12) {
      setSelectedDay(null);
      setMonth(month + 1);
    } else if (year !== parseInt(today.split('/')[0])) {
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
    } else if (year !== parseInt(today.split('/')[0]) - 99) {
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

  return (
    <div ref={ref} tabIndex={0} className={classNames('KamaDatepicker', { hide: !isOpen })} id={`dp-${id}`}>
      <KamaInput
        label={label}
        onFocus={() => {
          setIsOpen(true);
        }}
        value={value}
        error={error}
        readOnly
      />
      {value ? (
        <img
          className='clear'
          src={CloseSVG}
          onClick={() => {
            onChange('');
          }}
          alt='حذف تاریخ'
        />
      ) : null}
      <div className='wrapper'>
        <div className='calendar'>
          <div className='header'>
            <div className={classNames('button', 'previous')} onClick={handlePreviousYearClick}>
              <img src={ChevronDoubleLeftSolidSVG} alt='سال قبلی' />
            </div>
            <div className={classNames('button', 'previous')} onClick={handlePreviousMonthClick}>
              <img src={ChevronLeftSolidSVG} alt='ماه قبلی' />
            </div>
            <div className='select'>
              <select value={month} onChange={handleMonthChange}>
                {Object.keys(MONTH_NAMES).map((key: any, index) => {
                  return (
                    <option key={index} value={key}>
                      {MONTH_NAMES[key]}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='select'>
              <select value={year} onChange={handleYearChange}>
                {[...Array(100)].map((_, i) => {
                  return (
                    <option key={i} value={parseInt(today.split('/')[0]) - i}>
                      {parseInt(today.split('/')[0]) - i}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className='button' onClick={handleNextMonthClick}>
              <img src={ChevronLeftSolidSVG} alt='ماه بعدی' />
            </div>
            <div className='button' onClick={handleNextYearClick}>
              <img src={ChevronDoubleLeftSolidSVG} alt='سال بعدی' />
            </div>
          </div>
          <div className='body'>
            <table>
              <thead>
                <tr>
                  <th>ش</th>
                  <th>ی</th>
                  <th>د</th>
                  <th>س</th>
                  <th>چ</th>
                  <th>پ</th>
                  <th>ج</th>
                </tr>
              </thead>
              <tbody>
                {days.map((week, weekIndex) => {
                  return (
                    <tr key={weekIndex}>
                      {week.map((day, dayIndex) => {
                        // change to check year and month first
                        // trycatch for convert error on end of the year overflow
                        let isFuture = false;
                        try {
                          isFuture = !!(
                            day &&
                            tools.convert
                              .toGregorian(today.split('/')[0], today.split('/')[1], today.split('/')[2])
                              .getTime() <
                              tools.convert
                                .toGregorian(year.toString(), month.toString(), day?.toString() || '')
                                .getTime()
                          );
                        } catch (error) {
                          console.log('Invalid date!');
                        }

                        return (
                          <td
                            key={dayIndex}
                            className={classNames({
                              active: day && day === selectedDay,
                              disabled: preventFuture && isFuture,
                              empty: !day,
                              today:
                                year === parseInt(today.split('/')[0]) &&
                                month === parseInt(today.split('/')[1]) &&
                                day === parseInt(today.split('/')[2]),
                            })}
                            onClick={() => {
                              if (!preventFuture || !isFuture) {
                                handleDayClick(day);
                              }
                            }}
                          >
                            {day ? day : ''}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KamaDatepicker;
