import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
import {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

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
    } = props
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};