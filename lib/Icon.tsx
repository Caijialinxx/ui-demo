import React from 'react';
import './importIcons.js';
import './Icon.scss';
import joinClasses from './helpers/joinClasses';

interface IconProps {
  name: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement | SVGUseElement>;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className={joinClasses('cui-icon', props.className)} onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>);
};

export default Icon;