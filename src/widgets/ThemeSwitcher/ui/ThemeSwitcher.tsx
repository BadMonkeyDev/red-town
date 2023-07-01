import { useTheme } from 'app/providers/ThemeProvider';
import React, { FC } from 'react';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { ThemeList } from 'app/providers/ThemeProvider/lib/ThemeContext';
import cn from 'classnames';
import styles from './ThemeSwitcher.module.scss';

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
            className={cn(styles.root, className)}
            variant={AppButtonVariant.CLEAR}
            onClick={toggleTheme}
        >
            {theme === ThemeList.DARK
                ? <SunIcon width={40} className={cn(styles.icon, styles[color])} />
                : <MoonIcon width={40} className={cn(styles.icon, styles[color])} />}
        </AppButton>
    );
};
