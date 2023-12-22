import { useTranslation } from 'react-i18next';
import cn from '@/shared/lib/classNames';
import styles from './LangSwitcher.module.scss';
import { Button } from '@/shared/ui/Button';

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const {
    className,
  } = props;

  const { i18n, t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'uk' ? 'en' : 'uk');
  };

  return (
    <Button
      className={cn(styles.root, className)}
      onClick={toggle}
    >
      {t('locale')}
    </Button>
  );
};
