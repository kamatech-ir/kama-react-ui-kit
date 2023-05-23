import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent, TextareaHTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import KamaIcon, { IconTypes } from '../icon/KamaIcon';
import tools from '../../utils/tools';

export enum KamaInputTypes {
  INPUT,
  TEXTAREA,
}
type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
type KamaInputProps<T extends KamaInputTypes> = {
  as?: T;
  money?: boolean;
  iban?: boolean;
  bankCard?: boolean;
  label?: string;
  icon?: IconTypes;
  prevent?: string;
  error?: string;
  ltr?: boolean;
  compact?: boolean;
  indicator?: string;
} & (T extends KamaInputTypes.INPUT ? InputProps : TextareaProps);

function KamaInput<T extends KamaInputTypes>({
  as,
  className = '',
  placeholder = ' ',
  money,
  iban,
  bankCard,
  label,
  icon,
  prevent,
  error,
  ltr,
  compact,
  indicator,
  onChange,
  ...rest
}: KamaInputProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handlePrevent<T>(event: KeyboardEvent<T>) {
    const input: string = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    // global exceptions
    // 13: enter key
    // only 13 has issues w/ firefox 64 and earlier
    if (
      [9, 13, 16, 17, 18, 27, 123].indexOf(event.which) !== -1 ||
      [9, 13, 16, 17, 18, 27, 123].indexOf(event.keyCode) !== -1
    )
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
          const isNot = prevent[0] === '!' ? true : false;
          const pattern = isNot ? prevent.substring(1, prevent.length) : prevent;
          const patternRegex = new RegExp(pattern);

          if ((!isNot && patternRegex.test(input)) || (isNot && !patternRegex.test(input))) {
            event.preventDefault();
            // alert('کاراکتر وارد شده غیرمجاز است');
          }
        }
        break;
    }
  }
  function handleKeyDown<T>(event: KeyboardEvent<T>) {
    // handle complex backspace
    if (event.keyCode === 8) {
      if (bankCard && inputRef?.current?.value[inputRef.current.value.length - 1] === '-') {
        inputRef.current.value = inputRef.current.value.substring(0, inputRef.current.value.length - 1);
      }

      if (iban && inputRef?.current?.value[inputRef.current.value.length - 1] === ' ') {
        inputRef.current.value = inputRef.current.value.substring(0, inputRef.current.value.length - 1);
      }
    }
  }
  function addCommas(input: string) {
    return {
      target: {
        value: input
          ? `${parseInt(input.split('.')[0]).toLocaleString()}${input.includes('.') ? '.' : ''}${
              input.split('.')[1] ? input.split('.')[1] : ''
            }`
          : '',
      },
    };
  }
  function formatIban(input: string) {
    const ibanArray = (input || '')
      .replace(/.{2}/, (a) => {
        return a + ' ';
      })
      .split(' ');
    const iban =
      ibanArray.length === 1
        ? `IR ${ibanArray[0]}`
        : `IR ${ibanArray[0]} ${ibanArray[1].replace(/.{4}/g, (a) => {
            return a + ' ';
          })}`;

    return iban.length === 34 ? iban.substring(0, 33) : iban;
  }
  function formatBankCard(input: string) {
    const card = (input || '').replace(/.{4}/g, (a) => {
      return a + '-';
    });

    return card.length === 20 ? card.substring(0, 19) : card;
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
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
      onChange(event as ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>);
    }
  }
  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (onChange) {
      onChange(event as ChangeEvent<HTMLInputElement> & ChangeEvent<HTMLTextAreaElement>);
    }
  }

  return (
    <div
      ref={containerRef}
      className={classNames('KamaInput', className, {
        compact: compact,
        error: error,
        hasIcon: icon,
      })}
      data-error={error}
    >
      <label>
        {!as || as === KamaInputTypes.INPUT ? (
          <input
            {...(rest as InputProps)}
            ref={inputRef}
            placeholder={placeholder}
            className={`${ltr ? 'ltr' : ''}`}
            onKeyPress={handlePrevent<HTMLInputElement>}
            onKeyDown={handleKeyDown<HTMLInputElement>}
            onChange={handleChange}
          />
        ) : (
          <textarea
            {...(rest as TextareaProps)}
            rows={3}
            placeholder={placeholder}
            className={`${ltr ? 'ltr' : ''}`}
            onKeyPress={handlePrevent<HTMLTextAreaElement>}
            onKeyDown={handleKeyDown<HTMLTextAreaElement>}
            onChange={handleTextareaChange}
          />
        )}

        {label ? <span>{label}</span> : null}
        {icon ? <KamaIcon className='icon' icon={icon} /> : null}
        {indicator ? <div className='indicator'>{indicator}</div> : null}
      </label>
    </div>
  );
}

export default KamaInput;
