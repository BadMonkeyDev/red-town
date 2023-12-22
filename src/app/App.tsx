import { Suspense } from 'react';
import cn from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/router';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
