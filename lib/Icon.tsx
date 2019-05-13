import React from 'react';
import './importIcons.js';
import './Icon.scss'
interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="cui-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>);
};

export default Icon;