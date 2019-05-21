import React from 'react';
import './index.scss';
import joinClasses from '../helpers/joinClasses';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FunctionComponent<ButtonProps> = ({className, children, ...restProps}) => {
  return (
    <button className={joinClasses('cui-button', className)} {...restProps} >{children}</button>);
};

export default Button;