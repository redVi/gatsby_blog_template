import React, { useRef, useEffect } from 'react'
import { SearchInputProps } from './types'

export function SearchInput ({ searchValue, handleChange, isFormOpened }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isFormOpened) {
      inputRef.current?.focus()
    }
  }, [isFormOpened])

  return (
    <input
      className="searchForm__input"
      value={searchValue}
      onChange={handleChange}
      placeholder="Найти запись"
      aria-label="Поиск"
      ref={inputRef}
    />
  )
}


