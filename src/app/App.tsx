import cn from '@/shared/lib/classNames'
import {Navbar} from "@/widgets/Navbar";
import {ThemeEnum, useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/router";
import './styles/index.scss'

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <AppRouter />
      <button
        onClick={toggleTheme}>{`switch to ${theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK}`}</button>
    </div>
  )
}