import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cls from './AppButton.module.scss';

export enum AppThemeButton {
    CLEAR='clear',
    OUTLINED='outlined',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: AppThemeButton;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className,
        children,
        theme = AppThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.appButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
