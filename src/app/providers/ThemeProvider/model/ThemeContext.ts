import { createContext, Dispatch, SetStateAction } from 'react';

export enum ThemeEnum {
  LIGHT='light',
  DARK='dark',
}

export interface ThemeContextProps {
  theme?: ThemeEnum;
  setTheme?: Dispatch<SetStateAction<ThemeEnum>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
