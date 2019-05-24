import React from 'react';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <header>
      {props.children}
    </header>);
};

export default Header;