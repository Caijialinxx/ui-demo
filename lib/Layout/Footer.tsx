import React from 'react';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  return (
    <footer>
      {props.children}
    </footer>);
};

export default Footer;