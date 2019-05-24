import React from 'react';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {

}

const Content: React.FunctionComponent<ContentProps> = (props) => {
  return (
    <main>
      {props.children}
    </main>);
};

export default Content;