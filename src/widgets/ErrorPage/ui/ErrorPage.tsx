import { useTranslation } from 'react-i18next';
import cn from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import syles from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cn(syles.root, className)}>
      <p>{t('unexpected_error')}</p>
      <Button onClick={reloadPage}>{t('reload_page')}</Button>
    </div>
  );
};
