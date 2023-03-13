import { AppButton, AppThemeButton } from 'shared/ui/AppButton/AppButton';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Error testing component
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <AppButton
            onClick={throwError}
            type="button"
            theme={AppThemeButton.OUTLINED}
        >
            {t('throw error')}
        </AppButton>
    );
};
