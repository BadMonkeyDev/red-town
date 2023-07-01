import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './AppButton.module.scss';

export enum AppButtonVariant {
    CLEAR='clear',
    OUTLINED='outlined',
    CONTAINED='contained',
}

export enum AppButtonColor {
    PRIMARY='primary',
    PRIMARY_INVERTED='primaryInverted',
    SECONDARY='secondary',
    SECONDARY_INVERTED='secondaryInverted',
}

export enum AppButtonSize {
    M='size_m',
    L='size_l',
    XL='size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    square?: boolean;
    variant?: AppButtonVariant;
    color?: AppButtonColor;
    size?: AppButtonSize;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className,
        children,
        square,
        variant = AppButtonVariant.CONTAINED,
        color = AppButtonColor.PRIMARY,
        size = AppButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={cn(
                styles.root,
                { [styles.square]: square },
                [className, styles[variant], styles[color], styles[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
