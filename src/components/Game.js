import React from 'react'
import Board from './Board'
import { GameContainer, GameInner } from '../styled'
import michaelScott from '../images/michael-scott.png'
import themeSong from '../audio/the-office-theme-song.mp3'
import styled from 'styled-components'

export const ImageStyle = styled.div`
  position: relative;
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  right: 0;
  pointer-events: none;
`

export const TheOffice = styled.div`
  > p {
    font-size: 80px;
    color: #fff;
    text-shadow: 1px 1px black;
    font-family: 'Special Elite', cursive;
  }
`

export default function Game() {
  return (
    <GameContainer>
      <audio autoPlay>
        <source src={themeSong} type="audio/mpeg" />
      </audio>
      <GameInner>
        <TheOffice><p>the office</p></TheOffice>
        <Board />
      </GameInner>
      <ImageStyle>
        <Image src={michaelScott} alt="si tito scott" />
      </ImageStyle>
    </GameContainer>
  )
}
