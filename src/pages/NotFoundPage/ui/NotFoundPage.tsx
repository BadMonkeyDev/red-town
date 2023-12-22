import { useTranslation } from 'react-i18next';
import cn from '@/shared/lib/classNames';
import styles from './NotFoundPage.module.scss';

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.notFoundText}>
        <span>404 </span>
        <span>{t('page_not_found')}</span>
      </div>
    </div>
  );
};
