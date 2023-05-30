import React, { SelectHTMLAttributes, useEffect, useRef, useState, MouseEvent, ChangeEvent } from 'react';
import classNames from 'classnames';
import KamaInput from '../input/KamaInput';
import { IconTypes } from '../icon/KamaIcon';
import KamaCheckbox from '../checkbox/KamaCheckbox';
import ChevronDownAltSVG from 'assets/images/icons/chevron-down.svg';

type KamaMultiSelectProps = {
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
  value?: any;
  error?: string;
  onChange?: (selected: any) => void;
} & SelectHTMLAttributes<HTMLSelectElement>;

function KamaMultiSelect({
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
}: KamaMultiSelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [search, setSearch] = useState('');
  const [checkeds, setCheckeds] = useState<any[]>([]);

  function handleToggle(event: MouseEvent<HTMLElement>) {
    if (event.target === selectRef.current?.querySelector(`ul .searchContainer input`)) {
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
        event.target !== selectRef.current.querySelector('ul .searchContainer input')
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
  useEffect(() => {
    onChange(checkeds);
  }, [checkeds]);

  // const syncCheckeds = useCallback(() => {
  //   setCheckeds(([...prev]) => {
  //     const existingCheckeds = prev.filter((e: any) => {
  //       return (
  //         value?.findIndex((v: any) => {
  //           return typeof v === 'string' ? v === e[uniqueId] : v[uniqueId] === e[uniqueId];
  //         }) !== -1
  //       );
  //     });
  //     const remainingCheckeds = value
  //       ?.filter((v: any) => {
  //         return (
  //           prev.findIndex((e: any) => {
  //             return typeof v === 'string' ? v === e[uniqueId] : v[uniqueId] === e[uniqueId];
  //           }) === -1
  //         );
  //       })
  //       .map((e: any) => {
  //         return typeof e === 'string' ? { [uniqueId]: e } : e;
  //       });

  //     return existingCheckeds.concat(remainingCheckeds || []);
  //   });
  // }, [checkeds, value]);
  // useEffect(() => {
  //   // TODO: NEEDS REFACTORING?
  //   // length is not a good way to compare, change asap
  //   if (
  //     checkeds.length !== value?.length ||
  //     checkeds.filter((e: any) => {
  //       return value?.findIndex((v: any) => {
  //         return typeof v === 'string'
  //           ? e[uniqueId] === v
  //           : e[uniqueId] === v[uniqueId];
  //       });
  //     })?.length !== checkeds.length
  //   ) {
  //     syncCheckeds();
  //   }
  // }, [value, checkeds]);

  const filteredOptions = options.filter((option) => {
    return filterBy ? filterBy(option, search) : filterOptions(option);
  });
  const selectedOption = options.filter((option) => {
    function getValue(input: any) {
      return Object.keys(input || {}).length ? input[uniqueId] : input;
    }

    return getValue(value) === getValue(option);
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
      className={classNames('KamaMultiSelect', {
        [containerClassName]: containerClassName,
        open: isOpen,
        filled: selectedValue,
        isCollapsing: isCollapsing,
        error: error,
      })}
      onClick={handleToggle}
      data-error={error}
    >
      <label className='label'>{label}</label>
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
              <KamaInput
                className='search'
                placeholder='جستجو...'
                value={search}
                onChange={handleSearchChange}
                autoFocus
              />
            </div>
          ) : null}
          {filteredOptions.length ? (
            <>
              {filteredOptions.map((option, index) => {
                const displayValue = displayProcess
                  ? displayProcess(option)
                  : (Object.keys(option).length ? option[displayName] : option) || '';

                return (
                  <li key={index}>
                    <KamaCheckbox
                      label={displayValue}
                      checked={
                        !!checkeds.filter((e) => {
                          return e[uniqueId] === option[uniqueId];
                        }).length
                      }
                      onClick={(e) => {
                        setCheckeds(([...prev]) => {
                          if ((e.target as HTMLInputElement).checked) {
                            prev.push(option);
                          } else {
                            prev.splice(
                              prev.findIndex((i) => {
                                return i[uniqueId] === option[uniqueId];
                              }),
                              1,
                            );
                          }
                          return prev;
                        });
                      }}
                    />
                    {icon ? <img src={option[icon]} alt={displayValue} /> : null}
                    {/* <span>{displayValue}</span> */}
                  </li>
                );
              })}
            </>
          ) : (
            <li className='disabled'>موردی یافت نشد</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default KamaMultiSelect;
