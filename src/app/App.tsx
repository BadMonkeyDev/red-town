import {Suspense} from "react";
import {Link, Route, Routes} from 'react-router-dom'
import cn from '@/shared/lib/classNames'
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {useTheme, ThemeEnum} from "@/app/providers/ThemeProvider";
import './styles/index.scss'

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
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}