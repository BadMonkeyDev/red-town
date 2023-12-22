import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from '../model/ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: ThemeEnum;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevState) => {
      const newTheme = prevState === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });
  };

  return { theme, toggleTheme };
}
