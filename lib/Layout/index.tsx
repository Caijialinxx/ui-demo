import React, {ReactElement} from 'react';
import './index.scss';
import {scopeClassMaker} from '../helpers';
import Aside from './Aside';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const setCN = scopeClassMaker('cui-layout');

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {

}

interface LayoutApis {
  Header: React.FunctionComponent;
  Aside: React.FunctionComponent;
  Content: React.FunctionComponent;
  Footer: React.FunctionComponent;
}

type Layout = React.FunctionComponent<LayoutProps> & LayoutApis

const Layout: Layout = ({className, children, ...restProps}) => {
  const hasAside = (children as Array<ReactElement>).some(child => child.type === Aside);
  return (
    <section className={setCN('', hasAside && setCN('has-aside'), className)} {...restProps}>
      {children}
    </section>);
};

Layout.Header = Header;
Layout.Aside = Aside;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;

export {Header, Aside, Content, Footer};