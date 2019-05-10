import React from 'react'
import './icons/emoji-happy.svg'
import './icons/emoji-cool.svg'
import './icons/emoji-shocked.svg'
import './icons/emoji-angry.svg'

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
  <svg width="1em" height="1em">
    <use xlinkHref={`#${props.name}`}></use>
  </svg>)
}

export default Icon