import React from 'react';
import {scopeClassMaker} from '../helpers';

const setCN = scopeClassMaker('cui-layout-content');

interface ContentProps extends React.HTMLAttributes<HTMLElement> {

}

const Content: React.FunctionComponent<ContentProps> = ({className, children, ...restProps}) => {
  return (
    <main className={setCN('', className)} {...restProps}>
      {children}
    </main>);
};

export default Content;