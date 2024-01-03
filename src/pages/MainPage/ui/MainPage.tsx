import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      {t('main')}
      <BugButton />
    </div>
  );
};

export default MainPage;
