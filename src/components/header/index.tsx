import { Logo, Nav, NavItem, Wrapper } from './styles'
import { SearchBar } from '..'
import { useToggle } from 'usehooks-ts'
import { useCharacters } from 'contexts'
import Link from 'next/link'
import { HiArrowLeft, HiMagnifyingGlass } from 'react-icons/hi2'
import { useRouter } from 'next/router'

export default function Header() {
  const [isOpen, toggleIsOpen] = useToggle(false)
  const { search } = useCharacters()
  const router = useRouter()

  const isHome: boolean = router.pathname === '/'
  const goBack = (): void => router.back()

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
