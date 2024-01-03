import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

export interface BugButtonProps {
    className?: string;
}

export const BugButton = (props: BugButtonProps) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  const [error, setError] = useState<boolean>(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={throwError} className={cn('', className)}>
      {t('throw_error')}
    </Button>
  );
};
