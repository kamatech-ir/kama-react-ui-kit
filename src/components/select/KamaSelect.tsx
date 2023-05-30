import React, { SelectHTMLAttributes, useEffect, useRef, useState, MouseEvent, ChangeEvent } from 'react';
import classNames from 'classnames';
import KamaInput from '../input/KamaInput';
import { IconTypes } from '../icon/KamaIcon';
import ChevronDownAltSVG from '../../../assets/images/icons/chevron-down.svg';

type KamaSelectProps = {
  label?: string;
  containerClassName?: string;
  className?: string;
  searchable?: boolean;
  options?: any[];
  filterBy?: (option: any, search: string) => void;
  displayProcess?: (option: any) => void;
  displayName?: string;
  uniqueId?: string;
  icon?: IconTypes;
  error?: string;
  onChange?: (selected: any) => void;
} & SelectHTMLAttributes<HTMLSelectElement>;

function KamaSelect({
  label,
  containerClassName = '',
  className,
  searchable = false,
  options = [],
  filterBy,
  displayProcess,
  displayName = 'name',
  uniqueId = 'id',
  icon,
  value,
  onChange = () => {
    return false;
  },
  error,
  disabled,
}: KamaSelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [search, setSearch] = useState('');

  // close select on click outside of it
  useEffect(() => {
    function close(this: Window, event: globalThis.MouseEvent) {
      if (
        selectRef.current &&
        event.target !== selectRef.current.querySelector('.select') &&
        event.target !== selectRef.current.querySelector('label') &&
        event.target !== selectRef.current.querySelector('.actions') &&
        event.target !== selectRef.current.querySelector('.actions img') &&
        event.target !== selectRef.current.querySelector('.selected') &&
        event.target !== selectRef.current.querySelector('ul input') &&
        event.target !== selectRef.current.querySelector('ul label span')
      ) {
        setIsOpen((prevValue) => {
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
  useEffect(() => {
    if (isCollapsing) {
      setTimeout(() => {
        setIsCollapsing(false);
      }, 200);
    }
  }, [isCollapsing]);

  function handleToggle(event: MouseEvent<HTMLElement>) {
    if (
      event.target === selectRef.current?.querySelector('ul input') ||
      event.target === selectRef.current?.querySelector('ul label span') ||
      disabled
    ) {
      return;
    }

    setIsCollapsing(true);
    setIsOpen(!isOpen);
  }
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  function filterOptions(option: any) {
    const optionDisplayValue = (
      displayProcess ? displayProcess(option) : (Object.keys(option).length ? option[displayName] : option) || ''
    )
      .toString()
      .toLowerCase();

    return optionDisplayValue.includes(search);
  }
  function handleOptionClick(selected: any) {
    onChange(selected);
  }

  const filteredOptions = options.filter((option) => {
    return filterBy ? filterBy(option, search) : filterOptions(option);
  });
  const selectedOption = options.filter((option) => {
    function getValue(input: any) {
      return Object.keys(input || {}).length ? input[uniqueId] : input;
    }

    return value === getValue(option) || getValue(value) === getValue(option);
  })[0];

  const selectedValue = selectedOption
    ? displayProcess
      ? displayProcess(selectedOption)
      : (Object.keys(selectedOption).length ? selectedOption[displayName] : selectedOption) || ''
    : null;

  return (
    <div
      tabIndex={0}
      ref={selectRef}
      className={classNames('KamaSelect', {
        [containerClassName]: containerClassName,
        open: isOpen,
        filled: selectedValue,
        isCollapsing: isCollapsing,
        error: error,
        disabled: disabled,
      })}
      onClick={handleToggle}
      data-error={error}
    >
      <label>{label}</label>
      <div className={classNames('select', { className: className })}>
        <span className='selected'>
          {icon && selectedValue ? <img src={selectedOption[icon]} alt={selectedValue} /> : null}
          {selectedValue || isOpen ? selectedValue : ''}
        </span>
        <div className='actions'>
          <div className='action'>
            <img src={ChevronDownAltSVG} className={classNames({ open: isOpen })} alt='باز و بسته کردن' />
          </div>
        </div>
        <ul className={classNames({ empty: !(options && options.length) })}>
          {searchable && (filteredOptions.length || search) ? (
            <div className='searchContainer'>
              <KamaInput label='جستجو...' value={search} onChange={handleSearchChange} autoFocus />
            </div>
          ) : null}
          {filteredOptions.length ? (
            <>
              {filteredOptions.map((option, index) => {
                const displayValue = displayProcess
                  ? displayProcess(option)
                  : (Object.keys(option).length ? option[displayName] : option) || '';

                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleOptionClick(option);
                    }}
                  >
                    {icon ? <img src={option[icon]} alt={displayValue} /> : null}
                    <span>{displayValue}</span>
                  </li>
                );
              })}
            </>
          ) : (
            <li className='emptyText'>موردی یافت نشد</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default KamaSelect;
