import React, {ReactElement} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';
import Aside from './Aside';

const setCN = scopeClassMaker('cui-layout');

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<LayoutProps> = ({className, children, ...restProps}) => {
  const hasAside = (children as Array<ReactElement>).some(child => child.type === Aside);
  return (
    <section className={setCN('', hasAside && setCN('has-aside'), className)} {...restProps}>
      {children}
    </section>);
};

export default Layout;