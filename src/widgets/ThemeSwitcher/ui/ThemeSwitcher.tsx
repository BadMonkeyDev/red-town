import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React, { FC } from 'react';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cls from './ThemeSwitcher.module.scss';

export enum ThemeSwitcherColor {
    YELLOW='yellow',
    PURPLE='purple',
}

interface ThemeSwitcherProps {
    className?: string;
    color?: ThemeSwitcherColor;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {
        color = ThemeSwitcherColor.YELLOW,
        className,
    } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <AppButton
            className={classNames(cls.themeSwitcher, {}, [className])}
            variant={AppButtonVariant.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <SunIcon width={40} className={classNames(cls.icon, {}, [cls[color]])} />
                : <MoonIcon width={40} className={classNames(cls.icon, {}, [cls[color]])} />}
        </AppButton>
    );
};
