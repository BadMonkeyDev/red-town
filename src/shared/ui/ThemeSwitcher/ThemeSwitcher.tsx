import cn from '@/shared/lib/classNames';
import styles from './ThemeSwitcher.module.scss';
import {ThemeEnum, useTheme} from "@/app/providers/ThemeProvider";
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import {Button} from "@/shared/ui/Button";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const {
    className,
  } = props;

  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      className={cn(styles.root, className)}
      onClick={toggleTheme}
    >
        {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}