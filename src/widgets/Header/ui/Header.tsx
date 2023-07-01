import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { AppButton, AppButtonColor, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cn from 'classnames';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const { t } = useTranslation();
    return (
        <div className={cn(styles.root, className)}>
            <div className={styles.items}>
                <AppButton
                    variant={AppButtonVariant.CLEAR}
                    color={AppButtonColor.SECONDARY_INVERTED}
                    className={styles.links}
                    onClick={onShowModal}
                >
                    {t('Sign in')}
                </AppButton>
            </div>

            <LoginModal
                isOpen={isOpen}
                onClose={onCloseModal}
            />
        </div>
    );
};
