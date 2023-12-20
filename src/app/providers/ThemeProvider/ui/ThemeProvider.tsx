import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum} from "../model/ThemeContext";
import {PropsWithChildren, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum ?? ThemeEnum.LIGHT

export const ThemeProvider = ({children}: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps} >
      {children}
    </ThemeContext.Provider>
  )
}