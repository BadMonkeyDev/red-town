import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        children,
        className,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={cn(styles.root, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
