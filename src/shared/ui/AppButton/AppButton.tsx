import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppButton.module.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

export enum AppThemeButton {
    CLEAR='clear',
    OUTLINED='outlined',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme: AppThemeButton;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className,
        children,
        theme = AppThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.appButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};