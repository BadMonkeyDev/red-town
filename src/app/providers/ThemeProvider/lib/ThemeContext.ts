import { createContext } from 'react';

export const ThemeList = {
    LIGHT: 'app_light_theme',
    DARK: 'app_dark_theme',
} as const;

export type Theme = typeof ThemeList[keyof typeof ThemeList]

export interface ThemeContextProps {
    theme ?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
