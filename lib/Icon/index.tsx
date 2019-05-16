import React from 'react';
import '../importIcons.js';
import './index.scss';
import joinClasses from '../helpers/joinClasses';

interface IconProps extends React.SVGAttributes<SVGSVGElement | SVGUseElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, ...restProps}) => {
  return (
    <svg className={joinClasses('cui-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>);
};

export default Icon;