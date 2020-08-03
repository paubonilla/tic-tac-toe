import React from 'react'
import { SquareButton } from '../styled'

export default function Square({ value, onClick }) {
  const style = value ? `squares ${value}` : `squares`
  return (
    <SquareButton
      className={style}
      onClick={onClick}>
      {value}
    </SquareButton>
  )
}
