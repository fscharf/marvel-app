import { httpClient } from 'config'
import { ICharacter, ICharacterResponse } from 'models'

interface ICharacterService {
  getCharacters(params?: GetCharactersParams): Promise<ICharacterResponse>
  getCharacterById(id: number): Promise<ICharacter>
}

type GetCharactersParams = {
  offset?: number
  limit?: number
  searchValue?: string
}

export class CharacterService implements ICharacterService {
  async getCharacters({
    offset = 0,
    limit = 8,
    searchValue
  }: GetCharactersParams): Promise<ICharacterResponse> {
    const nameStartsWith = searchValue ? `&nameStartsWith=${searchValue}` : ''
    const response = await httpClient.request<ICharacterResponse>(
      `/characters?offset=${offset}&limit=${limit}${nameStartsWith}`
    )
    return response.data
  }
  async getCharacterById(id: number): Promise<ICharacter> {
    const response = await httpClient.request<ICharacterResponse>(
      `/characters/${id}`
    )
    return response.data.data.results[0]
  }
}
