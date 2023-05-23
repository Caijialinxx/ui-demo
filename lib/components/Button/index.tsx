import React, {ReactElement, ReactNode, useMemo} from 'react';
import './index.scss';
import joinClasses from '@helpers/joinClasses';
import {Icon} from '@/index';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  shape?: 'round' | 'circle';
  mode?: 'text' | 'plain';
  size?: 'large' | 'small';
  icon?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<ButtonProps> = ({className, theme, shape, mode, size, icon, loading, children, ...restProps}) => {
  const createIcon = (icon: string | undefined, loading: boolean | undefined): ReactNode =>
    loading ? <Icon name="loading"/> :
      icon ? <Icon name={icon}/> : null;
  const iconComp = useMemo(() => createIcon(icon, loading), [icon, loading]);

  return (
    <button
      className={joinClasses('cui-button',
        theme && `cui-button-${theme}`,
        shape && `cui-button-${shape}`,
        mode && `cui-button-${mode}`,
        ((iconComp && !children) || (!iconComp && typeof children === 'object' && (children as ReactElement).type === Icon)) && `cui-button-icon-only`,
        size && `cui-button-${size}`,
        loading && `cui-button-loading`,
        className)}
      {...restProps}
    >
      {iconComp}
      {children && <span>{children}</span>}
    </button>);
};

Button.defaultProps = {
  type: 'button',     // fixed: 默认为"button"，以免在form表单中被当作提交按钮
  loading: false,
};

// TODO: Button.Group

export default Button;