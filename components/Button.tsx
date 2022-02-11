import React, { ReactComponentElement } from 'react';

interface IButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>,
  children: string | React.ComponentType<any>,
  href?: string
  style: string
}

const Button: React.FC<IButtonProps> = ({ onClick, href, children, style }) => {
  return (
    <button className={`py-1 px-6 rounded font-bold ${style} `}>
      <a href={href} onClick={onClick}>{children}</a>
    </button>
  );
}

export default Button;
