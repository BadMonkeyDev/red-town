import cn from '@/shared/lib/classNames'
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink";
import styles from './Navbar.module.scss';
import {ThemeSwitcher} from "@/shared/ui/ThemeSwitcher";

export interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const {
    className,
  } = props;

  return (
    <div className={cn(styles.root, className)}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">about</AppLink>
      </div>
    </div>
  )
}