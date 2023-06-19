import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { ClearButton, Input, Wrapper } from './styles'
import { useDebounce, useEventListener } from 'usehooks-ts'
import { HiOutlineXCircle } from 'react-icons/hi2'

type Props = {
  isOpen: boolean
  onClose?: () => void
  onChange?: (value: string) => void
}

export default function SearchBar({ isOpen, onClose, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500)

  const handleKeyDown = (event: KeyboardEvent) => {
    if ((event.key === 'Escape' || event.key === 'Esc') && isOpen) {
      onClose?.()
    }
  }

  useEventListener('keydown', handleKeyDown)

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus({ preventScroll: true })
    }
  }, [isOpen])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    onChange?.(debouncedValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <Wrapper isOpen={isOpen}>
      <Input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        value={value}
        placeholder="Search your hero (e.g. Wolverine)"
      />
      {value ? (
        <ClearButton onClick={() => setValue('')}>
          <HiOutlineXCircle />
        </ClearButton>
      ) : null}
    </Wrapper>
  )
}
