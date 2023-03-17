import React, {
    FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeList,
} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || ThemeList.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme,
    children: ReactNode,

}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    const themes = useMemo(() => Object.values(ThemeList), []);
    useEffect(() => {
        document.body.classList.remove(...themes);
        document.body.classList.add(theme);
    }, [themes, theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
