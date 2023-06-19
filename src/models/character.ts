export interface ICharacter {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
}

export interface ICharacterResponse {
  data: CharacterResponseData
}

type Thumbnail = {
  path: string
  extension: string
}

type CharacterResponseData = {
  results: ICharacter[]
  offset: number
  limit: number
  total: number
  count: number
}
