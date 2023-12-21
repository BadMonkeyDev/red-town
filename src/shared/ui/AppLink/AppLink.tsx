import {Link, LinkProps} from "react-router-dom";
import cn from '@/shared/lib/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY='primary',
  SECONDARY='secondary',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...restLinkProps
  } = props;

  return (
    <Link
      className={cn(styles.root, className, styles[theme])}
      {...restLinkProps}
    >
      {children}
    </Link>
  )
}