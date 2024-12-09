import React from 'react';
import { cn } from '../../utils/classnames';

interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center gap-2',
        'min-h-[44px] px-4 py-2 rounded-lg',
        'text-sm font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        
        // Variant styles
        variant === 'primary' && [
          'bg-blue-600 text-white',
          'hover:bg-blue-700 active:bg-blue-800',
          'focus:ring-blue-500',
        ],
        variant === 'secondary' && [
          'bg-green-600 text-white',
          'hover:bg-green-700 active:bg-green-800',
          'focus:ring-green-500',
        ],
        
        // Width styles
        fullWidth && 'w-full',
        
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};