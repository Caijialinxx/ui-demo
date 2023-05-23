import React from 'react';
import {scopeClassMaker} from '../../helpers';

const setCN = scopeClassMaker('cui-layout-header');

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<HeaderProps> = ({className, children, ...restProps}) => {
  return (
    <header className={setCN('', className)} {...restProps}>
      {children}
    </header>);
};

export default Header;