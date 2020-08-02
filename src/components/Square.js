import React from 'react'
import styled from 'styled-components'

export const SquareButton = styled.button`
  width: 100px;
  height: 100px;
`

export default function Square(props) {
  return (
    <SquareButton
      onClick={props.onClick}>
      {props.value}
    </SquareButton>
  )
}
