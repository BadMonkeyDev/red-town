import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cn from 'classnames';
import styles from './PageError.module.scss';

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
        <div className={cn(styles.root, className)}>
            <p>{t('Unexpected error')}</p>
            <AppButton onClick={refreshPage} type="button" variant={AppButtonVariant.OUTLINED}>
                {t('Refresh page')}
            </AppButton>
        </div>
    );
};
