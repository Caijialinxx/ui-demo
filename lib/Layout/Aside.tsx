import React from 'react';

interface AsideProps extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FunctionComponent<AsideProps> = (props) => {
  return (
    <aside>
      {props.children}
    </aside>);
};

export default Aside;