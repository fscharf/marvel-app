import { ICharacter, ICharacterResponse } from 'models'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { httpClient } from 'services'

type State = {
  characters: ICharacter[]
  search: (value: string) => Promise<void>
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
  const router = useRouter()
  const { id } = router.query

  const totalPages: number = Math.ceil(response.data?.total / itemsPerPage)

  const changePage = (currentPage: number): void => {
    const newPage: number = (currentPage * itemsPerPage) % response.data?.total
    setCurrentPage(newPage)
  }

  const fetch = async (
    offset = 0,
    limit: number = itemsPerPage
  ): Promise<void> => {
    setIsLoading(true)
    await httpClient
      .request<ICharacterResponse>(
        `/characters?offset=${offset}&limit=${limit}`
      )
      .then(response => {
        setCharacters(response.data.data.results)
        setResponse(response.data)
        setIsLoading(false)
      })
  }

  const search = async (value: string): Promise<void> => {
    setIsLoading(true)
    if (value) {
      await httpClient
        .request<ICharacterResponse>(`/characters?nameStartsWith=${value}`)
        .then(response => {
          setCharacters(response.data.data.results)
          router.push('/characters')
          setIsLoading(false)
        })
    } else {
      await fetch()
    }
  }

  const getCharacterById = async (id: string): Promise<ICharacter> => {
    setIsLoading(true)
    const response = await httpClient.request<ICharacterResponse>(
      `/characters/${id}`
    )
    setIsLoading(false)
    return response.data.data.results[0]
  }

  useEffect(() => {
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetch(currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    // eslint-disable-next-line no-console
    if (id) getCharacterById(String(id)).then(setCharacter).catch(console.error)
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
