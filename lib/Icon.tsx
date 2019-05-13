import React from 'react';
import './importIcons.js';
import './Icon.scss';
import joinClasses from './helpers/joinClasses';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className={joinClasses('cui-icon', props.className)}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>);
};

export default Icon;