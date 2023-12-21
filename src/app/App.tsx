import cn from '@/shared/lib/classNames'
import {Navbar} from "@/widgets/Navbar";
import {useTheme} from "@/app/providers/ThemeProvider";
import {AppRouter} from "@/app/providers/router";
import './styles/index.scss'
import {Sidebar} from "@/widgets/Sidebar";

export const App = () => {
  const {theme} = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <div className={'content-page'}>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}