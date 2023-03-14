import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const refreshPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('Unexpected error')}</p>
            <AppButton onClick={refreshPage} type="button" variant={AppButtonVariant.OUTLINED}>
                {t('Refresh page')}
            </AppButton>
        </div>
    );
};
