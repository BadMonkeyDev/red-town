import cn from '@/shared/lib/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button } from '@/shared/ui/Button';
import { ThemeEnum, useTheme } from '@/app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const {
    className,
  } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cn(styles.root, className)}
      onClick={toggleTheme}
    >
      {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
