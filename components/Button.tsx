import React, { ReactComponentElement } from 'react';

interface IButtonProps {
  onClick?: React.MouseEventHandler<unknown>,
  children: string | React.ComponentType<any>,
  href?: string
  style: string
}

const Button: React.FC<IButtonProps> = ({ onClick, href, children, style }) => {
  return (
    <button className={`px-4 mx-2 rounded ${style}`}>
      <a href={href} onClick={onClick}>children</a>
    </button>
  );
}

export default Button;
