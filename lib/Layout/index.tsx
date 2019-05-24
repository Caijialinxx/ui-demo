import React from 'react';
import './index.scss';

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  return (
    <section>
      {props.children}
    </section>);
};

export default Layout;