import React, {useEffect, useState} from 'react';
import './importIcons.js';
import './index.scss';
import joinClasses from '../../helpers/joinClasses';

interface IconProps extends React.SVGAttributes<SVGSVGElement | SVGUseElement> {
  name: string;
  animationType?: 'spin' | 'shake' | 'shake-horizontal' | 'shake-vertical';
  animationTrigger?: 'click' | 'hover' | 'auto';
  // TODO: 从 iconfont.cn 引入 icon
  // TODO: 自定义 IconComponent
}

const Icon: React.FunctionComponent<IconProps> = ({name, className, animationType, animationTrigger, ...restProps}) => {
  const [animationClassName, setAnimationClassName] = useState<string>('');
  const [animationEventHandler, setAnimationEventHandler] = useState({});
  useEffect(() => {
    if (animationType) {
      if (animationTrigger === 'hover') {
        const onMouseOver: React.MouseEventHandler<SVGSVGElement | SVGUseElement> = () => {
          setAnimationClassName('cui-icon-' + animationType);
        };
        const onMouseLeave: React.MouseEventHandler<SVGSVGElement | SVGUseElement> = () => {
          setAnimationClassName('');
        };
        setAnimationEventHandler({onMouseOver, onMouseLeave});
      } else if (animationTrigger === 'click') {
        const onClick: React.MouseEventHandler<SVGSVGElement | SVGUseElement> = () => {
          setAnimationClassName('cui-icon-' + animationType);
        };
        const onAnimationEnd: React.MouseEventHandler<SVGSVGElement | SVGUseElement> = () => {
          setAnimationClassName('');
        };
        setAnimationEventHandler({onClick, onAnimationEnd});
      } else {
        setAnimationClassName('cui-icon-' + animationType);
      }
    }
  }, []);
  return (
    <svg fill="currentColor" className={joinClasses('cui-icon', className,
      name === 'loading' && 'cui-icon-spin',
      animationClassName
    )} {...animationEventHandler} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>);
};

Icon.defaultProps = {
  animationTrigger: 'auto'
};

export default Icon;