import { useCharacters } from 'contexts'
import {
  Card,
  CardContent,
  CardTitle,
  Container,
  Img,
  Text,
  Title,
  Wrapper
} from './styles'
import { useRouter } from 'next/router'
import { Pagination } from 'components'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function CharactersPage() {
  const router = useRouter()
  const { characters, changePage, totalPages, isLoading } = useCharacters()

  return (
    <Wrapper>
      <Title>Characters</Title>
      {isLoading ? (
        <Container>
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              height="500px"
              width="300px"
              borderRadius="4px"
              baseColor="#333"
              highlightColor="#666"
            />
          ))}
        </Container>
      ) : characters.length === 0 ? (
        <Text
          style={{
            marginTop: '32px'
          }}
        >
          No characters found
        </Text>
      ) : (
        <React.Fragment>
          <Container>
            {characters.map(character => {
              const { thumbnail, id, name } = character
              const imageNotAvailable: boolean = thumbnail.path.includes(
                'image_not_available'
              )

              const imgSrc: string = imageNotAvailable
                ? '/not-found.svg'
                : `${thumbnail.path}.${thumbnail.extension}`

              return (
                <Card key={id} onClick={() => router.push(`/characters/${id}`)}>
                  <Img width={120} height={120} src={imgSrc} alt={name} />
                  <CardContent>
                    <CardTitle>{name}</CardTitle>
                  </CardContent>
                </Card>
              )
            })}
          </Container>
        </React.Fragment>
      )}
      <Pagination changePage={changePage} totalPages={totalPages} />
    </Wrapper>
  )
}
