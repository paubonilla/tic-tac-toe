import React from 'react'
import Board from '../Board/Board'
import { GameContainer, GameInner, ImageStyle, Image, TheOffice } from '../Game/index'
import michaelScott from '../../images/michael-scott.png'
import themeSong from '../../audio/the-office-theme-song.mp3'

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
