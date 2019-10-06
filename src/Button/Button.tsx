import React from 'react';
import { testId } from '@types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactElement;
  isDisabled?: boolean;
  // analyticsObject?: any;
  // isFullWidth?: boolean;
}

export const Button = ({
  isDisabled = false,
  // analyticsObject = {},
  // isFullWidth = false,
  ...props
}: ButtonProps & testId) => <button disabled={isDisabled} {...props} />;
