import { Logo, Nav, NavItem, Wrapper } from './styles'
import { SearchBar } from '..'
import { useToggle } from 'usehooks-ts'
import { useCharacters } from 'contexts'
import Link from 'next/link'
import { HiArrowLeft, HiMagnifyingGlass } from 'react-icons/hi2'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Header() {
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle(false)
  const { search } = useCharacters()
  const router = useRouter()

  const isHome: boolean = router.pathname === '/'
  const goBack = (): void => router.back()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setIsOpen(false), [search])

  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <Logo src="/marvel.svg" />
        </Link>
        {isHome ? null : (
          <NavItem onClick={goBack}>
            <HiArrowLeft />
          </NavItem>
        )}
        <NavItem onClick={toggleIsOpen}>
          <HiMagnifyingGlass />
        </NavItem>
      </Nav>
      <SearchBar isOpen={isOpen} onClose={toggleIsOpen} onChange={search} />
    </Wrapper>
  )
}
