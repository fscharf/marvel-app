import Image from 'next/image'
import { styled } from 'styled-components'
import { shine } from 'theme'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 24px;
  overflow: hidden;
`

export const Container = styled.div`
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  gap: 24px;
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.light};
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 4px;
  width: 300px;
  flex: 1 1 auto;
  cursor: pointer;
  background-color: ${props => props.theme.colors.darkSecondary};
  position: relative;
  overflow: hidden;
  transition: scale 300ms ease-in-out;

  &:before {
    content: '';
    z-index: 10;
    position: absolute;
    height: 200%;
    width: 200%;
    top: -120%;
    left: -120%;
    background: linear-gradient(
      transparent 0%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 100%
    );
    transition: all 2s;
    transform: rotate(-45deg);
  }

  &:hover {
    scale: 1.05;
  }

  &:hover:before {
    animation: ${shine} 6s infinite forwards;
  }
`

export const CardContent = styled.div`
  padding: 16px;
  white-space: nowrap;
  color: ${props => props.theme.colors.light};
`

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`

export const Img = styled(Image)`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 400px;
  width: 100%;
  object-fit: cover;
`

export const ImgCircle = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 30px;
`

export const WrapperBlur = styled.div<{ imageSrc: string }>`
  position: relative;
  width: 100%;
  height: 350px;
  background: url(${props => props.imageSrc}) no-repeat center center;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(132, 132, 132, 0.25);
    backdrop-filter: blur(20px);
  }

  ${ImgCircle} {
    position: absolute;
    bottom: 0;
    left: 24px;
    transform: translate(0, 50%);
    box-shadow: 12px 12px 18px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 768px) {
      transform: translate(-50%, 50%);
      left: 50%;
    }
  }
`

export const DetailWrapper = styled(Wrapper)`
  margin-left: calc(250px + 24px);
  align-items: flex-start;
  max-width: 50%;

  @media screen and (max-width: 768px) {
    margin-top: 124px;
    max-width: 100%;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.light};
`
