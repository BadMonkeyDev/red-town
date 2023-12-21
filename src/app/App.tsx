import {Link} from 'react-router-dom'
import cn from '@/shared/lib/classNames'
import {useTheme, ThemeEnum} from "@/app/providers/ThemeProvider";
import './styles/index.scss'
import {AppRouter} from "@/app/providers/router";

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cn('app', theme)}>
      <ul>
        <li>
          <button onClick={toggleTheme}>{`switch to ${theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK}`}</button>
        </li>
        <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <AppRouter />
    </div>
  )
}