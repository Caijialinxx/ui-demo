import React from 'react';
import {scopeClassMaker} from '../../helpers';

const setCN = scopeClassMaker('cui-layout-footer');

interface FooterProps extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<FooterProps> = ({className, children, ...restProps}) => {
  return (
    <footer className={setCN('', className)} {...restProps}>
      {children}
    </footer>);
};

export default Footer;