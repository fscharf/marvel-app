/* eslint-disable react-hooks/exhaustive-deps */
import { ICharacter, ICharacterResponse } from 'models'
import { useRouter } from 'next/router'
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { CharacterService } from 'services'

type State = {
  characters: ICharacter[]
  search: (value: string) => void
  character?: ICharacter
  changePage: (currentPage: number) => void
  totalPages: number
  isLoading: boolean
}

const Context = React.createContext<State>({} as State)

export const CharacterProvider = ({ children }: React.PropsWithChildren) => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [character, setCharacter] = useState<ICharacter>()
  const [response, setResponse] = useState<ICharacterResponse>(
    {} as ICharacterResponse
  )
  const [itemsPerPage] = useState<number>(8)
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const router = useRouter()
  const { id } = router.query

  const characterService = new CharacterService()

  const totalPages: number = useMemo(
    () => Math.ceil(response.data?.total / itemsPerPage),
    [response]
  )

  const changePage = useCallback(
    (currentPage: number): void => {
      const newPage: number =
        (currentPage * itemsPerPage) % response.data?.total
      setCurrentPage(newPage)
    },
    [response]
  )

  const fetch = async (
    offset = 0,
    limit = itemsPerPage,
    searchValue?: string
  ): Promise<void> => {
    setIsLoading(true)
    await characterService
      .getCharacters({ offset, limit, searchValue })
      .then(setResponse)
    setIsLoading(false)
  }

  const fetchById = async (id: number): Promise<void> => {
    setIsLoading(true)
    await characterService.getCharacterById(Number(id)).then(setCharacter)
    setIsLoading(false)
  }

  const search = (value: string) => setSearchValue(value)

  useEffect(() => {
    fetch()
  }, [])

  useEffect(() => {
    fetch(currentPage, itemsPerPage, searchValue)
    if (searchValue) router.push('/characters')
  }, [currentPage, searchValue])

  useEffect(() => {
    setCharacters(response.data?.results || [])
  }, [response])

  useEffect(() => {
    if (id) fetchById(Number(id))
  }, [id])

  return (
    <Context.Provider
      value={{
        characters,
        search,
        character,
        totalPages,
        changePage,
        isLoading
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCharacters = (): State => useContext(Context)
