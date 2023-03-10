import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import React from "react";
import SunIcon from 'shared/assets/icons/sun.svg'
import MoonIcon from 'shared/assets/icons/moon.svg'
import {AppButton, AppThemeButton} from "shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <AppButton
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={AppThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <SunIcon width={40} className={classNames(cls.icon)} /> : <MoonIcon width={40} height={40} className={classNames(cls.icon)} />}
        </AppButton>
    );
};