import React from 'react';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-layout-aside');

interface AsideProps extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FunctionComponent<AsideProps> = ({className, children, ...restProps}) => {
  return (
    <aside className={setCN('', className)} {...restProps}>
      {children}
    </aside>);
};

export default Aside;