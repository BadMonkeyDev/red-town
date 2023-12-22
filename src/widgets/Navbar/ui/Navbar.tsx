import { useTranslation } from 'react-i18next';
import cn from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import styles from './Navbar.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>{t('main')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{t('about')}</AppLink>
      </div>
    </div>
  );
};
