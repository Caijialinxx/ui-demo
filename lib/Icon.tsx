import React from 'react';
import './importIcons.js';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg width="1em" height="1em">
      <use xlinkHref={`#${props.name}`}/>
    </svg>);
};

export default Icon;