import React from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-layout');

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<LayoutProps> = ({className, children, ...restProps}) => {
  return (
    <section className={setCN('', className)} {...restProps}>
      {children}
    </section>);
};

export default Layout;