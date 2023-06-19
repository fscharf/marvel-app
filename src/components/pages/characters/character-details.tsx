import { useCharacters } from 'contexts'
import { DetailWrapper, ImgCircle, Text, Title, WrapperBlur } from './styles'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Head from 'next/head'

export default function CharacterDetails() {
  const { character, isLoading } = useCharacters()

  if (character) {
    const { thumbnail, name, description } = character

    const imageNotAvailable: boolean = thumbnail.path.includes(
      'image_not_available'
    )

    const imgSrc: string = imageNotAvailable
      ? '/not-found.svg'
      : `${thumbnail.path}.${thumbnail.extension}`

    return (
      <React.Fragment>
        <Head>
          <title>{name} | Marvel Characters</title>
          <meta name="description" content={description} />
        </Head>
        {isLoading ? (
          <Skeleton
            height="500px"
            width="100%"
            baseColor="#333"
            highlightColor="#666"
          />
        ) : (
          <React.Fragment>
            <WrapperBlur imageSrc={imgSrc}>
              <ImgCircle src={imgSrc} />
            </WrapperBlur>
            <DetailWrapper>
              <Title>{name}</Title>
              <Text>{description}</Text>
            </DetailWrapper>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  } else {
    return null
  }
}
