import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cn from '@/shared/lib/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR='clear',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    theme = ThemeButton.CLEAR,
    children,
    ...restButtonProps
  } = props;

  return (
    <button
      type="button"
      className={cn(styles.root, className, styles[theme])}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...restButtonProps}
    >
      {children}
    </button>
  );
};